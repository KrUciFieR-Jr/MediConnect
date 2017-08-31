var express = require("express"),
	mongoose = require("mongoose"),
	methodOver = require("method-override"),
	expressSani = require("express-sanitizer"),
	bodyParser = require("body-parser"),
	Posts=require("./models/post.js"),
	User=require("./models/user.js");




var app = express();

mongoose.connect("mongodb://localhost/mediconnect_feed",{useMongoClient:true});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(methodOver("_method"));
app.use(express.static(__dirname+"/public"));


app.get("/",function(req,res){
	res.redirect("/home");
});


app.get("/home",function(req,res){
	res.render("index");
});

app.get("/login",function(req,res){
		res.render("login");
});
app.get("/register",function(req,res){
		res.render("register");
});

app.post("/login",function(req,res){
	var usernamme = req.body.username;
	res.redirect("/post");
});

app.post("/register",function(req,res){
	res.redirect("/post");

});
app.listen(8080,function(){
	// console.log(process.env.POR);
	// console.log(process.env.IP);
	console.log("This is the Server");
});