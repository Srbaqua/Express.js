const PORT = 3000;

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const hostRouter = require("./routes/host");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.urlencoded());

app.use(hostRouter);
app.use(userRouter);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(PORT ,()=>{
    console.log(`App is running on http://localhost:${PORT}`);
})