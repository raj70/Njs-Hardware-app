import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import bodyParser from 'body-parser';

export function setEnvironment(server) {
    if (process.env.NODE_ENV !== 'production') {
        setDevEnv(server);
    } else {
        setProdEnv(server);
    }
}

const setDevEnv = function (server) {
    process.env.NODE_ENV = "development";
    process.env.Db_Url = 'mongodb://localhost:27017/hardware-db';
    process.env.SIGN_SECRET = 'my-development-token';
    server.use(bodyParser.json());
    server.use(morgan('dev'));
    server.use(cors());
}

const setProdEnv = function (server) {
    process.env.NODE_ENV = "production";
    process.env.Db_Url = 'mongodb://localhost:27017/hardware-prod-db';
    process.env.SIGN_SECRET = 'my-production-token';
    server.use(bodyParser.json());
    server.use(express.static(__dirname + '/../dist'));
}