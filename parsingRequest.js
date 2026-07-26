const http=require('http');
const fs=require('fs');
const { URLSearchParams } = require('url');

const server = http.createServer((req, res) => {
  console.log(req.url,req.method);
  //process.exit();//stops event loop, an alternative to be used if needed for lower LOC

  if(req.url === '/'){
    res.setHeader('Content-Type', 'Text/HTML');
    res.write(`
      <html>
<head>
    <title>User Form</title>
</head>
<body>

    <h1>User Information Form</h1>

    <form action="/submit-info" method="POST">

        <label for="name">Name:</label>
        <input type="text" id="name" name="username">

        <br><br>

        <label for="age">Age:</label>
        <input type="number" id="age" name="userage">

        <br><br>

        <button type="submit">Submit</button>

    </form>

</body>
</html>
      `);
    return res.end();

    }
  else if(req.url.toLowerCase() === "/submit-info" && req.method === "POST"){
    const body=[];
    req.on('data', chunk=>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', ()=>{
      const joinedBody=Buffer.concat(body).toString();
      console.log(joinedBody);
      const para=new URLSearchParams(joinedBody);
      const finalBody={};
      for(const [key, value] of para.entries()){
        finalBody[key]=value;
      }
      //const finalBody=Object.fromEntries(para);
      console.log(finalBody);
      fs.writeFileSync('user-detail.txt', JSON.stringify(finalBody));
    });

    res.statusCode=302;
    res.setHeader('Location', '/');
    return res.end();

  }
  res.setHeader('Content-Type', 'Text/HTML');
  res.write('<html>');
  res.write('<head><title>Node server</title></head>');
  res.write('<body>');
  res.write('<h1> FORM SUBMITTED, DATA RECIEVED SUCCESSFULLY!!</h1>')
  res.write('</body>');
  res.write('</html>');
  return res.end();

});

const port=3003;

server.listen(port,() => {
  console.log(`SERVER RUNNING ON ADDRESS http://localhost:${port}`);
});
