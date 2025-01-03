'use strict'

const userModel = require("../../models/user.model")
const orderModel = require("../../models/order.model")

//placing user order for frontend
class StripeController {
    placeOrder = async (req, res) => {
        try {
            const newOrder = new orderModel({
                userId: req.body.userId,
                items: req.body.items,
                amount: req.body.amount,
                address: req.body.address,
                paymentMethod: "Thanh toán khi nhận hàng"
            });

            await newOrder.save();
            await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

            // Trả về phản hồi xác nhận đơn hàng
            res.json({ success: true, message: "Đơn hàng đã được đặt thành công, vui lòng thanh toán khi nhận hàng." });
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Có lỗi xảy ra khi đặt hàng." });
        }
    }
}

module.exports = new StripeController()