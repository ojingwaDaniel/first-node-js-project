const {list,ages} = require('./people')
console.log(list,ages)
// // Opreating system
const os = require('os')
// // system brand and homne directory
 console.log(os.platform(),os.homedir())
// file system
const fs = require('fs')
// reading files
fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log(err)
     }
     console.log(data.toString())

})
console.log('the last code ')
// // writing files
 fs.writeFile('./docs/blog2.txt','hi guys is  me again daniel',()=>{
     console.log('writing to a file')
 })
// // Directories
 if(!fs.existsSync('./assets')){
     fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err)
         }
        console.log('folder created')
     })


 }else{
     fs.rmdir('./assets',(err)=>{
         if(err){
             console.log(err)
         }
         console.log('folder deleted')
    })
 }
//deleting files
if(fs.existsSync('./docs/deleteme.js')){
    fs.unlink('./docs/deleteme.js',(err)=>{
        if (err){
            console.log(err)
        }
        console.log('deleted a file')
    })
}





