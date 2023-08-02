import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';


import createMQProducer from './producer';

// const PORT = 3001;
// const AMQP_URL = 'amqp://localhost:5672';
// const QUEUE_NAME = 'auth';


const server = express();

server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true}));
server.use(express.json());
server.use('/api', require('./api'));


server.listen(5000, () => {
  console.log(`Server is listening on port 5000`);
});

export default server;