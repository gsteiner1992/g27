var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    estratLocal = require("passport-local"),
    Blog = require("./models/Blog"),
    User = require("./models/User"),
    addBD = require("./seeds");
    
var port = process.env.PORT || 3977;
var routesBlog = require("./routes/blog.js"),
    routesIndex = require("./routes/index.js");

addBD();

mongoose.connect("mongodb://localhost/g27");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//CONFIGURACIÓN PASSPORT
app.use(require("express-session")({
    secret: "Secreto",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new estratLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res,next){
   res.locals.usuarioActual = req.user;
   next();
});

app.use("/", routesIndex);
app.use("/admin", routesBlog);


app.listen(port, function(){
    console.log("Servidor activo");
});



