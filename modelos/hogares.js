const mongoose = require('mongoose')

const hogareSchema = new mongoose.Schema({
    representante:String,
    nombre:String,
    habitantes:Number,
    dirección:{
        colonia:String,
        referencia:String,
        numero:Number
    },
    salariopromedio:Number
});

const hogares = mongoose.model('hogares', hogareSchema);

module.exports = hogares;