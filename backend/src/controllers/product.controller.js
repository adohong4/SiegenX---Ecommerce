'use strict';

const ShopService = require('../services/shop.service');
const ProductService = require('../services/products.service');
const { CREATED, SuccessResponse } = require('../core/success.response');
const { specificationModel } = require('../models/specification.model');
const Image = require('../models/images.model'); // Nhập Image model
const Product = require('../models/product.model');
const mongoose = require('mongoose');

class ProductController {
    // Phương thức thêm sản phẩm
    addProduct = async (req, res, next) => {
        try {
            const productData = req.body; // Lấy dữ liệu từ request body
            const result = await ProductService.createProduct(productData); // Gọi phương thức tạo sản phẩm từ ProductService

            // Trả về kết quả thành công
            new CREATED({
                message: 'Product created successfully',
                metadata: result.metadata.product,
            }).send(res);
        } catch (error) {
            next(error); // Chuyển lỗi tới middleware xử lý lỗi
        }
    };
    uploadProductImage = async (req, res, next) => {
        try {
            const productId = req.params._id;
    
            // Kiểm tra tính hợp lệ của productId
            if (!mongoose.Types.ObjectId.isValid(productId)) {
                return res.status(400).json({ error: 'Invalid product ID format' });
            }
    
            // Lấy sản phẩm theo ID
            const product = await Product.findById(productId);
    
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
    
            // Kiểm tra nếu không có ảnh nào được tải lên
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ error: 'No files were uploaded!' });
            }
    
            // Tạo mảng các đối tượng ảnh
            const imagePaths = req.files.map(file => ({
                _id: product._id,  // Gán _id của hình ảnh trùng với _id của sản phẩm
                filename: file.filename,
                url: `/uploads/${file.filename}` // Đường dẫn ảnh
            }));
    
            // Cập nhật ảnh cho sản phẩm
            product.images.push(...imagePaths);  // Thêm các ảnh vào mảng images của sản phẩm
            await product.save();  // Lưu sản phẩm với ảnh mới
    
            res.status(200).json({
                message: 'Images uploaded successfully!',
                paths: imagePaths,
            });
        } catch (error) {
            console.error('Error in uploadProductImage:', error);
            next(error);
        }
    };
    
    
    
    
    

    getAllProducts = async (req, res, next) => {
        try {
            // Lấy số trang từ query params (nếu không có mặc định là 1)
            const page = parseInt(req.query.page) || 1;
            const limit = 9; // Cố định số sản phẩm trên mỗi trang là 9
            const skip = (page - 1) * limit; // Tính toán số sản phẩm cần bỏ qua
    
            // Lấy danh sách sản phẩm với skip và limit
            const [products, total] = await Promise.all([
                Product.find()
                    .skip(skip) // Bỏ qua sản phẩm của các trang trước
                    .limit(limit) // Lấy đúng số sản phẩm cần hiển thị trên trang
                    .exec(),
                Product.countDocuments() // Tính tổng số sản phẩm
            ]);
    
            // Tính tổng số trang
            const totalPages = Math.ceil(total / limit);
    
            // Kiểm tra nếu vượt ngoài số trang có thể
            if (page > totalPages && totalPages > 0) {
                return res.status(404).json({
                    message: 'Page not found',
                    pagination: {
                        total,
                        page,
                        limit,
                        totalPages,
                    },
                });
            }
    
            // Trả về danh sách sản phẩm kèm thông tin phân trang
            res.status(200).json({
                message: 'Products fetched successfully',
                data: products,
                pagination: {
                    total, // Tổng số sản phẩm
                    page, // Trang hiện tại
                    limit, // Số sản phẩm trên mỗi trang
                    totalPages, // Tổng số trang
                },
            });
        } catch (error) {
            next(error); // Xử lý lỗi
        }
    };
    

    // Lấy sản phẩm theo ID
    getProductById = async (req, res, next) => {
        try {
            const result = await ShopService.getProductById(req.params.id);
            new SuccessResponse({
                metadata: result.metadata,
            }).send(res);
        } catch (error) {
            next(error);
        }
    };

    getProductBySlug = async (req, res, next) => {
        try {
            const { slug } = req.params;
            const result = await ShopService.getProductBySlug(slug);
            new SuccessResponse({
                message: 'Product fetched successfully by slug',
                metadata: result.metadata,
            }).send(res);
        } catch (error) {
            next(error);
        }
    };

    // Cập nhật sản phẩm
    updateProduct = async (req, res, next) => {
        try {
            const result = await ShopService.updateProduct(req.params.id, req.body);
            new SuccessResponse({
                message: 'Product updated successfully',
                metadata: result.metadata,
            }).send(res);
        } catch (error) {
            next(error);
        }
    };

    createSpecification = async (req, res, next) => {
        try {
            const productId = req.params._id;  // Lấy _id sản phẩm từ params
            const specificationData = req.body;  // Lấy thông số từ body request

            // Tạo mới một Specification
            const newSpecification = new specificationModel(specificationData);
            const savedSpecification = await newSpecification.save();  // Lưu thông số vào cơ sở dữ liệu

            // Tìm sản phẩm và thêm thông số vào mảng specifications
            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                { $push: { specifications: savedSpecification._id } },  // Thêm _id của Specification vào mảng specifications
                { new: true, useFindAndModify: false }  // Trả về sản phẩm đã cập nhật
            );

            if (!updatedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }

            // Trả về kết quả
            res.status(201).json({
                message: 'Specification added successfully',
                data: updatedProduct
            });
        } catch (error) {
            next(error);  // Xử lý lỗi nếu có
        }
    };

    

// Phương thức lấy danh sách thông số của sản phẩm
getSpecifications = async (req, res, next) => {
    try {
        const productId = req.params._id;  // Lấy _id sản phẩm từ params

        // Tìm các thông số (specifications) liên quan đến sản phẩm cụ thể
        const specifications = await specificationModel.find({ productId: productId });

        if (!specifications || specifications.length === 0) {
            return res.status(404).json({
                message: 'No specifications found for this product',
            });
        }

        // Trả về danh sách thông số
        res.status(200).json({
            message: 'Specifications fetched successfully',
            data: specifications,
        });
    } catch (error) {
        next(error);
    }
};

}

module.exports = ProductController;
