const path=require('path');

const express=require('express');
const hostRouter=express.Router();

const rootDir=require('../utils/pathUtils');

hostRouter.get("/add-housing",(req, res, next)=>{
  res.sendFile(path.join(rootDir, 'views', 'addHousing.html'));
});

hostRouter.post("/add-housing",(req, res, next)=>{
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
}); 

module.exports=hostRouter;