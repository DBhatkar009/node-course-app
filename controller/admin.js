const Product = require("../models/product");

/*
    name: getAddProducts
    description: controller for add-products page
    arguments: req, res, next
    author: Dhananjay Bhatkar
*/
exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-products", {
    pageTitle: "Add-Products",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCss: true,
  });
};

/*
    name: postNewProducts
    description: controller to handle new product submission
    arguments: req, res, next
    author: Dhananjay Bhatkar
*/
exports.postNewProducts = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

/*
    name: getProducts
    description: controller for admin products list page
    arguments: req, res, next
    author: Dhananjay Bhatkar
*/
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/add-product-list", {
      data: products,
      pageTitle: "Admin Products",
      path: "/admin/add-product-list",
    });
  });
};
