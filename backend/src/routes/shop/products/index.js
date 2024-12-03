

const express = require('express');
const ProductController = require('../../../controllers/product.controller');
const upload = require('../../../services/upload.service'); // Đảm bảo đường dẫn đúng
const { asyncHandler } = require('../../../helpers/asyncHandler');
const router = express.Router();
const productController = new ProductController();
// Route thêm sản phẩm
router.post('/add', asyncHandler(productController.addProduct));

// Route upload ảnh
router.post(
    '/upload-image/:_id',
    upload.array('images', 5), // Tối đa 5 ảnh được tải lên cùng lúc
    asyncHandler(productController.uploadProductImage)
);

// Route upload thông số sản phẩm
router.post('/specification/:_id', asyncHandler(productController.createSpecification));

// Endpoint lấy danh sách thông số sản phẩm
router.get('/get-specification/:_id', asyncHandler(productController.getSpecifications));
//Lấy phân trang sản phẩm
router.get('/pagination', asyncHandler(productController.getAllProducts));

module.exports = router;
