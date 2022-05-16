const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price:{type:String,required:true},
    description: { type: String, required: true },
    images:{type:Array},
    listingType: { type: String, enum: ["beauty", "fashion","other"], default: "other" },

   
  },
  { timestamps: true }
); 

  
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
 



