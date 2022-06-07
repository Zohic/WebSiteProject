const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const reactDOM = require('react-dom/server');
const reactDO = require('react-dom/client');

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

module.exports = class Server {

    constructor(bUrl, pubDir) {
        this.server = http.createServer();

        this.responses = new Map();
        this.responses.set('GET', new Map());
        this.responses.set('POST', new Map());
        this.responses.set('PUT', new Map());
        this.responses.set('DELETE', new Map());

        this.renders = [];
        this.renderPages = new Map();

        this.baseUrl = bUrl;

        this.publicDir = pubDir;

        this.server.on('request', this.Response.bind(this));

    }
    Listen(port) {
        try {
            this.server.listen(port, () => { console.log("server listening at portik " + port); })
        } catch (e) {
            console.log(e);
        }
    }



    Response(req, res) {

        const url = new URL(path.join(this.baseUrl, req.url));
        //console.log(req.method+" request "+req.url);

        if (path.extname(url.pathname) == '') {
            const corResp = this.responses.get(req.method).get(url.pathname);

            if (corResp) {
                corResp(req, res);
            } else {
                res.statusCode = 501;
                res.setHeader('Content-Type', 'text/plain');
                return res.end("Can't help you");
            }
        } else {
            this.PublicFileResponse(req, res, url.pathname);
        }
    }

    PublicFileResponse(req, res, publicPath) {
        //console.log("sending public file");

        const file = path.join(this.publicDir, publicPath);

        const funcForRedner = this.renderPages.get(publicPath);

        //if type is html and there is render for it
        if (mimeList[path.extname(file).slice(1)] == 'text/html' &&
            funcForRedner) {
            this.FileRenderResponse(res, file, funcForRedner(req, res));
            return;
        }

        if (file.indexOf(this.publicDir + path.sep) != 0) {
            res.statusCode = 403;
            res.setHeader('Content-Type', 'text/plain');
            return res.end('Forbidden');
        }

        this.FileResponse(res, file);
    }

    FileResponse(res, file) {
        const type = mimeList[path.extname(file).slice(1)] || 'text/plain';
        //console.log("sending " + file);

        const s = fs.createReadStream(file);
        s.on('open', function () {
            res.setHeader('Content-Type', type);
            res.statusCode = 200;
            s.pipe(res);
        });

        s.on('error', function () {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not found');
        });
    }



    FileRenderResponse(res, file, rendData) {
        //var content = fs.readFileSync(, 'utf8');
        ejs.renderFile(file, rendData, function (err, content) {
            if (err) {
                console.log("render err: " + err.message);
                res.setHeader('Content-Type', 'text/plain');
                res.statusCode = 404;
                res.end('Not found');
            }
            res.setHeader('Content-Type', 'text/html');
            res.end(content);
        });
        
    }

}

