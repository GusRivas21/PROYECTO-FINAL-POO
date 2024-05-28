const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const bakcursos = require("./rutas/curso");

const app = new express();
const port = 3000;

app.use(bodyParser.json());
app.use("/curso",bakcursos);

mongoose.connect("mongodb://localhost:27017/dbcarpinteria")

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error de coneccion a MongoDB:"));
db.once("open", () =>{
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});