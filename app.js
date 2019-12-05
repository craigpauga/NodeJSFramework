// Here we are telling Node that we require the express package
// This package has been installed using NPM
var express = require('express');

// Use express for this application
var app = express();

// Use EJS as the templating engine
app.set('view engine', 'ejs');

// Home request send index
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

// Contact get request responds with contact.html
app.get('/contact',function(req,res){
    res.sendFile(__dirname + '/contact.html');
});

// Dynamic get request repsonse for name    
app.get('/profile/:name', function(req, res){
    var data = {age: 29, job: 'Ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);