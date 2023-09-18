import express, { Request, Response, NextFunction } from 'express';
import config from '../config';
import { createClient } from '@supabase/supabase-js'


const router = express.Router();

// Create a single supabase client for interacting with database
const supabase = createClient(config.supabaseUrl,config.supabaseKey);


// Placing an order
router.post('/order', async (req: Request, res: Response, next: NextFunction) => {

    
   res.json({ error: null, message: "Hi mom" });
});

// Getting all orders
router.get('/order', async (req: Request, res: Response, next: NextFunction) => {    
    const {data, error} = await supabase
    .from('orders')
    .select()
    res.send(data);
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




