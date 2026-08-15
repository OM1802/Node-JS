const express=require('express');
const path=require('path');
const rootDir=require("../utils/pathUtils");
const contactRoute=express.Router();

const bodyParser=require('body-parser');

contactRoute.get("/contact-us",(req,res,next)=>{
  res.sendFile(path.join(rootDir, `views`, 'contact.html'));
});


contactRoute.use(bodyParser.urlencoded());

contactRoute.post("/contact-us",(req, res, next)=>{
  console.log(req.body);
  res.sendFile(path.join(rootDir, `views`, 'thanks.html'));
  
});

module.exports=contactRoute;