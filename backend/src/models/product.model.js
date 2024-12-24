'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify')

const DOCUMENT_NAME = 'Products';

const ProductSchema = new Schema(
    {
        title: { type: String, required: true },
        nameProduct: { type: String, required: true },
        product_slug: String,
        price: { type: Number, required: true },
        images: [String],
        recap: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        quantity: { type: Number, required: true },
        mainBoard: { type: String, required: true },
        chip: { type: String, required: true },
        cpu: { type: String, required: true },
        gpu: { type: String, required: true },
        ram: { type: String, required: true },
        memory: { type: String, required: true },
        version: { type: String, required: true },
        ports: { type: String, required: true },
        displaySize: { type: String, required: true },
        pixelDensity: { type: String, required: true },
        display: { type: String, required: true },
        refreshRate: { type: String, required: true }
    },
    { minimize: false, timestamps: true }
);

//Document middleware: runs before .save() and .create()....
ProductSchema.pre('save', function (next) {
    this.product_slug = slugify(this.nameProduct, { lower: true })
    next();
})

const productModel = mongoose.models.product || mongoose.model(DOCUMENT_NAME, ProductSchema);

module.exports = productModel;