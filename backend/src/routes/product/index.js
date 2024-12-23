const express = require('express');

const multer = require("multer");
const ProductController = require('../../controllers/product.controller');
const { asyncHandler } = require('../../helpers/asyncHandler');


const router = express.Router();

//image Storage Engine
const storage = multer.diskStorage({
    destination: "upload",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

router.post("/product/add", upload.array("images"), asyncHandler(ProductController.createProduct));

router.get("/product/get", asyncHandler(ProductController.getAllProduct));
router.get("/product/getId/:id", asyncHandler(ProductController.getProductById));
router.get("/product/getSlug/:slug", asyncHandler(ProductController.getProductBySlug));

router.delete("/product/delete/:id", asyncHandler(ProductController.deleteProduct));
router.put("/product/update/:id", asyncHandler(ProductController.updateProduct))
router.get('/product/pagination', asyncHandler(ProductController.getProductsWithPagination));   
module.exports = router;
