const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/products-list", {
      data: products,
      pageTitle: "All Products",
      path: "/products-list",
    });
  });
};

// new controller for product details
exports.getProductDetails = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/products-details", { product: product, data: product, pageTitle: product.title,
    path: "/add-product-list" 
    });
  });
};

// existing controllers
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      data: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

/* name: getCart
   description: controller for cart page
   arguments: req, res, next
   author: Dhananjay Bhatkar
*/
exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Carts",
  });
};

// controller for orders page
exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Orders",
  });
};

// controller for checkout page
exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
