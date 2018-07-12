var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
    titulo: String,
    texto: String,
    autor: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      first_name: String,
      first_lastname: String
      
    },
    imagen: String,
    etiquetas: String,
    fecha: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Blog", blogSchema);