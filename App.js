//Node Way
// const http = require('http');
// const server = http.createServer((req,res)=>{
    //     console.log(req.method);
    // })
    
    // const PORT = 3001;
    // server.listen(PORT,()=>{
    //     console.log(`server is running at http://localhost:${PORT}`);
// });

//Express Way
    const http = require('http');
    const express = require('express');
        
    const app = express();
    const server = http.createServer(app);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    const PORT = 3002;
    server.listen(PORT,()=>{
        console.log(`express server is running on http://localhost:${PORT}`);
    })