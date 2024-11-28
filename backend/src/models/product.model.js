'use strict'

const mongoose = require('mongoose');
const { ImageSchema } = require('./images.model');
const { SpecificationSchema } = require('./specification.model');
const Schema = mongoose.Schema;

const DOCUMENT_NAME = 'Products'

const ProductSchema = new Schema({
    title: { type: String, required: true },
    nameProduct: { type: String, required: true },
    product_slug: { type: String, required: true },
    price: { type: Number, required: true },
    images: [ImageSchema], // Nhúng trực tiếp schema `ImageSchema`
    recap: { type: String, required: true },
    description: { type: String, required: true },
    specification: [SpecificationSchema], // Nhúng trực tiếp schema `SpecificationSchema`
    category: { type: String, required: true },
    quantity: { type: Number, required: true }
}, { minimize: false, timestamps: true });

const productModel = mongoose.models.product || mongoose.model(DOCUMENT_NAME, ProductSchema)

module.exports = productModel;