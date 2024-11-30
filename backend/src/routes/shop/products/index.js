

const express = require('express');
const ProductController = require('../../../controllers/product.controller');
const upload = require('../../../services/upload.service'); // Đảm bảo đường dẫn đúng
const Product = require('../../../models/product.model');
const router = express.Router();

// Route thêm sản phẩm
router.post('/add', ProductController.addProduct); 

// Route upload ảnh (dùng multer để upload nhiều ảnh)
router.post('/upload-image', upload.array('images', 5), ProductController.uploadProductImage);


module.exports = router;
