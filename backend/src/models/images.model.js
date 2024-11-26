'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DOCUMENT_NAME = 'Images'

const ImageSchema = new Schema({
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true }
}, { minimize: false, timestamps: true });

const imageModel = mongoose.models.user || mongoose.model(DOCUMENT_NAME, ImageSchema);

module.exports = imageModel;
