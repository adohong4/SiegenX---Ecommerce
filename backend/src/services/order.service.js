'use strict'

const userModel = require("../models/user.model")
const orderModel = require("../models/order.model")

class OrderService{
    static addOrder = async() => {

        try {
            const newOrder = new orderModel({
                userId: req.body.userId,
                items: req.body.items,
                amount: req.body.amount,
                address: req.body.address
            })
    
            await newOrder.save();
            await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    
            res.json({ success: true, newOrder})
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Error" })
        }
    }
}