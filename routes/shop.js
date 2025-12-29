const path = require("path");
const express = require("express");
const router = express.Router();
const shopController = require("../controller/shop");

router.get("/", shopController.getIndex);

router.get("/add-product-list", shopController.getProducts);
router.get("/add-product-list/:productId", shopController.getProductDetails);
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);

module.exports = router;
