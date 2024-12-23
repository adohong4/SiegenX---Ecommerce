'use strict'

const OrderService = require('../services/order.service')
const { CREATED, OK, SuccessResponse } = require('../core/success.response');

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
                metadata: result.orders
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
}
module.exports = new OrderController();