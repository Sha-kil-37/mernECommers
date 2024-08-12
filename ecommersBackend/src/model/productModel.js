const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    category: {
      type: String,
    },
    brand: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
    product_code: {
      type: String,
    },
    remarks: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("product", productSchema);
