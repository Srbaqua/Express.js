const express = require('express');
const userRouter = express.Router();



userRouter.get('/',(req,res,next)=>{
    res.send(`
        <h1>Welcome to airbnb</h1>
        <a href = "/host/addHome">Add Home</a>
        `);
}) 

module.exports = userRouter;