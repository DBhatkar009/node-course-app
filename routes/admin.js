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

// admin/edit-product => GET Method
router.get("/edit-product/:productId", adminController.getEditProducts);

module.exports = router;
