'use strict';

const productModel = require('../models/product.model');
const { BadRequestError, NotFoundError } = require('../core/error.response');

class ShopService {

    // getAll
    static async getAllProducts() {
        try {
            const products = await productModel.find();

            return {
                metadata: {
                    products: products
                }
            };
        } catch (error) {
            console.error(error);
            throw new BadRequestError('Error fetching products');
        }
    }
    // getProductBySlug
    static async getProductBySlug(productSlug) {
        try {
            // Sử dụng findOne để tìm kiếm theo slug
            const product = await productModel.findOne({ product_slug: productSlug });

            if (!product) {
                throw new NotFoundError('Product not found');
            }

            return {
                metadata: {
                    product: product // Trả về dữ liệu sản phẩm
                }
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }


    // getByID
    static async getProductById(productId) {
        try {
            const product = await productModel.findById(productId);

            if (!product) {
                throw new NotFoundError('Product not found');
            }

            return {
                metadata: {
                    product: product
                }
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    // updateProduct
    static async updateProduct(productId, updateData) {
        try {
            const updatedProduct = await productModel.findByIdAndUpdate(productId, updateData, { new: true, runValidators: true });

            if (!updatedProduct) {
                throw new NotFoundError('Product not found');
            }

            return {
                metadata: {
                    product: updatedProduct
                }
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

module.exports = ShopService;
