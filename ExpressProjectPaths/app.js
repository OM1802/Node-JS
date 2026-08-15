const path=require('path');
const express=require('express');
const rootDir=require("./utils/pathUtils");
const homeRoute=require('./routes/homeRouter');
const contactRoute=require('./routes/contactRouter');


const app=express();

app.use(homeRoute);

app.use(contactRoute);

app.use((req, res, next)=>{
  res.sendFile(path.join(rootDir, 'views', '404.html'));
});



const PORT=4002;

app.listen(PORT, ()=>{
  console.log(`SERVER RUNNING ON ADDRESS http://localhost:${PORT}`);
});