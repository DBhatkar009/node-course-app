const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../helper/path');
const products = [];

// admin/add-product => GET Method
router.get('/add-Product', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'view', 'add-products.html'));
});

// admin/add-product => POST Method
router.post('/add-product', (req, res, next)=>{
  products.push({title: req.body.title});
  res.redirect('/'); 
});



exports.routes = router;
exports.products = products;