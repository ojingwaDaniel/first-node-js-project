// const {list,ages} = require('./people')
// console.log(list,ages)
// // Opreating system
// const os = require('os')
// // system brand and homne directory
// console.log(os.platform(),os.homedir())
// // file system
const fs = require('fs')
// reading files
fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())

})
console.log('the last code ')
// writing files






