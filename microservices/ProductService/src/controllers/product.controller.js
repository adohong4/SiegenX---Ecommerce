'use strict'

const ProductService = require("../services/product.services");
const { CREATED, OK, SuccessResponse, NOCONTENT } = require('../core/success.response');

class ProductController {
    createProduct = async (req, res, next) => {
        try {
            const result = await ProductService.createProduct(req, res, next);
            if (result) {
                new CREATED({
                    message: 'Đã thêm sản phẩm mới',
                    metadata: result.product
                }).send(res);
            }
        } catch (error) {
            next(error);
        }
    }

    updateProduct = async (req, res, next) => {
        try {
            const result = await ProductService.updateProduct(req, res, next);

            new CREATED({
                message: 'Cập nhật thành công!',
                metadata: result.product
            }).send(res);
        } catch (error) {
            next(error);
        }
    }
    getAllProduct = async (req, res, next) => {
        try {
            const result = await ProductService.getProduct(req.body);
            if (result) {
                new OK({
                    message: 'get Product OK',
                    metadata: result.product
                }).send(res);
            } else {
                res.status(400).json({ message: 'Registration failed' });
            }
        } catch (error) {
            next(error);
        }
    }

    getProductById = async (req, res, next) => {
        try {
            const result = await ProductService.getProductById(req.params.id);

            new OK({
                message: 'get Product By Id OK',
                metadata: result.product
            }).send(res);
        } catch (error) {
            next(error);
        }
    }

    getProductBySlug = async (req, res, next) => {
        try {
            const result = await ProductService.getProductBySlug(req.params.slug);

            new OK({
                message: 'get Product By Slug OK',
                metadata: result.product
            }).send(res);
        } catch (error) {
            next(error);
        }
    }

    deleteProduct = async (req, res, next) => {
        try {
            const result = await ProductService.deleteProduct(req.params.id);

            new OK({
                message: 'Xóa thành công',
                metadata: result.product
            }).send(res);
        } catch (error) {
            next(error);
        }
    }
    getProductsWithPagination = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;
            const skip = (page - 1) * limit;
            const totalProducts = await ProductService.countDocuments();

            const products = await ProductService.find(skip, limit);

            res.status(200).json({
                message: 'Sản phẩm đã được lấy thành công',
                data: products,
                pagination: {
                    total: totalProducts,
                    currentPage: page,
                    totalPages: Math.ceil(totalProducts / limit),
                    limit,
                },
            });
        } catch (error) {
            next(error);
        }
    };

    getProductByTitle = async (req, res, next) => {
        try {
            const { title, page = 1, limit = 10 } = req.query; // Lấy thêm tham số phân trang từ query
            const skip = (page - 1) * limit; // Tính skip

            const totalProducts = await ProductService.countDocumentsByTitle(title); // Đếm tổng sản phẩm khớp
            const products = await ProductService.findByTitle(title, skip, limit); // Lấy sản phẩm theo trang

            res.status(200).json({
                status: true,
                message: 'Tìm kiếm sản phẩm thành công!',
                data: products,
                pagination: {
                    total: totalProducts,
                    currentPage: parseInt(page),
                    totalPages: Math.ceil(totalProducts / limit),
                    limit: parseInt(limit),
                },
            });
        } catch (error) {
            next(error);
        }
    };

    static countDocumentsByTitle = async (title) => {
        return productModel.countDocuments({ title: { $regex: title, $options: 'i' } });
    };

    countProducts = async (req, res, next) => {
        try {
            const result = await ProductService.countDocuments();

            new OK({
                message: 'Thành công',
                metadata: result
            }).send(res);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ProductController();
