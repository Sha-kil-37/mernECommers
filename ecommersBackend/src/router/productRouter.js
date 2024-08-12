const express = require("express");
const {
  postProduct,
  getAllProduct,
  getProductCategory,
} = require("../controller/productController");
const router = express.Router();
//
router.post("/post-product", postProduct);
router.get("/get-product-category", getProductCategory);
router.get("/get-all-product/:searchText/:perPage/:pageNumber", getAllProduct);
//
module.exports = router;
