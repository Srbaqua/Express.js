// const http  = require('http');
const express = require('express');
const app = express();
// const server = http.createServer(app);


app.use("/",(req,res,next)=>{
    console.log("middleware 1 is working",req.url,req.method);
    next();
})

app.use("/details",(req,res,next)=>{
    console.log("middleware 2 is working",req.url,req.method);
    res.send("<h1> Let's start learning MiddleWare </h1>");
})




























const PORT = 4000
app.listen(PORT,()=>{
    console.log(`server is working on http://localhost:${PORT}`);
})