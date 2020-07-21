// const fs = require('fs')


// 同步读取文件
// const data = fs.readFileSync('./conf.js')
// console.log('data',data.toString());

// 异步读取文件
// fs.readFile('./conf.js',(error,data)=>{
//     if(error) throw error
//     console.log(data.toString())
// })


// const fsp = require('fs').promises
// fsp.readFile('./conf.js')
//     .then(data=>console.log(data.toString()))

(async ()=>{
    const fs = require('fs')
    const {promisify} = require('util')
    const readFile = promisify(fs.readFile)
    const data = await readFile('./conf.js')
    console.log(data.toString());
})()