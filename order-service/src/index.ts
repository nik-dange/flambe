import express, { Application } from "express";

const server: Application = express();

server.use(express.urlencoded({ extended: true}));
server.use(express.json());

server.use('/api/', require('./api'));

export default server;