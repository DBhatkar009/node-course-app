const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/add-Product', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'view', 'add-products.html'));
});

router.post('/add-product', (req, res, next)=>{
  console.log(req.body);
  res.redirect('/'); 
});



module.exports = router;