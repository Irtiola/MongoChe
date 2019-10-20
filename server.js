var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.set("view engine", "ejs");

const mongojs = require('mongojs')

const cheerio = require('cheerio')

var request = require('request');

app.get("/index", function (req, res) {
    res.render("index");
});




app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on 3000");
});