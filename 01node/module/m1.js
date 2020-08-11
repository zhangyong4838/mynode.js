module.exports = (fs,req,success,error)=>{
    if(req.url == '/'){
        req.url = '/index.html'
    }
    fs.readFile('./static' + req.url,(data,err)=>{
        if(err){
            error('error')
        }else{
            success(data)
        }
    })
}