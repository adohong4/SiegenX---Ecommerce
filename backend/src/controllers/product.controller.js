'use strict';

const ProductService = require('../services/products.service');
const { CREATED } = require('../core/success.response');
const productModel = require('../models/product.model');

// Đưa phương thức upload vào ProductController
class ProductController {
    // Phương thức thêm sản phẩm
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

    // Phương thức upload ảnh sản phẩm
    static async uploadProductImage(req, res, next) {
        try {
            if (!req.file) {
                return res.status(400).json({ error: 'Không có file được tải lên!' });
            }

            const imagePath = `/uploads/${req.file.filename}`; // Đường dẫn ảnh

            // Tùy thuộc vào yêu cầu, bạn có thể lưu thông tin này vào database
            res.status(200).json({ message: 'Ảnh được tải lên thành công!', path: imagePath });
        } catch (error) {
            next(error); // Chuyển lỗi tới middleware xử lý lỗi
        }
    }
}

module.exports = ProductController;
