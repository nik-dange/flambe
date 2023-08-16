import express, { Request, Response, NextFunction } from 'express';
import createMQProducer from '../../producer';
import config from '../../config';

const router = express.Router();

const QUEUE_NAME = 'eventdriven';
const producer = createMQProducer(config.amqpUrl, QUEUE_NAME);

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  const {email, password} = req.body;
  console.log("Request recieved, registering ", email);

  const message = {
    action: 'REGISTER',
    data: {
      email,
      password
    }
  };

  // Call the producer method w/ stringified message
  const newMessage: String = JSON.stringify(message);
  producer(JSON.stringify(newMessage));

  res.json({ error: null, message: "Hi mom" });
})

module.exports = { router };