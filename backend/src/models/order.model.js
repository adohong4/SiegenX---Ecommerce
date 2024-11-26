'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DOCUMENT_NAME = 'Orders'

const orderSchema = new Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Wait for confirmation" },
    date: { type: Date, default: Date.now() },
    payment: { type: Boolean, default: false }
}, { timestamps: true })

const orderModel = mongoose.models.order || mongoose.model(DOCUMENT_NAME, orderSchema)

module.exports = orderModel;