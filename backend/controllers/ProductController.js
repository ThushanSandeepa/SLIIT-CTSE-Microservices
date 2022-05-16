
const Product = require("../models/Product");
const HttpError = require("../models/http-error");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const uuid = require("uuid");

const StoreProductListing = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  try {
    const {
      name,
      price,
      description, 
    } = req.body;
    console.log(price)
    const newProductData = new Product({
      name: name,
      description: description,
      images: ["http://localhost:9090/" + req.file.path],
      listingType:'fashion',
      price:price,

    });
    console.log(newProductData)
    const result = await newProductData.save();
    console.log(result)
    return res.status(200).json(result)

  } catch (error) {
    new HttpError("Unexpected Error Occurs.", 422)
  }
};

const getAllProductData = async (req, res, next) => {
  
  try {
    const productData = await Product.find()
    return res.status(200).json(productData)
    console.log(productData)
  } catch (error) {
    
  }

};


const getProductById = async(req,res,next) =>{

  
  const id = req.params.id
  console.log(id) 
  try {
    const productData = await Product.findById(id)
    return res.status(200).json(productData)

  } catch (error) {
    
  }
}

module.exports = {
    StoreProductListing,
    getAllProductData,
    getProductById
};
