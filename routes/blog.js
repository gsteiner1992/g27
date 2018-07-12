var express= require("express");
var router = express.Router();
var Blog = require("../models/Blog");

var meses = new Array ("Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic");
//------------------------------------
//RUTAS PARA BLOG
//-----------------------------------

//Página administrador. Muestra todos los blogs
router.get("/", isLogged, function(req,res){
    
  // res.render("Blog/show", {blogs: blogs}); 
  Blog.find({}, function(err, allBlogs){
     if(err){
         console.log(err);
     } else {
         res.render("admin/blog/index", {blogs: allBlogs, usuarioActual: req.user});
     }
  }).sort({fecha:1});
});

//POST NUEVO BLOG
router.post("/", function(req,res){
    
    var titulo = req.body.titulo;
    var imagen = req.body.imagen;
    var texto = req.body.texto;
    var autor = {
        id: req.user._id,
        first_name: req.user.first_name,
        first_lastname: req.user.first_lastname
    };
    var etiquetas = req.body.etiquetas;
    var fecha = new Date();
   /* var fecha = (date.getDate() + " " + meses[date.getMonth()] + " " + date.getFullYear());*/
    var nuevoBlog = {titulo: titulo, imagen: imagen, texto: texto, autor: autor, etiquetas: etiquetas, fecha: fecha};
    
    Blog.create(nuevoBlog, function(err, blog) {
        if(err) {
            console.log(err);
        }else {
            console.log("BLOG INSERTADO");
            res.redirect("/admin");
        }
    });
    
});
    
//GET NUEVO BLOG
router.get("/blog/new",isLogged, function(req, res) {
   res.render("admin/blog/new"); 
});

//MIDDLEWARE LOGIN
function isLogged(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/admin/login");
}


module.exports = router;