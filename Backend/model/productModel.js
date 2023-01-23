const mongoose = require('mongoose')


const productSchema = new mongoose.Schema(
  {
    img: String,
    title: String,
    price: Number,
    mrp: Number,
    discount: String,
    id: Number,
    clr_size: String,
    "clr_size 2": String,
    "clr_size 3": String,
    "clr_size 4": String,
    "clr_size 5": String,
    "clr_size 6": String,
    bld_spn: String,
    lft: String,
    loyal_popup: String,
    "clr_size 7": String,
    qty: Number,
    catagory: String,
    description: String,
    sold: Boolean,
  },
  {
    timestamps: true, //important
  }
);


// module.exports = mongoose.model("product", productSchema)
const Products=mongoose.model('product', productSchema)
module.exports={Products}