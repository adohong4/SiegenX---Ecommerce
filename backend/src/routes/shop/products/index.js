'use strict';

const express = require('express');
const ProductController = require('../../../controllers/product.controller'); // Đảm bảo tên đúng
const upload = require('../../../../upload'); // Đảm bảo đường dẫn đúng
const router = express.Router();

// Route thêm sản phẩm
router.post('/add', ProductController.addProduct); 

// Route upload ảnh
router.post('/upload-image', upload.single('image'), ProductController.uploadProductImage); // Đảm bảo đúng tên Controller

module.exports = router;
