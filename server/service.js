import express from 'express';

import {
    setEnvironment
} from './config/env';
import {
    connectDb
} from './config/db';

import {
    setApiControllers
} from './config/routers';



const server = express();

setEnvironment(server);
connectDb(server);
setApiControllers(server);


server.get("/", (req, res) => {
    console.log(process.env.NODE_ENV);
    res.send("not in service");
    console.log("serving is requested");
});

server.listen(2000, () => {
    console.info("express running at 2000");
});