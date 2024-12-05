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

    static async getProductById(productId) {
        try {
            const product = await productModel.findById(productId);
            
            if (!product) {
                throw createError(404, 'Product not found');
            }
    
            return product;
        } catch (error) {
            console.error('Error fetching product:', error.message);  // Log chi tiết lỗi
            throw createError(500, 'Error fetching product');
        }
    }
    
}    

module.exports = ProductService;
