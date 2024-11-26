'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DOCUMENT_NAME = 'Specifications'

const SpecificationSchema = new Schema({
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
}, { minimize: false, timestamps: true });

const specificationModel = mongoose.models.specification || mongoose.model(DOCUMENT_NAME, SpecificationSchema);

module.exports = specificationModel;
