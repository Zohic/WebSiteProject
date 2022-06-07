require('dotenv').config();
const path = require('path');

const Server = require("./Server.js");

const reactModels = require("./reactModels.jsx");

const PORT = process.env.PORT || 3000;
const pubDir = path.join(__dirname, process.env.PUBLIC_DIR);
const database = require('./database');

const sendMail = require('./emailer');
const { randomUUID } = require('crypto');



const baseUrl = "http://localhost:" + PORT;
const server = new Server(baseUrl, pubDir);
server.Listen(PORT);


server.responses.get('GET').set('/',
    function (req, res) {
        res.writeHead(302, { 'Location': '/mainPage/index.html' });
        res.end();
    }
);
server.responses.get('GET').set('/mainPage',
    function (req, res) {
        res.writeHead(302, { 'Location': '/mainPage/index.html' });
        res.end();
    }
);

server.responses.get('GET').set('/add',
    function (req, res) {
        database.AddOrder(0, "zakhar", "233", "mail@mail");
        res.end();
    }
);

server.responses.get('GET').set('/confirm',
    function (req, res) {
        console.log("confirmed");
        const url = new URL(path.join(baseUrl, req.url));
 
        database.VerifyOrder(url.searchParams.get("id"));

        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end("заказ номер " + url.searchParams.get("id")+" подтвержден, ожидайте звонка");
    }
);

server.responses.get('GET').set('/discard',
    function (req, res) {
        console.log("discarded");
        const url = new URL(path.join(baseUrl, req.url));

        database.DisсardOrder(url.searchParams.get("id"));

        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end("заказ отменён");
    }
);


server.responses.get('GET').set('/get-services',
    function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(JSON.stringify(database.ServicesInfo));
    }
);

server.responses.get('POST').set('/submit-order',
    function (req, res) {
        let body = "";
        req.on("data", function (chunk) { body += chunk; })
        req.on("end", function () {
            console.log(body);
            const data = JSON.parse(body);
            const oId = randomUUID();
            database.AddOrder(data.service, data.name, data.phone, data.email, oId);

            linkOk = baseUrl + "/confirm?id=" + oId;
            linkNot = baseUrl + "/discard?id=" + oId;

            sendMail(data.email, linkOk, linkNot);
            res.end();
        });
    }
);



server.renders = [
    {
        divId: "headerImport",
        model: reactModels.Header
    },
    {
        divId: "footerImport",
        model: reactModels.Footer
    },
    {
        divId: "serviceList",
        model: reactModels.ServiceSections
    }
];

const aboutPlace = {
    place: "городок",
    phone: "8 800 555-35-35",
    email: "somemail@mail.com"
};

server.renderPages.set("/mainPage/index.html", function (req, res) {
    return {
        page: path.basename(req.url),
        about: aboutPlace
    };
});

server.renderPages.set("/mainPage/service.html", function (req, res) {
    return {
        page: path.basename(req.url),
        about: aboutPlace,
        ServicesInfo: database.ServicesInfo
    };
});








