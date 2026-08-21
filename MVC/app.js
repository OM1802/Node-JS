const path=require('path');//core module

const express=require('express');//external module

//local module
const userRouter=require('./routes/userRouter');
const {hostRouter}=require('./routes/hostRouter');
const rootDir=require('./utils/pathUtils');
const errorController=require('./controllers/404');

const app=express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public')));

app.use(express.urlencoded());

app.use(userRouter);

app.use("/host",hostRouter);

app.use(errorController.getError);

const PORT=3012;

app.listen(PORT, ()=>{
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});