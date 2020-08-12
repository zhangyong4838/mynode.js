const http = require('http')
const queryString = require('querystring')
const urlLib = require('url')

// http.createServer((req,res)=>{
//     if(req.url !== '/favicon.ico'){
//         let str = req.url;
//         let arr = str.split('?');
//         if(arr[0] === '/a'){
//             let arr1 = arr[1].split('&');
//             let obj = {}
//             arr1.map((item)=>{
//                 let arr2 = item.split('=')
//                 obj[arr2[0]] = arr2[1]
//             })
//             console.log(obj);
//             res.end('aaaa')
//         }
//     }
// }).listen(3000,()=>{
//     console.log('start');
// })


//queryString (
    //  第一个参数： 你想要解析的字符串
    //  第二个参数 是你第一次解析的 关键词)  默认是 &
    //  第三个参数 是你第二次解析的 关键词)  默认是 =
// http.createServer((req,res)=>{
//     if(req.url !== '/favicon.ico'){
//         let str = req.url;
//         let arr = str.split('?')
//         if(arr[0] === '/a'){
//             let obj = queryString.parse(arr[1])
//             console.log(obj);
//             res.end('aaaaa')
//         }
//     }
// }).listen(3000,()=>{
//     console.log('start');
// })

http.createServer((req,res)=>{
    if(req.url !== '/favicon.ico'){
        let urlObj = urlLib.parse(req.url,true)
        console.log(urlObj.query);
        if(urlObj.pathname === '/a'){
            res.end('aaaa')
        }
    }
}).listen(3000,()=>{
    console.log('start');
})











