'use strict'

const multer = require('multer');
const path = require('path');

// Thiết lập nơi lưu trữ và cách đặt tên file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Thay đổi đường dẫn nếu cần
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// Khởi tạo multer với cấu hình
const upLoad = multer({ storage: storage });

module.exports = upLoad;