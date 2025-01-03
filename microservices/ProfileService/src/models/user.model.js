'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DOCUMENT_NAME = 'Users'

const AddressSchema = new Schema({
    fullname: { type: String, required: true },
    phone: { type: String, required: true },
    street: { type: String, required: true },
    precinct: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
})

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // role: { type: String, required: true },
    address: [AddressSchema],
    cartData: { type: Object, default: {} }
}, { minimize: false, timestamps: true })

const userModel = mongoose.models.user || mongoose.model(DOCUMENT_NAME, UserSchema)

module.exports = userModel;