'use strict';

const productModel = require('../models/product.model');
const userModel = require('../models/user.model');
const orderModel = require('../models/order.model'); // Import thêm model order
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
    
    static async getTotalRevenue() {
        try {
            const orders = await orderModel.find();

            // Tính tổng doanh thu từ tất cả các đơn hàng
            const totalRevenue = orders.reduce((acc, order) => {
                const orderRevenue = order.items.reduce((sum, item) => {
                    return sum + (item.quantity * item.price);
                }, 0);
                return acc + orderRevenue;
            }, 0);

            return { totalRevenue };
        } catch (error) {
            throw new BadRequestError("Error while calculating total revenue");
        }
    }

}
module.exports = StatisticalService;

