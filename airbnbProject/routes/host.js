const path = require('path');
const express = require('express');
const hostRouter = express.Router();


hostRouter.get('/host/addHome',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','addHome.html'));
})

hostRouter.post('/host/addHome',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,'../','views','homeAdded.html'));
})

module.exports = hostRouter;

