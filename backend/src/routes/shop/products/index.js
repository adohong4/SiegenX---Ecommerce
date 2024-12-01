

const express = require('express');
const ProductController = require('../../../controllers/product.controller');
const upload = require('../../../services/upload.service'); // Đảm bảo đường dẫn đúng
const { asyncHandler } = require('../../../helpers/asyncHandler');
const router = express.Router();
const productController = new ProductController();
// Route thêm sản phẩm
router.post('/add', asyncHandler(productController.addProduct));

// Route upload ảnh
router.post('/upload-image', upload.array('images', 5), asyncHandler(productController.uploadProductImage));

// Route upload thông số sản phẩm
router.post('/specification', asyncHandler(productController.createSpecification));

// Endpoint lấy danh sách thông số sản phẩm
router.get('/get-specification', asyncHandler(productController.getSpecifications));

module.exports = router;
