const http=require('http');//core module

const express=require('express');//external module

const requestHandler=require('./user');//local module

const app=express();

app.use((res, req, next)=>{
  console.log("FIRST MIDDLEWARE", req.url, req.method);
  next();
});

app.use((res, req, next)=>{
  console.log("SECOND MIDDLEWARE", req.url, req.method);
});

const server=http.createServer(app);

const PORT=4000;

server.listen(PORT, ()=>{
  console.log(`SERVER RUNNING ON ADDRESS http://localhost:${PORT}`);
});