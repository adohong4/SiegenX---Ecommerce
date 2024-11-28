'use strict';

const mongoose = require('mongoose');
const specificationSchema = require('./specification.model');
const imageSchema = require('./images.model');

const Schema = mongoose.Schema;

const DOCUMENT_NAME = 'Products';

const ProductSchema = new Schema({
    title: { type: String, required: true },
    nameProduct: { type: String, required: true },
    product_slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Images' }],
    recap: { type: String, required: true },
    description: { type: String, required: true },
    specification: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Specifications' }],
    category: { type: String, required: true },
    quantity: { type: Number, required: true }
}, { minimize: false, timestamps: true });

const productModel = mongoose.models.product || mongoose.model(DOCUMENT_NAME, ProductSchema);

module.exports = productModel;
