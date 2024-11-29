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

    static async uploadProductImage(req, res, next) {
        try {
            // Kiểm tra nếu không có ảnh nào được tải lên
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ error: 'Không có file nào được tải lên!' });
            }

            // Tạo mảng các đường dẫn ảnh
            const imagePaths = req.files.map(file => `/uploads/${file.filename}`); // Đường dẫn ảnh

            // Tùy thuộc vào yêu cầu, bạn có thể lưu thông tin này vào database
            // Nếu cần, bạn có thể lưu mảng imagePaths vào một sản phẩm, ví dụ:
            // const newProduct = new Product({ images: imagePaths, ... });

            res.status(200).json({
                message: 'Ảnh đã được tải lên thành công!',
                paths: imagePaths,  // Trả về mảng đường dẫn ảnh đã tải lên
            });
        } catch (error) {
            next(error); // Chuyển lỗi cho middleware xử lý lỗi
        }
    }
}

module.exports = ProductController;
