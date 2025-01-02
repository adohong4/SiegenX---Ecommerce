'use strict'

const userModel = require("../models/user.model")
const orderModel = require("../models/order.model");
const { BadRequestError } = require("../core/error.response");

class OrderService {

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

    static userOrder = async (userId) => {
        if (!userId) {
            throw new BadRequestError('Không thấy id người dùng');
        }

        try {
            const orders = await orderModel.find({ userId }).sort({ createdAt: -1 });
            return { data: orders }
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
            .limit(limit)
            .sort({ createdAt: -1 });;
    }


    static findByCustomerName = async (customerName) => {
        try {
            const users = await userModel.find({ email: { $regex: email, $options: 'i' } }); 
            if (!users || users.length === 0) {
                throw new Error("No users found with the given email");
            }
            return { users };
        } catch (error) {
            throw error;
        }
    };
}


module.exports = OrderService;