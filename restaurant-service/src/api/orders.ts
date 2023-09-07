import express, { Request, Response, NextFunction } from 'express';
import createMQProducer from '../producer';
import config from '../config';

const router = express.Router();

const QUEUE_NAME = 'eventdriven';

// Get all orders for a specific restaurant
router.get('/orders', (req: Request, res: Response, next: NextFunction) => {

  res.json({ error: null, message: "Hi mom" });
});



module.exports = { router };