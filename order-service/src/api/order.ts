import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();


// Placing an order
router.post('/order', (req: Request, res: Response, next: NextFunction) => {
   res.json({ error: null, message: "Hi mom" });
});

// Getting all orders
router.get('/order', (req: Request, res: Response, next: NextFunction) => {    
    res.json({ error: null, message: "Hi mom" });
});

// Getting a specific order
router.get('/order/:id', (req: Request, res: Response, next: NextFunction) => {    
    res.json({ error: null, message: "Hi mom" });
});

// Getting all orders for a specific restaurant
router.get('/order/restaurant/:id', (req: Request, res: Response, next: NextFunction) => {    
    res.json({ error: null, message: "Hi mom" });
});

module.exports = { router };




