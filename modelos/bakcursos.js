const mongoose = require("mongoose");

const bakcursosSchema = new mongoose.Schema({
titulo: String,
img: String,
temas: {
  tema1: {
    id: Number,
    titulo: String,
    descripcion: String
  },
  tema2: {
    id: Number,
    titulo: String,
    descripcion: String
  },
  tema3: {
    id: Number,
    titulo: String,
    descripcion: String
    }
  }
});

const bakcursos = mongoose.model("bakcursos", bakcursosSchema);

module.exports = bakcursos;