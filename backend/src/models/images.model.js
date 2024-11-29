const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
}, { timestamps: true });

module.exports = { ImageSchema };
