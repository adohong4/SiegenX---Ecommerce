'use strict'

const userModel = require("../models/user.model")
const orderModel = require("../models/order.model")

class OrderService {
    static addOrder = async () => {
        try {
            const newOrder = new orderModel({
                userId: req.body.userId,
                items: req.body.items,
                amount: req.body.amount,
                address: req.body.address
            })

            await newOrder.save();
            await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

            res.json({ success: true, newOrder })
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Error" })
        }
    }

    static getOrder = async () => {
        try {
            const orders = await orderModel.find({});

            return {
                orders
            }

        } catch (error) {
            throw error;
        }
    }

    static updateStatusOrder = async (req, res) => {
        try {
            const order = await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status })

            // if (!order) {
            //     throw new BadRequestError("Không tìm id Hóa đơn")
            // }

            return {
                order
            }
        } catch (error) {
            throw error;
        }
    }

    static deleteOrder = async (orderId) => {
        try {
            const order = await orderModel.findById(orderId)

            if (!order) {
                throw new BadRequestError("Không tìm id Hóa đơn")
            }

            await orderModel.findByIdAndDelete(orderId)

            return {
                order
            };
        } catch (error) {
            throw error;
        }
    }

    static countDocuments = async () => {
        return await orderModel.countDocuments();
    };


    static find = async (skip, limit) => {
        return await orderModel.find()
            .skip(skip)
            .limit(limit);
    }
}


module.exports = OrderService;