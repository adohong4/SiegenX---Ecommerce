'use strict'

const userModel = require("../../models/user.model")
const orderModel = require("../../models/order.model")

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//placing user order for frontend
class StripeController {
    placeOrder = async (req, res) => {
        const frontend_url = process.env.URL_FRONTEND
        try {
            const newOrder = new orderModel({
                userId: req.body.userId,
                items: req.body.items,
                amount: req.body.amount,
                address: req.body.address
            })

            await newOrder.save();
            await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

            const line_items = req.body.items.map((item) => ({
                price_data: {
                    currency: "vnd",
                    product_data: {
                        name: item.name
                    },
                    unit_amount: item.price * 100
                },
                quantity: item.quantity
            }))
            line_items.push({
                price_data: {
                    currency: "vnd",
                    product_data: {
                        name: "Delivery Charges"
                    },
                    unit_amount: 50000
                },
                quantity: 1
            })
            const session = await stripe.checkout.sessions.create({
                line_items: line_items,
                mode: 'payment',
                success_url: `${frontend_url}/verify/?success=true&orderId=${newOrder._id}`,
                cancel_url: `${frontend_url}/verify/?success=false&orderId=${newOrder._id}`,
            })
            res.json({ success: true, session_url: session.url })
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Error" })
        }
    }

    //verify Order
    verifyOrder = async (req, res) => {
        const { orderId, success } = req.body;
        try {
            if (success == "true") {
                await orderModel.findByIdAndUpdate(orderId, { payment: true });
                res.json({ success: true, message: "paid" })
            }
            else {
                await orderModel.findByIdAndDelete(orderId);
                res.json({ success: false, message: "Not paid" })
            }
        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Error" })
        }
    }
}

module.exports = new StripeController();