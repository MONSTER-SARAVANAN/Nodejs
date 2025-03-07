const express = require('express');
const path = require('path')
const rootDir = require('../utils/path')
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})
router.post('/add-product',(req,res,next)=>{
    console.log('Form Data:',req.body);
    res.send('<b>Product Submitted</b>')
})

module.exports = router;