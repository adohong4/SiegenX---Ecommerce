'use strict';

const productModel = require('../models/product.model');
const userModel = require('../models/user.model');
const orderModel = require('../models/order.model');
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

    static async getTotalRevenue(req) {
        try {
            const { day, month, startDate, endDate } = req.query; // Thêm startDate và endDate vào query parameters
            const filter = {};

            // Lọc theo ngày nếu có
            if (day) {
                const targetDate = new Date(day);
                const startOfDay = new Date(targetDate.setHours(0, 0, 0, 0)); // 00:00 UTC+7
                const endOfDay = new Date(targetDate.setHours(23, 59, 59, 999)); // 23:59 UTC+7
                console.log("Start of day (UTC):", startOfDay);
                console.log("End of day (UTC):", endOfDay);
                filter.date = { $gte: startOfDay, $lt: endOfDay };
            }

            // Lọc theo tháng nếu có
            if (month) {
                const [year, monthNumber] = month.split('-');
                const startOfMonth = new Date(year, monthNumber - 1, 1);
                const endOfMonth = new Date(year, monthNumber, 0);

                filter.date = { $gte: startOfMonth, $lte: endOfMonth };
            }

            // Lọc theo khoảng ngày bất kỳ nếu có
            if (startDate && endDate) {
                // Chuyển đổi startDate và endDate sang dạng Date
                const start = new Date(startDate);
                const end = new Date(endDate);
            
                // Đảm bảo thời gian được thiết lập chính xác cho khoảng thời gian
                start.setHours(0, 0, 0, 0); // Bắt đầu ngày từ 00:00:00
                end.setHours(23, 59, 59, 999); // Kết thúc ngày tại 23:59:59
            
                console.log("Start of day (UTC):", start);
                console.log("End of day (UTC):", end);
                // Thiết lập bộ lọc
                filter.date = { $gte: start, $lte: end };
            }
            

            // Truy vấn đơn hàng theo filter
            const orders = await orderModel.find(filter);

            // Tính tổng doanh thu
            const totalRevenue = orders.reduce((acc, order) => {
                if (!order.items || order.items.length === 0) return acc;
                const orderRevenue = order.items.reduce((sum, item) => {
                    const itemRevenue = (item.price || 0) * (item.quantity || 0);
                    return sum + itemRevenue;
                }, 0);
                return acc + orderRevenue;
            }, 0);

            return { totalRevenue };
        } catch (error) {
            console.error("Error while calculating total revenue:", error);
            throw new BadRequestError("Error while calculating total revenue");
        }
    }

}
module.exports = StatisticalService;

