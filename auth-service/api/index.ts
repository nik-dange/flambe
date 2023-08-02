import express from 'express';

const router = express.Router();

router.use('/routeA', require('./routeA').router);
router.use('/routeB', require('./routeB').router);
router.use('/routeC', require('./routeC').router);

module.exports = router;