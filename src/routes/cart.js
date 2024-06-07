const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add', cartController.addToCart);
router.get('/', cartController.viewCart);
router.post('/purchase', cartController.purchase);

module.exports = router;