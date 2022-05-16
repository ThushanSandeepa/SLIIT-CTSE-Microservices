const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const checkAuth = require('../middleware/check-auth')
const fileUpload = require('../middleware/file-upload')
const {StoreProductListing,getAllProductData,getProductById} = require('../controllers/ProductController')


router.post('/add-product',fileUpload.single('image'),StoreProductListing)
router.get('/get-all-product',getAllProductData)
router.get('/get-product/:id',getProductById)


module.exports = router  