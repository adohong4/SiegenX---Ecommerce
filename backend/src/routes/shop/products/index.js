// routes/products/index.js
'use strict';

const express = require('express');
const ProductController = require('../../../controllers/product.controller'); 
const router = express.Router();

// Đảm bảo bạn đã khai báo đúng route
router.post('/add', ProductController.addProduct); 

module.exports = router;
