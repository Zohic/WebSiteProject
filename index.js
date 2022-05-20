const http = require('http');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
console.log(process);
console.log("envi = " + process.env.toString());
const PORT = process.env.PORT || 3000;

const server = http.createServer();



var mainPageHtml = '', mainPageCss = '', mainPageJs = '';
fs.readFile("./public/mainPage.html",'utf8', (err, cont) => {mainPageHtml = cont});
fs.readFile("./public/mainPage.css",'utf8', (err, cont) => {mainPageCss = cont});
fs.readFile("./public/mainPage.js",'utf8', (err, cont) => {mainPageJs = cont});

var dir = path.join(__dirname, 'public');

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};


function OnServerCreate()
{
	console.log("server created: listening on "+ PORT);
}

function ResponseRequest(req, res)
{
    
	var reqpath = req.url.toString().split('?')[0];
    if (req.method !== 'GET') {
        res.statusCode = 501;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Method not implemented');
    }

    var file = path.join(dir, reqpath.replace(/\/$/, '/index.html'));

    if (file.indexOf(dir + path.sep) !== 0) {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Forbidden');
    }

    var type = mime[path.extname(file).slice(1)] || 'text/plain';

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

server.on('request', ResponseRequest);
server.listen(PORT, OnServerCreate);

