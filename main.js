const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const bakcursos = require("./rutas/curso");

const app = new express();
const port = 3000;

app.use(bodyParser.json());
app.use("/curso",bakcursos);

const MONGO_DB_URL = "mongodb://host.docker.internal:27017/dbcarpinteria";


mongoose.connect(MONGO_DB_URL, {
}).then(response => {
    console.log('conexión exitosa con MongoDB.')
}).catch(error => {
    console.log('Error in DB connection: ' + error)
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});