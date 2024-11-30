'use strict';

const ShopService = require('../services/shop.service');
const ProductService = require('../services/products.service');
const { CREATE,SuccessResponse  } = require('../core/success.response');

// Đưa phương thức upload vào ProductController
class  ProductController {
    // Phương thức thêm sản phẩm
    static addProduct = async (req, res, next) => {
        try {
            const productData = req.body;  // Lấy dữ liệu từ request body
            const result = await ProductService.createProduct(productData);  // Gọi phương thức tạo sản phẩm từ ProductService

            // Trả về kết quả thành công
            new CREATE({
                message: 'Product created successfully',
                metadata: result.metadata.product
            }).send(res);
        } catch (error) {
            next(error);  // Chuyển lỗi tới middleware xử lý lỗi
        }
    }

    static uploadProductImage = async (req, res, next) => {
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


    static getAllProducts = async (req, res, next) => {
        try {
            const result = await ShopService.getAllProducts();
            new SuccessResponse({
                metadata: result.metadata
            }).send(res);
        } catch (error) {
            next(error);
        }
    };

    // Lấy sản phẩm theo ID
    static getProductById = async (req, res, next) => {
        try {
            const result = await ShopService.getProductById(req.params.id);
            new SuccessResponse({
                metadata: result.metadata
            }).send(res);
        } catch (error) {
            next(error);
        }
    };

    static getProductBySlug = async (req, res, next) => {
        try {
            const { slug } = req.params;
            const result = await ShopService.getProductBySlug(slug);
            new SuccessResponse({
                message: 'Product fetched successfully by slug',
                metadata: result.metadata
            }).send(res);
        } catch (error) {
            next(error);
        }
    };

    // Cập nhật sản phẩm
    static updateProduct = async (req, res, next) => {
        try {
            const result = await ShopService.updateProduct(req.params.id, req.body);
            new SuccessResponse({
                message: 'Product updated successfully',
                metadata: result.metadata
            }).send(res);
        } catch (error) {
            next(error);
        }
    };
}

module.exports = ProductController;