import express from 'express';
import laptopcontroller from './api/controllers/laptopcontroller';

const server = express();

//https://enable-cors.org/server_expressjs.html
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.use('/api', laptopcontroller);

server.get("/", (req, res) => {
    res.send("not in service");
    console.log("serving is requested");
});

server.listen(2000, () => {
    console.info("express running at 2000");
});