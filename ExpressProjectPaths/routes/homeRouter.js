const express=require('express');
const path=require('path');
const rootDir=require("../utils/pathUtils");
const homeRoute=express.Router();


homeRoute.get("/",(req, res, next)=>{
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports=homeRoute;