var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const PORT = 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

//landing page route
app.get("/", function(req, res){
    res.render("landing.ejs");
})

//give them info
app.get("/laptops/tnc", function(req, res){
    res.render("tnc.ejs");
})

//post a new ad
app.get("/laptops/tnc/post", function(req, res){
    res.render("new.ejs");
})

var laptops = [
    { model: "Thinkpad T420", processor: "i5", ram: "16gb", generation: "5th", storage: "256gb SSD", price: "19,999"}
];

//all Product page routes
app.get("/laptops", function(req, res){
    res.render("laptops.ejs", {laptops:laptops});
})
//posting laptops
app.post("/laptops", function(req, res){
    var model = req.body.model;
    var processor = req.body.processor;
    var ram = req.body.ram;
    var generation = req.body.generation;
    var storage = req.body.storage;
    var price = req.body.price;
    
    var newLaptop = {
        model: model,
        processor: processor,
        ram: ram,
        generation: generation,
        storage: storage,
        price: price
    }

    laptops.push(newLaptop);
    //redirect to laptop pages
    res.redirect("/laptops");
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