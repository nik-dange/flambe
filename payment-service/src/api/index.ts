import express, { Request, Response, NextFunction } from 'express';
import createMQConsumer from '../consumer';
import config from '../config';

const router = express.Router();

const consumer = createMQConsumer(config.amqpUrl, config.queueName);

consumer();


router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ error: null, message: "Notification Service" });
});

module.exports = router;