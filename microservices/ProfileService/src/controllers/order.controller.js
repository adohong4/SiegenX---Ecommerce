'use strict'

const OrderService = require('../services/order.service')
const { CREATED, OK, SuccessResponse } = require('../core/success.response');
const Order = require('../models/order.model');
const mongoose = require('mongoose');

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
            const { userId } = req.body;

            const result = await OrderService.userOrder(userId)

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

    getOrderByID = async (req, res, next) => {
        try {
            const { id, page = 1, limit = 10 } = req.query;

            // Kiểm tra nếu id không phải là ObjectId hợp lệ
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    status: false,
                    message: 'ID không hợp lệ',
                });
            }

            const skip = (page - 1) * limit;
            const totalOrder = await OrderService.countDocumentsByID(id);
            const order = await OrderService.findByID(id, skip, limit);

            res.status(200).json({
                status: true,
                message: 'Tìm kiếm thông tin hóa đơn thành công!',
                data: order,
                pagination: {
                    total: totalOrder,
                    currentPage: parseInt(page),
                    totalPages: Math.ceil(totalOrder / limit),
                    limit: parseInt(limit),
                },
            });
        } catch (error) {
            next(error);
        }
    };
}
module.exports = new OrderController();