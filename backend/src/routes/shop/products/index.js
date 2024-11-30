

const express = require('express');
const ProductController = require('../../../controllers/product.controller');
const upload = require('../../../services/upload.service'); // Đảm bảo đường dẫn đúng
const { asyncHandler } = require('../../../helpers/asyncHandler');
const router = express.Router();

// Route thêm sản phẩm
router.post('/add', asyncHandler(ProductController.addProduct));

// Route upload ảnh (dùng multer để upload nhiều ảnh)
router.post('/upload-image', upload.array('images', 5), asyncHandler(ProductController.uploadProductImage));


module.exports = router;
