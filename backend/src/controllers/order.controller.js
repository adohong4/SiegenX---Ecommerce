'use strict'

const OrderService = require('../services/order.service')
const { CREATED, OK, SuccessResponse } = require('../core/success.response');
const Order = require('../models/order.model');

class OrderController {
    getOrder = async (req, res, next) => {
        try {
            const result = await OrderService.getOrder()

            new CREATED({
                message: "Lấy thông tin hóa đơn thành công",
                metadata: result.orders
            }).send(res)
        } catch (error) {
            next(error);
        }
    }

    updateStatusOrder = async (req, res, next) => {
        try {
            const result = await OrderService.updateStatusOrder(req, res)

            new OK({
                message: "Cập nhật trạng thái thành công",
                metadata: result.order
            }).send(res)
        } catch (error) {
            next(error);
        }
    }

    deleteOrder = async (req, res, next) => {
        try {
            const result = await OrderService.deleteOrder(req.params.id)

            new OK({
                message: "Xóa đơn hàng thành công",
                metadata: result.order
            }).send(res)
        } catch (error) {
            next(error);
        }
    }

    userOrder = async (req, res, next) => {
        try {
            const result = await OrderService.userOrder(req.body.userId)

            new OK({
                message: "Hiển thị đơn hàng thành công",
                metadata: result.data
            }).send(res)
        } catch (error) {
            next(error);
        }
    }

    getOrderWithPagination = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;
            const skip = (page - 1) * limit;
            const totalOrder = await OrderService.countDocuments();
            const orders = await OrderService.find(skip, limit);

            res.status(200).json({
                message: 'Orders fetched successfully',
                data: orders,
                pagination: {
                    total: totalOrder,
                    currentPage: page,
                    totalPages: Math.ceil(totalOrder / limit),
                    limit,
                },
            });
        } catch (error) {
            next(error);
        }
    };
}
module.exports = new OrderController();