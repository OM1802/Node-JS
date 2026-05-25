const http=require('http');

const server=http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers);
  if(req.url === '/'){
    res.setHeader('Content-Type', 'Text/HTML');
    res.write(`
      <html>
      <head><title>PRACTICE</title></head>
      <body><h1>WELCOME TO HOME PAGE</h1>

      <p><a href="/">HOME</a></p>
      <p><a href="/men">MEN</a></p>
      <p><a href="/women">WOMEN</a></p>
      <p><a href="/kids">KIDS</a></p>
      <p><a href="/cart">CART</a></p>

      </body>
      </html>
      `);
    return res.end();
  }
  else if(req.url.toLowerCase() === '/men'){
    res.setHeader('Content-Type', 'Text/HTML');
    res.write(`
      <html>
      <head><title>PRACTICE</title></head>
      <body><h1>WELCOME TO MEN'S SHOPPING PAGE</h1>

      <p><a href="/">HOME</a></p>
      <p><a href="/men">MEN</a></p>
      <p><a href="/women">WOMEN</a></p>
      <p><a href="/kids">KIDS</a></p>
      <p><a href="/cart">CART</a></p>

      </body>
      </html>
      `);
    return res.end();
    
  }
  else if(req.url.toLowerCase() === '/women'){
    res.setHeader('Content-Type', 'Text/HTML');
    res.write(`
      <html>
      <head><title>PRACTICE</title></head>
      <body><h1>WELCOME TO WOMEN'S SHOPPING PAGE</h1>

      <p><a href="/">HOME</a></p>
      <p><a href="/men">MEN</a></p>
      <p><a href="/women">WOMEN</a></p>
      <p><a href="/kids">KIDS</a></p>
      <p><a href="/cart">CART</a></p>

      </body>
      </html>
      `);
    return res.end();
    
  }
  else if(req.url.toLowerCase() === '/kids'){
    res.setHeader('Content-Type', 'Text/HTML');
    res.write(`
      <html>
      <head><title>PRACTICE</title></head>
      <body><h1>WELCOME TO KIDS' SHOPPING PAGE</h1>

      <p><a href="/">HOME</a></p>
      <p><a href="/men">MEN</a></p>
      <p><a href="/women">WOMEN</a></p>
      <p><a href="/kids">KIDS</a></p>
      <p><a href="/cart">CART</a></p>

      </body>
      </html>
      `);
    return res.end();
    
  }
  else if(req.url.toLowerCase() === '/cart'){
    res.setHeader('Content-Type', 'Text/HTML');
    res.write(`
      <html>
      <head><title>PRACTICE</title></head>
      <body><h1>WELCOME TO YOUR CART</h1>

      <p><a href="/">HOME</a></p>
      <p><a href="/men">MEN</a></p>
      <p><a href="/women">WOMEN</a></p>
      <p><a href="/kids">KIDS</a></p>
      <p><a href="/cart">CART</a></p>

      </body>
      </html>
      `);
    return res.end();
    
  }

});

const PORT=3002;

server.listen(PORT, ()=>{
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});