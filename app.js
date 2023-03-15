const express = require('express')
// express app
const app = express()
// registering ejs
app.set('view engine','ejs')
// listening to request
app.listen(3000)
// Middlewares
app.use((req,res)=>{
  console.log('New Request Made')
  console.log("host :", req.hostname);
  console.log("path :", req.path);
  console.log("path :", req.path);
})
// getting response
app.get("/", (request, response) => {
  const blogs = [
    {title : 'Definition of success',snippet : 'Giving the required result of a task with persistence and consistency'},
    {title : 'Salvation',snippet : 'Accepting Jesus as your personal saviour and receiving a new life'},
    {title : 'Love',snippet : 'Love endures everything and remembers no wrong ,put others before oneself'},
    {title : 'Association',snippet : 'Close Friendship you have among people which should be  done intentionally'}
  ]
  response.render('index',{title : 'Home',blogs})
});
app.get("/about", (request, response) => {
    response.render("about",{title : 'About'});
});
// create blog
app.get('/blogs/create',(req,res)=>{
  res.render('create',{title : 'Create A New Blog'})
})
// 404 error
app.use( (request, response) => {
  response.status(404).render('404',{title : '404'})
});