// function f(){
//     this.name = 'aaa'
//     return {
//         name:'bbbb',
//         age:'18'
//     }
// }
// const c = new f();
// console.log(c.name);//bbbb
// 深拷贝了一份f  执行时先去找f函数的对象返回值，如果没有返回值再去找当前函数的this指向


// exports.a = 'aaa';//exports={}
// exports.b = 'bbb';
// exports.c = function(){
//     return {
//         c:'ccc'
//     }
// }

module.exports = {
    name:'AAA'
}