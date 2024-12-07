'use strict'

const CartService = require('../services/cart.service')
const { CREATED, OK, SuccessResponse } = require('../core/success.response');

class CartController {
    addToCart = async (req, res, next) => {
        try {
            const cartData = req.body;
            const result = await CartController.addToCart(cartData)

            new CREATED({
                message: "Add to Cart",
                data: result
            }).send(res)
        } catch (error) {
            next(error);
        }
    }

    removeFromCart = async (req, res, next) => {
        try {
            const cartData = req.body;
            const result = await CartController.removeFromCart(cartData)

            new CREATED({
                message: "Remove From Cart",
                data: result
            }).send(res)
        } catch (error) {
            next(error);
        }
    }

    getCart = async (req, res, next) => {
        try {
            const cartData = req.body;
            const result = await CartController.getCart(cartData)

            new OK({
                message: "Get Cart",
                data: result
            }).send(res)
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CartController();