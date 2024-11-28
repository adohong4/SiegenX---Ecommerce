const multer = require('multer');
const express = require('express');
const path = require('path');
const app = express();

// Cấu hình để phục vụ file tĩnh
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Cấu hình nơi lưu ảnh và đặt tên file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Thư mục lưu file
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Đặt tên file duy nhất
  },
});

// Chỉ chấp nhận file ảnh
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('File không phải là ảnh!'), false);
  }
};

// Khởi tạo multer với cấu hình trên
const upload = multer({ storage, fileFilter });

module.exports = upload;
