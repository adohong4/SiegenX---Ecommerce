const mongoose = require('mongoose');
const { Schema } = mongoose;

const SpecificationSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },  // Thêm productId vào đây
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
    refreshRate: { type: String, required: true },
}, { minimize: false, timestamps: true });

const specificationModel = mongoose.models.Specifications || mongoose.model('Specifications', SpecificationSchema);

module.exports = { specificationModel, SpecificationSchema };
