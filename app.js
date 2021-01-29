var express = require('express');
var app = express();

const PORT = 3000;

app.use(express.static(__dirname + '/public'));

//landing page route
app.get("/", function(req, res){
    res.render("landing.ejs");
})

//all Product page routes
app.get("/laptops", function(req, res){
    res.render("laptops.ejs");
})

//login , register routes
app.get("/login", function(req, res){ 
    res.render("login.ejs");
})
app.get("/register", function(req, res){
    res.render("register.ejs");
})

//server starting up code! isse disturb na kario
app.listen(PORT, function() {
    console.log("hey we can make Oltrust working DOOO!!!!!");
})