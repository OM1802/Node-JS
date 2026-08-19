const path=require('path');//core module

const express=require('express');//external module

const userRouter=require('./routes/userRouter');//local module
const {hostRouter}=require('./routes/hostRouter');//local module
const rootDir=require('./utils/pathUtils');

const app=express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public')));

app.use(express.urlencoded());

app.use(userRouter);

app.use("/host",hostRouter);

app.use((req, res, next)=>{
  res.status(404).render('404', {pageTitle:'Page not found'});
});


const PORT=3011;

app.listen(PORT, ()=>{
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});