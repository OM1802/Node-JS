const express=require('express');
const hostRouter=express.Router();

const homesController=require('../controllers/homes');

hostRouter.get("/add-housing", homesController.getAddHousing); 

hostRouter.post("/add-housing", homesController.postHouseAdded); 

exports.hostRouter=hostRouter;

