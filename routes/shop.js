const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require('./admin')

   // router object
router.get('/', (req, res, next) => {
    console.log("users route");
     const products = adminData.products; 
      res.render('shop', {prods: products, pageTitle: 'Shop', path:'/'})
    
    // console.log('shopjs: ', adminData.products);
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))

})


module.exports = router;