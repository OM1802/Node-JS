const path=require('path');

const express=require('express');
const userRouter=express.Router();

const {regHomes}=require('./hostRouter');

userRouter.get("/",(req, res, next)=>{
  console.log(regHomes);
  res.render('home',{regHomes:regHomes, pageTitle:'airbnb Home'});
});

module.exports=userRouter;