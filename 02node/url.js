const urlLib = require('url')

const str = 'http://localhost:3000/a?name=zyzy&age=18';
let obj = urlLib.parse(str,true)

console.log(obj);

console.log(urlLib.format(obj));
//拼接字符串  ---- 地址 路径
console.log(urlLib.resolve('/one/two/three','four'));