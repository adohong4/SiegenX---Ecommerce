'use strict';

const express = require('express');
const ProductController = require('../../controllers/product.controller');
const router = express.Router();

router.get('/products', ProductController.getAllProducts);

router.get('/product/:id', ProductController.getProductById);

router.get('/products/:slug', ProductController.getProductBySlug);

router.put('/products/:id', ProductController.updateProduct);

module.exports = router;
