'use strict'

const OrderService = require('../services/order.service')
const { CREATED, OK, SuccessResponse } = require('../core/success.response');

class OrderController {
    getOrder = async (req, res, next) => {
        try {
            const result = await OrderService.getOrder()
            console.log('td: ', result)

            new CREATED({
                message: "Get Order",
                metadata: result.orders
            }).send(res)
        } catch (error) {
            next(error);
        }
    }

}
module.exports = new OrderController();