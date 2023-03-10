const http = require('http')
const server = http.createServer((request,response)=>{
    console.log(request.url,request.method)
    // set header
    response.setHeader('content-type','text/plain')
    response.write('You are doing a great job you will be fine')
    response.end()
})
server.listen(3000,'localhost',()=>{
    console.log('listening from the port number 3000')
});