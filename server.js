var express = require("express");
var app = express();
const path = require("path");
app.use(express.static(__dirname + '/public'));

var bodyParser = require("body-parser");
app.set("view engine", "ejs");

const mongojs = require('mongojs')

const cheerio = require('cheerio')

var request = require('request');

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/index", function(req, res) {
    res.render("index");
});

app.get("/articles", function(req, res) {
    res.render("articles")
});

app.post("/save", function(req, res) {


});
app.post("/addComment", function(req, res) {
    var userComment = req.body.userComment;

});


app.listen(process.env.PORT || 3000, function() {
    console.log("Listening on 3000");
});