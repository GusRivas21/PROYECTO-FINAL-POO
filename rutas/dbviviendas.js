
const express = require('express');
const ruta = express.Router();
const Dbviviendas = require('../modelos/hogares');

ruta.get('/', async (req, res) => {
    try {
        const hogares = await Dbviviendas.find();
        res.json(hogares);
    }catch (err){
        res.status(500).json({message: err.message});
    }
});

ruta.post('/', async (req, res) => {
    const dbviviendas = new Dbviviendas({
        representante: req.body.representante,
        nombre: req.body.nombre,
        habitantes: req.body.habitantes,
        dirección:{
            colonia: req.body.colonia,
            referencia: req.body.referencia,
            numero: req.body.numero,
        },
        salariopromedio: req.body.salariopromedio,
    });

    try {
        const newDbviviendas = await dbviviendas.save();
        res.status(201).json(newDbviviendas);
    }catch (err){
        res.status(400).json({message: err.message});
    }
});

ruta.get('/:id', getDbviviendas, (req, res) => {
    res.json(res.dbviviendas);
});

async function getDbviviendas(req, res, next){
    let dbviviendas;
    try {
        dbviviendas = await Dbviviendas.findById(req.params.id);
        if (dbviviendas == null) {
            return res.status(404).json({message: 'casa no encontrada'});
        }
    }catch (err){
        return res.status(500).json({message: err.message});
    }

    res.dbviviendas = dbviviendas;
    next();
}

ruta.put('/:id', getDbviviendas, async (req, res) => {
    if (req.body.representante != null) {
        res.dbviviendas.representante = req.body.representante;
    }
    if (req.body.nombre != null) {
        res.dbviviendas.nombre = req.body.nombre;
    }
    try {
        const updatedDbviviendas = await res.dbviviendas.save();
        res.json(updatedDbviviendas);
    } catch (err){
        res.status(400).json({message: err.message});
    }
    });

 
ruta.delete('/:id', async (req, res) => {
    try {
        const dbviviendas = await Dbviviendas.findByIdAndDelete(req.params.id);
        if (dbviviendas == null) {
            return res.status(404).json({ message: 'Casa no encontrada' });
        }
        res.json({ message: 'Vivienda eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
    module.exports = ruta;