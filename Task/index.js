const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.port ||3000;

app.use((req,res,next)=>{
    console.log(req.url);
    next();
})

app.use((req,res,next)=>{
    console.log(req.method);
    next();
})

// app.use((req,res,next)=>{
//     // res.send("At middleware 3");
//     console.log('3rd middleware');
//     next();
// })

app.get('/',(req,res,next)=>{
    console.log("you are at home page");
    res.send('<h1>Welcoe to Main page</h1>')
    next();
})

app.get('/contact',(req,res,next)=>{
    res.send(`
            <form action="/contact" method="POST">
            <h2>Enter your name</h2>  
            <input type="text" name = "name" id = "inputText" placeholder="Type something here..."><br><br>
            <input type="email" name = "email" id="inputEmail" placeholder="Enter your email">
            <input type="Submit"/> 
            </form>   
`);

app.post('/contact',(req,res,next)=>{
    res.send('<h2>Thanx for submitting your info</h2>');
})


})



app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})