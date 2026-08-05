const express=require('express');

const bodyParser=require('body-parser');

const app=express();


app.get("/",(req, res, next)=>{
  console.log(req.url, req.method);
  console.log("MIDDLEWARE FOR /");
  res.send('<h1>/ PAGE</h1>');
});

app.get("/contact-us",(req,res,next)=>{
  console.log(req.url, req.method, req.body);
  console.log("MIDDLEWARE FOR /CONTACT-US");
  res.send(`
    <h1>CONTACT US PAGE</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name" />
    <input type="email" name="email" placeholder="Enter your Email" />
    <input type="Submit" />
    </form>
    `);
    next();
});

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req, res, next)=>{
  console.log("HANDLING POST REQUEST FROM /CONTACT US", req.url, req.method, req.body);
  res.send(`<h1>FORM SUBMITTED SUCCESSFULLY</h1>`)
});


const PORT=4002;

app.listen(PORT, ()=>{
  console.log(`SERVER RUNNING ON ADDRESS http://localhost:${PORT}`);
});
