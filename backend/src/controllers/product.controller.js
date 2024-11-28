// controllers/products.controller.js
'use strict';

const ProductService = require('../services/products.service');
const { CREATED } = require('../core/success.response');

class ProductController {
    static async addProduct(req, res, next) {
        try {
            const productData = req.body;  // Lấy dữ liệu từ request body
            const result = await ProductService.createProduct(productData);  // Gọi phương thức tạo sản phẩm từ ProductService

            // Trả về kết quả thành công
            new CREATED({
                message: 'Product created successfully',
                metadata: result.metadata.product
            }).send(res);
        } catch (error) {
            next(error);  // Chuyển lỗi tới middleware xử lý lỗi
        }
    }
}

module.exports = ProductController;
