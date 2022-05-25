const http = require('http');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.sqlite3');

const pp = require('preprocess');

const PORT = process.env.PORT || 3000;
const server = http.createServer();

function OnServerCreate()
{
	console.log("server created: listening on "+ PORT);
}

const mimeList = {
		    html: 'text/html',
		    txt: 'text/plain',
		    css: 'text/css',
		    gif: 'image/gif',
		    jpg: 'image/jpeg',
		    png: 'image/png',
		    svg: 'image/svg+xml',
		    js: 'application/javascript'
};

const pubDir = path.join(__dirname, process.env.PUBLIC_DIR);




server.on('request', Response);
server.listen(PORT, OnServerCreate);


function FileResponse(res, file)
{
    var type = mimeList[path.extname(file).slice(1)] || 'text/plain';
    var content = undefined;

    if (type == 'text/html') {
        try {
            
            content = fs.readFileSync(file, 'utf8');
            res.setHeader('Content-Type', type);
            res.end(pp.preprocess(content, { PLACE: 'samara ', PUBLIC_DIR: process.env.PUBLIC_DIR }));

        } catch (err) {
            console.log(err.message);
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        }
    } else {
        var s = fs.createReadStream(file);

        s.on('open', function () {

            res.setHeader('Content-Type', type);
            s.pipe(res);
        });

        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    }

    

    

    
}

function GetResponse(req, res)
{
	var reqpath = req.url.toString().split('?')[0];
	var file = path.join(pubDir, reqpath.replace(/\/$/, '/index.html'));

    if (file.indexOf(pubDir + path.sep) !== 0) {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Forbidden');
    }
    
    FileResponse(res, file);
}

function Response(req, res)
{

    if (req.method == 'GET') {
        GetResponse(req, res);
    }else
    {
    	res.statusCode = 501;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Method not implemented');
    }
 
}

