const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DOCUMENT_NAME = 'Images'

const imageSchema = new Schema({
  image: { type: String, required: true },
}, { timestamps: true });

const imageModel = mongoose.models.image || mongoose.model(DOCUMENT_NAME, imageSchema)

module.exports = imageModel;

