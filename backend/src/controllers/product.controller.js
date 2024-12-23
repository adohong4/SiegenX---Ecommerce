'use strict'

const ProductService = require("../services/product.services");
const { CREATED, OK, SuccessResponse, NOCONTENT } = require('../core/success.response');
  
class ProductController {
    createProduct = async (req, res, next) => {
        try {
            const result = await ProductService.createProduct(req, res, next);
            if (result) {
                new CREATED({
                    message: 'create Product successfull',
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

            new NOCONTENT({
                message: 'delete successful!',
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

}

module.exports = new ProductController();
