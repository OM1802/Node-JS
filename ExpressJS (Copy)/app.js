const express=require('express');//external module

const requestHandler=require('./user');//local module

const app=express();

app.use("/",(req, res, next)=>{
  console.log("FIRST MIDDLEWARE", req.url, req.method);
  next();
});

app.use("/submit-details",(req, res, next)=>{
  console.log("SECOND MIDDLEWARE", req.url, req.method);
  res.send("<p>HELLO REALITY!!!</p>");
});


const PORT=3000;//any available port

app.listen(PORT, ()=>{
  console.log(`SERVER RUNNING ON ADDRESS http://localhost:${PORT}`);
});
