'use strict'

const userModel = require("../models/user.model");

class CartService {
    static addToCart = async () => {
        try {
            let userData = await userModel.findById(req.body.userId);
            let cartData = await userData.cartData;
            if (!cartData[req.body.itemId]) {
                cartData[req.body.itemId] = 1;
            }
            else {
                cartData[req.body.itemId] += 1;
            }
            await userModel.findByIdAndUpdate(req.body.userId, { cartData });
            res.json({ success: true, message: "Added to Cart" });
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Error" });
        }
    }

    // remove item from user cart
    static removeFromCart = async () => {
        try {
            let userData = await userModel.findById(req.body.userId)
            let cartData = await userData.cartData;
            if (cartData[req.body.itemId] > 0) {
                cartData[req.body.itemId] -= 1;
            }
            await userModel.findByIdAndUpdate(req.body.userId, { cartData })
            res.json({ success: true, message: "Delete from Cart" });
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Error" });
        }
    }

    // fetch user cart data
    static getCart = async () => {
        try {
            let userData = await userModel.findById(req.body.userId)
            let cartData = await userData.cartData;
            res.json({ success: true, cartData })
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Error" })
        }
    }

}

module.exports = CartService;