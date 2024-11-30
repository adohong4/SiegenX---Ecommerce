'use strict';

const mongoose = require('mongoose');
const { ImageSchema } = require('./images.model');  // Nhúng ImageSchema
const { SpecificationSchema } = require('./specification.model');  // Nhúng SpecificationSchema
const Schema = mongoose.Schema;

const DOCUMENT_NAME = 'Products';

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    nameProduct: { type: String, required: true },
    product_slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
<<<<<<< HEAD
    images: [ImageSchema],  // Nhúng ImageSchema
    recap: { type: String, required: true },
    description: { type: String, required: true },
    specification: [SpecificationSchema],  // Nhúng SpecificationSchema
=======
    images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Images' }],
    recap: { type: String, required: true },
    description: { type: String, required: true },
    specification: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Specifications' }],
>>>>>>> a94802c3ec91183bdcfc15604fdf04ee4bbde737
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { minimize: false, timestamps: true }
);

<<<<<<< HEAD
// Đảm bảo mô hình không bị trùng tên khi tạo trong database
=======
>>>>>>> a94802c3ec91183bdcfc15604fdf04ee4bbde737
const productModel = mongoose.models.product || mongoose.model(DOCUMENT_NAME, ProductSchema);

module.exports = productModel;
