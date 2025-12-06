const path = require("path");
const express = require("express");
const router = express.Router();
const productsController = require("../controller/products");

// admin/add-product => GET Method
router.get("/add-Product", productsController.getAddProducts);

// admin/add-product => POST Method
router.post("/add-product", productsController.postNewProducts);

module.exports = router;
