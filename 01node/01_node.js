const http = require('http')

http.createServer(function(req,res){
    res.end('hahaha')
}).listen(3000,function(){
    console.log('start');
})