'use strict';

const productModel = require('../models/product.model');
const imagesModel = require('../models/images.model');
const specificationModel = require('../models/specification.model');
const createError = require('http-errors'); 
class ProductService {
    static async createProduct(productData) {
        try {
            const newProduct = await productModel.create(productData);

            return {
                metadata: {
                    product: newProduct
                }
            };
        } catch (error) {
            console.error(error);
            throw createError(400, 'Error creating product'); // Thay BadRequestError bằng createError
        }
    }
}

module.exports = ProductService;