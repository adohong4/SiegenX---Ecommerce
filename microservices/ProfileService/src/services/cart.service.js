'use strict'

const userModel = require("../models/user.model");

class CartService {
    static addToCart = async (req) => {
        try {
            let userData = await userModel.findById(req.body.userId);
            let cartData = await userData.cartData;
            if (!cartData[req.body.itemId]) {
                cartData[req.body.itemId] = 1;
            }
            else {
                cartData[req.body.itemId] += 1;
            }
            const updatedUser = await userModel.findByIdAndUpdate(req.body.userId, { cartData });
            return {
                cart: updatedUser.cartData
            }
        } catch (error) {
            throw error
        }
    }

    static addQuantityToCart = async (req) => {
        try {
            let userData = await userModel.findById(req.body.userId);
            let cartData = await userData.cartData;

            const quantity = req.body.quantity;

            if (quantity <= 0) {
                throw new Error("Số lượng phải lớn hơn 0");
            }

            if (!cartData[req.body.itemId]) {
                cartData[req.body.itemId] = quantity;
            }
            else {
                cartData[req.body.itemId] += quantity;
            }
            const updatedUser = await userModel.findByIdAndUpdate(req.body.userId, { cartData });
            return {
                cart: updatedUser.cartData
            }
        } catch (error) {
            throw error
        }
    }

    // remove item from user cart
    static removeFromCart = async (req) => {
        try {
            let userData = await userModel.findById(req.body.userId)
            let cartData = await userData.cartData;
            if (cartData[req.body.itemId] > 0) {
                cartData[req.body.itemId] -= 1;
            }
            const updatedUser = await userModel.findByIdAndUpdate(req.body.userId, { cartData })
            return {
                cart: updatedUser.cartData
            }
        } catch (error) {
            throw error
        }
    }

    // fetch user cart data
    static getCart = async (userId) => {
        try {
            let userData = await userModel.findById(userId)

            if (!userData) {
                throw new Error("User not found");
            }

            let cartData = userData.cartData;
            return {
                cartData
            }
        } catch (error) {
            throw error;
        }
    }

}

module.exports = CartService;