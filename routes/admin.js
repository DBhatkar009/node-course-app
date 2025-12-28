const path = require("path");
const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin");

// admin/add-product => GET Method
router.get("/add-Product", adminController.getAddProducts);

// admin/add-product-list => GET Method
router.get("/add-product-list", adminController.getProducts);

// admin/add-product => POST Method
router.post("/add-product", adminController.postNewProducts);

module.exports = router;
