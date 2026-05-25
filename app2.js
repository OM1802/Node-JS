const http=require('http');
const fs=require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url,req.method, req.headers);
  //process.exit();//stops event loop

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
    fs.writeFile("user-info.txt", "DUMMY DATA ENTRY", (err)=>{
      if(err){
        console.log("ERROR DETECTED");
      }
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

const port=3001;

server.listen(port,() => {
  console.log(`SERVER RUNNING ON ADDRESS http://localhost:${port}`);
});