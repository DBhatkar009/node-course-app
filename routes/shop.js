const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../helper/path');
const productData = require('./admin');


router.get('/', (req, res, next)=>{
const products = productData.products;
   res.render('shop',{data: products, docTitle: 'Shop'});
});



module.exports = router;