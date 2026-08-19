const path=require('path');

const express=require('express');
const hostRouter=express.Router();

const rootDir=require('../utils/pathUtils');

hostRouter.get("/add-housing",(req, res, next)=>{
  res.render('addHousing', {pageTitle: 'Add Home'});
});

const regHomes=[];

hostRouter.post("/add-housing",(req, res, next)=>{
  console.log("HOME REGISTRATION SUCCESSFUL FOR:",req.body.houseName);
  regHomes.push({houseName:req.body.houseName});
  res.render('homeAdded', {pageTitle: 'Home added'});
}); 

exports.hostRouter=hostRouter;
exports.regHomes=regHomes;
