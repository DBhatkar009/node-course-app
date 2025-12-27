const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-products", {
    pageTitle: "Add-Products",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCss: true,
  });
};

exports.postNewProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/products-list", {
      data: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      productCss: true,
      activeShop: true,
    });
  });
};
