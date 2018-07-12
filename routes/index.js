var express= require("express");
var router = express.Router();
var passport = require("passport");
var Blog = require("../models/Blog");
var User = require("../models/User");

//Página de inicio. También muestra las entradas recientes del blog
router.get("/", function(req,res){
   Blog.find({}, function(err, allBlogs) {
       if(err){
           console.log(err);
       }else {
           res.render("index", {blogs: allBlogs});
       }
   }).sort({fecha:1});
});

//-----------------------
//Rutas para autenticación
//-----------------------

//LOGIN GET
router.get("/admin/login", function(req, res) {
    res.render("admin/user/login");
});

//LOGIN POST
router.post("/admin/login", passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/admin/login"
}), function(req, res){
    
});


//REGISTER GET
router.get("/admin/register", function(req, res) {
    res.render("admin/user/register");
});


//REGISTER POST (Registrar usuario)
router.post("/admin/register", function(req, res) {
    var nuevoUser = new User({username: req.body.username});
    
    if(req.body.password==req.body.password2) {
        User.register(nuevoUser, req.body.password, function(err){
            if(err) {
                console.log(err);
                return res.render("admin/user/register");
            }
            passport.authenticate("local")(req,res, function(){
                res.redirect("/admin");
            });
        });
    } else {
        res.render("admin/user/register");
    }
    
});


//LOGOUT
router.get("/admin/logout", function(req, res) {
   req.logout();
   res.redirect("/");
});

//MIDDLEWARE LOGIN
function isLogged(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/admin/login");
}

module.exports = router;