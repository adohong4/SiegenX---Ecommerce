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
    images: [{
      _id: { type: Schema.Types.ObjectId, ref: 'Product' },  // _id của ảnh là ObjectId của sản phẩm
      filename: { type: String, required: true },
      url: { type: String, required: true }
  }],  // Nhúng ImageSchema
    recap: { type: String, required: true },
    description: { type: String, required: true },
    specification: [{
      type: Schema.Types.ObjectId,  // Chỉ cần lưu trữ ObjectId
      ref: 'Specifications',  // Tham chiếu đến model Specifications
    }],  // Liên kết với Specification
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { minimize: false, timestamps: true }
);

const productModel = mongoose.models.product || mongoose.model(DOCUMENT_NAME, ProductSchema);

module.exports = productModel;
