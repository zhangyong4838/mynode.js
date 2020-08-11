const http = require('http')
const fs = require('fs')
const r = require('./module/m1')

http.createServer((req,res)=>{
    r(fs,req,(data)=>{
        res.end(data)
    },(data)=>{
        res.end(data)
    })
    
}).listen(3000,()=>{
    console.log('start');
})