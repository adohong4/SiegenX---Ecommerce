'use strict';

const productModel = require('../models/product.model');
const userModel = require('../models/user.model');
const { BadRequestError, NotFoundError } = require('../core/error.response');

class StatisticalService {
    static async getQuantityUser() {

        try {
            const userCount = await userModel.countDocuments();
            return { totalUsers: userCount };
        } catch (error) {
            throw new BadRequestError("Error while counting users");
        }

    }

    static async getQuantityProduct() {

        try {
            const productCount = await productModel.countDocuments();
            return { totalProducts: productCount };
        } catch (error) {
            throw new BadRequestError("Error while counting products");
        }

    }

}
module.exports = StatisticalService;