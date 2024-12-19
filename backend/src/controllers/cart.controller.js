'use strict'

const CartService = require('../services/cart.service')
const { CREATED, OK, SuccessResponse } = require('../core/success.response');

class CartController {
    addToCart = async (req, res, next) => {
        try {
            const cartData = req.body;
            const result = await CartService.addToCart(cartData)

            new CREATED({
                message: "Add to Cart",
                metadata: result
            }).send(res)
        } catch (error) {
            next(error);
        }
    }

    removeFromCart = async (req, res, next) => {
        try {
            const cartData = req.body;
            const result = await CartService.removeFromCart(cartData)

            new CREATED({
                message: "Remove From Cart",
                metadata: result
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
                message: "Get Cart",
                metadata: result.cartData
            }).send(res);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CartController();