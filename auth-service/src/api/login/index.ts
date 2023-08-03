import express, { Request, Response, NextFunction } from 'express';

const router = express.Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ error: null, message: "Hi mom" });
});

module.exports = { router };