const PORT = 3000;

const express = require('express');
const bodyParser = require('body-parser');

const hostRouter = require("./routes/host");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.urlencoded());

app.use(hostRouter);
app.use(userRouter);

app.use((req,res,next)=>{
    res.status(404).send(`<h1>Oops you landed on wrong page. </h1> 
        <h2>Sorryyyyyyyyyyyyyy </h2>
    `)
})


app.listen(PORT ,()=>{
    console.log(`App is running on http://localhost:${PORT}`);
})