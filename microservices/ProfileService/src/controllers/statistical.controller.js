'use strict'

const orderModel = require("../models/order.model");

class StatisticalController {
    getTotalAmountLast7Days = async (req, res) => {
        try {
            const today = new Date();
            const last7Days = new Date(today);
            last7Days.setDate(today.getDate() - 7);

            // Truy vấn đơn hàng từ cơ sở dữ liệu
            const orders = await orderModel.find({
                createdAt: { $gte: last7Days, $lte: today }
            });

            const amountByDate = {};

            // Tính tổng amount cho mỗi ngày
            orders.forEach(order => {
                const orderDate = new Date(order.createdAt).toLocaleDateString('vi-VN');
                if (!amountByDate[orderDate]) {
                    amountByDate[orderDate] = 0;
                }
                amountByDate[orderDate] += order.amount;
            });

            // Tạo mảng kết quả cho 7 ngày gần nhất
            const result = [];
            for (let i = 6; i >= 0; i--) {
                const date = new Date();
                date.setDate(today.getDate() - i);
                const formattedDate = date.toLocaleDateString('vi-VN');
                result.push({
                    date: formattedDate,
                    totalAmount: amountByDate[formattedDate] || 0,
                });
            }

            // Trả về kết quả
            return res.status(200).json({
                status: 'success',
                message: 'Thống kê thành công.',
                metadata: result
            });
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: 'Có lỗi xảy ra khi lấy dữ liệu.'
            });
        }
    }
}

module.exports = new StatisticalController();