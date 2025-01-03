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

//admin
router.post("/product/add", upload.array("images"), asyncHandler(ProductController.createProduct));
router.delete("/product/delete/:id", asyncHandler(ProductController.deleteProduct));
router.put("/product/update/:id", asyncHandler(ProductController.updateProduct))
router.get('/product/pagination', asyncHandler(ProductController.getProductsWithPagination));

//client
router.get("/product/get", asyncHandler(ProductController.getAllProduct));
router.get("/product/getId/:id", asyncHandler(ProductController.getProductById));
router.get("/product/getSlug/:slug", asyncHandler(ProductController.getProductBySlug));

router.get('/products/title', asyncHandler(ProductController.getProductByTitle));

router.get('/product/count', asyncHandler(ProductController.countProducts));


module.exports = router;
