const express = require('express');
const router = express.Router();
const path = require('path')
   // router object
router.get('/', (req, res, next) => {
    console.log("users route");
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))

})


module.exports = router;