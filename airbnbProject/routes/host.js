const express = require('express');
const hostRouter = express.Router();


hostRouter.get('/host/addHome',(req,res,next)=>{
    res.send(`
        <h1>Enter Details of house: </h1>
        <form action = "/host/addHome" method = "POST">
        <input type = "text"   name = "name" placeholder =  "Enter name of house"/>
        <input type  = "Submit"/>
        </form>     
        `)
})

hostRouter.post('/host/addHome',(req,res,next)=>{
    console.log(req.body);
    res.send(`
        <h1>House submitted Successfully</h1>
        <a href = "/">Go to Home</a>
        `)
})

module.exports = hostRouter;

