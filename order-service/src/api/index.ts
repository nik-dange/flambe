import express from 'express';

const router = express.Router();

router.use('/login', require('./login').router);
router.use('/register', require('./register').router);

module.exports = router;