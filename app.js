// ----------------------------------------------------------------------
// Framework Declaration
// ----------------------------------------------------------------------
var express = require("express");
var app = express();
var port = process.env.PORT;
// ----------------------------------------------------------------------
// View engine set/ use
// ----------------------------------------------------------------------
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Base Route
app.get("/", function(req, res){
    res.render("portfolio");
});

// ----------------------------------------------------------------------
// Listen port
// ----------------------------------------------------------------------
app.listen(port);
