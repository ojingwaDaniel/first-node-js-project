const express = require('express')
// express app
const app = express()
// listening to request
app.listen(3000)
// getting response
app.get("/", (request, response) => {
  response.sendFile('./views/index.html',{root :__dirname});
});
app.get("/about", (request, response) => {
  response.sendFile("./views/about.html", { root:__dirname });
});
// Redirect
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})
// 404 error
app.use( (request, response) => {
  response.status(404).sendFile("./views/404.html", { root:__dirname });
});