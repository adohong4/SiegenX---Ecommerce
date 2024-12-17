'use strict'

const ProductService = require("../services/product.services");
const { CREATED, OK, SuccessResponse } = require('../core/success.response');

class ProductController {
    createProduct = async (req, res, next) => {
        try {
            const result = await ProductService.createProduct(req, res, next);
            if (result) {
                new CREATED({
                    message: 'create Product successfull',
                    metadata: result.product
                }).send(res);
            } else {
                res.status(400).json({ message: 'Registration failed' });
            }
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
}

module.exports = new ProductController();
