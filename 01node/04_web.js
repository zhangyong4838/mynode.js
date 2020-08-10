const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/'){
        fs.readFile('./static/11.png',(err,data)=>{
            res.end(data)
        })  
    }else if(req.url === '/a'){
        res.end('aaaaaa')
    }
    
}).listen(3000,()=>{
    console.log('start');
})