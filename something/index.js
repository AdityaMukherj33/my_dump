const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port=3000;

const home=fs.readFileSync("./home.html");
const about=fs.readFileSync("./about.html")
const server=http.createServer((req,res)=>{
     const url=req.url
     res.statusCode=200;
     res.setHeader('Content-type','text/html');
     if(url=='/'){
        res.end(home);
     }
     else if(url=='/about'){
        res.end(about)
     }
     else{
        res.statusCode=200;
        res.setHeader('Content-type','text/plain');
        res.end("404")
      }
});

server.listen(port,hostname,()=>{
    console.log(`Server running http://${hostname}:${port}/`)
})