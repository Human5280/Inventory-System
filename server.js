// load the things we need
var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var mongoose = require('mongoose');
var body_phraser = require('body-parser');
var fs = require('fs');

// set the view engine to ejs
app.set('view engine', 'ejs');
var mascots = [
    { name: 'Sammy', organization: "manager", birth_year: 2012},
    { name: 'Tux', organization: "manager", birth_year: 1996},
    { name: 'Moby Dock', organization: "staff", birth_year: 2013}
];
var tagline = "No programming concept is complete without a cute animal mascot.";
//Connect to Mongoose
mongoose.connect('mongodb+srv://joshua:dlu3INw3@cluster0.o2qx7.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

// index page 
app.get('/index', function(req, res) {

     res.render('pages/index', {

    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

//login page
app.get('/',function(req,res){
    res.render('pages/login');
});


app.post('/',function(req,res){
    res.render('pages/index');
});

app.get('/successful_page',function(req,res){
    res.render('pages/successful_page');
});

app.listen(8081);
console.log('8081 is Running');