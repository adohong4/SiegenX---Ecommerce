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
            const result = await ShopService.getAllProducts();
            new SuccessResponse({
                metadata: result.metadata,
            }).send(res);
        } catch (error) {
            next(error);
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
            const specification = new specificationModel(req.body);
            const savedSpecification = await specification.save();
            res.status(201).json({
                message: 'Specification created successfully',
                data: savedSpecification,
            });
        } catch (error) {
            next(error);
        }
    };

    // Phương thức lấy danh sách thông số sản phẩm
    getSpecifications = async (req, res, next) => {
        try {
            const specifications = await specificationModel.find();
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
