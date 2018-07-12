var mongoose = require("mongoose"),
    Blog = require("./models/Blog"),
    User = require("./models/User"),
    passport = require("passport");

var datos = [
    {
        titulo: "Titulo 1",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit mi, accumsan eu scelerisque vitae, bibendum nec purus. Vivamus justo velit, laoreet eleifend nisl ut, bibendum placerat est. Quisque nisi sem, laoreet vel feugiat in, lacinia id felis. Donec a scelerisque mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie vehicula mauris, sit amet lacinia ligula bibendum a. Pellentesque consectetur mauris quis risus condimentum mollis. Mauris massa erat, cursus eu tincidunt eget, ultricies ut magna.",
        autor: "Gustav",
        imagen: "http://2.bp.blogspot.com/-CmBgofK7QzU/TVj3u3N1h2I/AAAAAAAADN8/OszBhGvvXRU/s640/tumblr_lg7h9gpbtP1qap9qio1_500.jpeg",
        etiquetas: "Nueva, etiqueta",
        fecha: new Date("10 Jan 2016")
    },
    {
        titulo: "Titulo 2",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit mi, accumsan eu scelerisque vitae, bibendum nec purus. Vivamus justo velit, laoreet eleifend nisl ut, bibendum placerat est. Quisque nisi sem, laoreet vel feugiat in, lacinia id felis. Donec a scelerisque mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie vehicula mauris, sit amet lacinia ligula bibendum a. Pellentesque consectetur mauris quis risus condimentum mollis. Mauris massa erat, cursus eu tincidunt eget, ultricies ut magna.",
        autor: "Marlon Brando",
        imagen: "https://upload.wikimedia.org/wikipedia/en/c/cd/The-catalyst-single-cover-500x500.png",
        etiquetas: "Ojo, calle",
        fecha: new Date("15 Jan 2016")
    },
    {
        titulo: "Titulo 3",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit mi, accumsan eu scelerisque vitae, bibendum nec purus. Vivamus justo velit, laoreet eleifend nisl ut, bibendum placerat est. Quisque nisi sem, laoreet vel feugiat in, lacinia id felis. Donec a scelerisque mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie vehicula mauris, sit amet lacinia ligula bibendum a. Pellentesque consectetur mauris quis risus condimentum mollis. Mauris massa erat, cursus eu tincidunt eget, ultricies ut magna.",
        autor: "Bradd Pitt",
        imagen: "https://farm9.staticflickr.com/8644/16517781789_6ed90c5678.jpg",
        etiquetas: "Ojo, calle",
        fecha: new Date("20 Feb 2016")
    },
    
    {
        titulo: "Titulo 4",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit mi, accumsan eu scelerisque vitae, bibendum nec purus. Vivamus justo velit, laoreet eleifend nisl ut, bibendum placerat est. Quisque nisi sem, laoreet vel feugiat in, lacinia id felis. Donec a scelerisque mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie vehicula mauris, sit amet lacinia ligula bibendum a. Pellentesque consectetur mauris quis risus condimentum mollis. Mauris massa erat, cursus eu tincidunt eget, ultricies ut magna.",
        autor: "Katherin Gaudet",
        imagen: "http://img.ffffound.com/static-data/assets/6/51cc46900bf5fe574293d49c4d9939e0ebfc8ee3_m.jpg",
        etiquetas: "gato, blanco",
        fecha: new Date("25 Mar 2016")
    },
    
    {
        titulo: "Titulo 5",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit mi, accumsan eu scelerisque vitae, bibendum nec purus. Vivamus justo velit, laoreet eleifend nisl ut, bibendum placerat est. Quisque nisi sem, laoreet vel feugiat in, lacinia id felis. Donec a scelerisque mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie vehicula mauris, sit amet lacinia ligula bibendum a. Pellentesque consectetur mauris quis risus condimentum mollis. Mauris massa erat, cursus eu tincidunt eget, ultricies ut magna.",
        autor: "Fidel Casto",
        imagen: "http://inspirationfeed.com/wp-content/uploads/2010/06/Evolution_by_will_yen-500x500.png",
        etiquetas: "sol, cielo",
        fecha: new Date("17 Apr 2016")
    },
    
    {
        titulo: "Titulo 6",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit mi, accumsan eu scelerisque vitae, bibendum nec purus. Vivamus justo velit, laoreet eleifend nisl ut, bibendum placerat est. Quisque nisi sem, laoreet vel feugiat in, lacinia id felis. Donec a scelerisque mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie vehicula mauris, sit amet lacinia ligula bibendum a. Pellentesque consectetur mauris quis risus condimentum mollis. Mauris massa erat, cursus eu tincidunt eget, ultricies ut magna.",
        autor: "Mario Sáenz",
        imagen: "http://inspirationfeed.com/wp-content/uploads/2010/06/2-wallpaper_cgi_landscape_1024x1024-500x500.jpg",
        etiquetas: "cielo, otro",
        fecha: new Date("20 Nov 2016")
    }
    ];
    
var user = 
    {
        username: "gsteiner1992", 
        first_name: "Gustavo", 
        second_name: "Martin", 
        first_lastname: "Bermudez", 
        second_lastname: "Lacayo",
        email: "gsteiner1992@gmail.com",
        roll: "Admin"
        
    };
    
function addDB() {
    addAdmin();
    addBlogs();
}

function addAdmin(){
    User.remove({}, function(err){
        if(err) {
           console.log(err);
        }else {
           console.log("Usuarios borrados");
           
           var nuevoUser = new User(user);
           User.register(nuevoUser, "Un0D0zTr3z", function(err){
              if(err){
                  console.log(err);
              } else {
                  console.log("Usuario agregado");
              }
           });
        }
    });
}

function addBlogs() {
    Blog.remove({}, function(err) {
       if(err){
           console.log(err);
       } else {
           console.log("Blogs eliminados");
           
           /*datos.forEach(function(seed){
               Blog.create(seed, function(err) {
                   if(err) {
                       console.log(err);
                   } else {
                       console.log("Blog agregado");
                   }
               });
           });*/
       }
    }); 
}

module.exports = addDB;