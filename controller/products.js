const products = [];

exports.getAddProducts = (req, res, next) => {
  res.render("add-products", {
    pageTitle: "Add-Products",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCss: true,
  });
};

exports.postNewProducts = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    data: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    productCss: true,
    activeShop: true,
  });
};
