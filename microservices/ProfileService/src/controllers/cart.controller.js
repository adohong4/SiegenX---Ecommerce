'use strict'

const CartService = require('../services/cart.service')
const { CREATED, OK, SuccessResponse } = require('../core/success.response');

class CartController {
    addToCart = async (req, res, next) => {
        try {
            const result = await CartService.addToCart(req)

            new CREATED({
                message: "Thêm vào giỏ hàng",
                metadata: result.cart
            }).send(res)
        } catch (error) {
            next(error);
        }
    }

    addQuantityToCart = async (req, res, next) => {
        try {
            const result = await CartService.addQuantityToCart(req)

            new CREATED({
                message: "Thêm số lượng vô giỏ hàng thành công",
                metadata: result.cart
            }).send(res)
        } catch (error) {
            next(error);
        }
    }

    removeFromCart = async (req, res, next) => {
        try {
            const result = await CartService.removeFromCart(req)

            new CREATED({
                message: "Xóa khỏi giỏ hàng",
                metadata: result.cart
            }).send(res)
        } catch (error) {
            next(error);
        }
    }

    getCart = async (req, res, next) => {
        try {
            const { userId } = req.body;
            const result = await CartService.getCart(userId);

            new OK({
                message: "Lấy thông tin giỏ hàng",
                metadata: result.cartData
            }).send(res);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CartController();