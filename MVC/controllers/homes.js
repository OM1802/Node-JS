const regHomes=[];

const getAddHousing=(req, res, next)=>{
  res.render('addHousing', {pageTitle: 'Add Home'});
};

const postHouseAdded=(req, res, next)=>{
  console.log("HOME REGISTRATION SUCCESSFUL FOR:",req.body.houseName);
  regHomes.push({houseName:req.body.houseName});
  res.render('homeAdded', {pageTitle: 'Home added'});
};

const getHomes=(req, res, next)=>{
  console.log(regHomes);
  res.render('home',{regHomes:regHomes, pageTitle:'airbnb Home'});
};

exports.getAddHousing=getAddHousing;
exports.postHouseAdded=postHouseAdded;
exports.getHomes=getHomes;