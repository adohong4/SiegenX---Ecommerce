const multer = require('multer');
const path = require('path');

// Thiết lập storage để lưu ảnh vào thư mục uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Chỉ định thư mục lưu ảnh
  },
  filename: function (req, file, cb) {
    // Giữ nguyên tên file gốc của ảnh
    cb(null, file.originalname); 
  }
});

// Khai báo upload với các tùy chọn (tối đa 5 ảnh)
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn dung lượng ảnh tối đa 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/; // Chỉ chấp nhận các file ảnh
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Chỉ hỗ trợ ảnh JPEG, PNG, hoặc GIF.'));
    }
  }
});

// Export upload để sử dụng trong controller hoặc routes
module.exports = upload;
