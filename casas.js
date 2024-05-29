const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hogares = require('./rutas/dbviviendas');

const app = express();
const port = 3000;
const MONGO_DB_URL = "mongodb://host.docker.internal:27017/dbvivienda";

app.use(bodyParser.json());
app.use('/api/dbviviendas', hogares);

mongoose.connect(MONGO_DB_URL, {
}).then(response => {
    console.log('conexión exitosa con MongoDB.')
}).catch(error => {
    console.log('Error in DB connection: ' + error)
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});