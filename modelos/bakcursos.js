const mongoose = require("mongoose");

const bakcursosSchema = new mongoose.Schema({
  titulo: String,
  img: String,
  temas: {
    tema1: {
      titulo: String,
      descripcion: String,
      video: String
    },
    tema2: {
      titulo: String,
      descripcion: String,
      video: String
    },
    tema3: {
      titulo: String,
      descripcion: String,
      video: String
    }
  }
});

const bakcursos = mongoose.model("bakcursos", bakcursosSchema);

module.exports = bakcursos;