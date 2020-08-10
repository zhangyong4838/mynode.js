const fs = require('fs')

// 读取文件
// fs.readFile('./static/1',(err,data)=>{
//     console.log(data.toString());
// })
// // 写文件(创建文件)
// fs.writeFile('./static/3','3333333',(err,data)=>{
//     console.log(data,err);
// })
// // 添加文件
// fs.appendFile('./static/2','222222',(err)=>{
//     console.log(err);
// })
// // 删除文件
// fs.unlink('./static/3',(err)=>{
//     console.log(err);
// })
// 复制文件(软复制)
// fs.copyFile('./static/2','./static/3',(err,data)=>{
//     console.log(err,data);
// })
// 硬链接
// fs.link('./static/2','./static/3',(err,data)=>{
//     console.log(err);
// })
// 改文件名称(完整的文件路径)
fs.rename('./static/11','./11',(err)=>{
    console.log(err);
})