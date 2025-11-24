const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../helper/path');

// admin/add-product => GET Method
router.get('/add-Product', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'view', 'add-products.html'));
});

// admin/add-product => POST Method
router.post('/add-product', (req, res, next)=>{
  console.log(req.body);
  res.redirect('/'); 
});



module.exports = router;