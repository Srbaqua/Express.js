const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();



app.get('/',(req,res,next)=>{
    res.send(`<h1>Welcome to home page<h1>
        <a href = "/contact">Lets fill details here</a>
        `)
})

app.get('/contact',(req,res,next)=>{
    res.send(`
            <form action="/contact" method = "POST"/>
            <input type = "text" name  = "name" placeholder = "Enter your name..."/>
            <input type = "email" name = "email" placeholder = "Enter email.."/>
             <input type = "submit" />
             </form>
        `)
        
})

app.post('/contact',(req,res,next)=>{
    console.log('first post without bodyParser data',req.url,req.body);
    next();
})
app.use(bodyParser.urlencoded());//using bodyParser to get the data

app.post('/contact',(req,res,next)=>{
    console.log("Second post with bodyParser data",req.url,req.body);
    res.send(`<h1>We will contact you shortly</h1>`);
    
})






app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`);
})