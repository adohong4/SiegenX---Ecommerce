'use strict';

const express = require('express');
const ProductController = require('../../controllers/product.controller');
const { asyncHandler } = require('../../helpers/asyncHandler');
const router = express.Router();

router.get('/products', ProductController.getAllProducts);

router.get('/product/:id', asyncHandler(ProductController.getProductById));

router.get('/products/:slug', asyncHandler(ProductController.getProductBySlug));

router.put('/products/:id', asyncHandler(ProductController.updateProduct));

module.exports = router;
