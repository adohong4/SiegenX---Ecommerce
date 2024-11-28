'use strict';

const ShopService = require('../services/shop.service');
const { OK, CREATED, SuccessResponse } = require('../core/success.response');

class ProductController {
    getAllProducts = async (req, res, next) => {
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
    getProductById = async (req, res, next) => {
        try {
            const result = await ShopService.getProductById(req.params.id);
            new SuccessResponse({
                metadata: result.metadata
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
                metadata: result.metadata
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
                metadata: result.metadata
            }).send(res);
        } catch (error) {
            next(error);
        }
    };


}

module.exports = new ProductController();
