const http = require('http');
const fs = require('fs');
const _ = require('lodash')
const server = http.createServer((request,response)=>{
    // lodash
    const num = _.random(0,30)
    // console.log(num)
    const greet = _.once(()=>{
        console.log('hello guys')
    greet()
    })
    greet()
    // greet()
    // set header
    response.setHeader('content-type','text/html')
    let path = './views/'
    switch (request.url) {
      case "/":
        path += "index.html";
        response.statusCode = 200;
        break;
      case "/about":
        path += "about.html";
        response.statusCode = 200;

        break;
        // Redirect 
      case "/about-us":
        response.setHeader('Location','/about')
        response.statusCode = 301;
        response.end()
      default:
        path += "404.html";
        response.statusCode = 404;
    }
    fs.readFile(path,(err,data)=>{
        if (err) {
            console.log(err)
            response.end()
            
        } else {
            // response.write(data)
            response.end(data)
            
        }
    })
    
})
server.listen(3000,'localhost',()=>{
    console.log('listening from the port number 3000')
})