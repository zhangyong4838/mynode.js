const { resolve } = require("path")
const { rejects } = require("assert")

module.exports = function promisify(fn){
    return function(...args){
        return new Promise(function(resolve,reject){
            args.push(function(err,...arg){
                err ? reject(err) : resolve(...arg)
            })
            fn.apply(null,args)
        })
    }
}