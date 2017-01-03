const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');


hbs.registerHelper('getCurrentYear',() =>{
  return new Date().getFullYear();
});

// app.use((req,res,next)=>{
//   res.render('maintanance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
})

app.get('/', (req, res) => {
  res.render('home.hbs',{
    pageTitle : 'Home Page',
    welcomeMessage : 'Welcome to my website',
    username : 'Suresh',
  })
});

app.get('/about',(req,res) => {
  res.render('about.hbs',{
    pageTitle : 'About Page',
  });
});

app.get('/projects',(req,res)=>{
  res.render('projects.hbs',{
    pageTitle : 'Projects',
  })
});

// bad - send back json with errorMessage
app.get('/bad',(req,res)=>{
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(port, () =>{
  console.log(`Server is up on port ${port}`);
});
