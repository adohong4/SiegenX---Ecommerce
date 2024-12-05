const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
}, { timestamps: true, _id: false }); // Đảm bảo không tạo _id nếu không cần

module.exports = mongoose.model('Image', ImageSchema);
