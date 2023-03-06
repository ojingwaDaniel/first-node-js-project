const fs = require('fs')
const readStream = fs.createReadStream('./docs/blog3.txt',{encoding : 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt')
readStream.on('data',(buffer)=>{
    console.log('_____NEW BUFFER______________')
    console.log(buffer)
    writeStream.write('\n NEW BUFFER \n')
    writeStream.write(buffer)
});