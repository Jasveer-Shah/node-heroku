const express = require("express");
const path = require('path')
const router = express.Router();

const products = [];
//admin/add-product => get           // filter route
router.get("/add-product", (req, res, next) => {
    //  res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>")
    // res.sendFile(path.join(__dirname, '../', 'views', '/add-product.html'))
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product'})
})


router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title})
    console.log(req.body);
    res.redirect('/');
})

exports.routes = router;
exports.products = products;

// module = file so export this file