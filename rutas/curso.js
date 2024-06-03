const express = require("express");
const ruta = express.Router();
const Curso = require("../modelos/bakcursos");

ruta.get("/", async (req, res) => {
    try {
        const bakcurso = await Curso.find();
        res.json(bakcurso);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

ruta.post("/", async (req, res) => {
    const curso = new Curso({
        titulo: req.body.titulo,
        img: req.body.img,
        temas: {
            tema1: {
                titulo: req.body.temas.tema1.titulo,
                descripcion: req.body.temas.tema1.descripcion,
                video: req.body.temas.tema1.video,
                miniatura: req.body.temas.tema1.miniatura
            },
            tema2: {
                titulo: req.body.temas.tema2.titulo,
                descripcion: req.body.temas.tema2.descripcion,
                video: req.body.temas.tema2.video,
                miniatura: req.body.temas.tema2.miniatura
            },
            tema3: {
                titulo: req.body.temas.tema3.titulo,
                descripcion: req.body.temas.tema3.descripcion,
                video: req.body.temas.tema3.video,
                miniatura: req.body.temas.tema3.miniatura
            }
        }
    });
    try {
        const nuevoCurso = await curso.save();
        res.status(201).json(nuevoCurso);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

ruta.get("/:id", getCurso, (req, res) => {
    res.json(res.curso);
});

async function getCurso(req, res, next) {
    let curso;
    try {
        curso = await Curso.findById(req.params.id);
        if (curso == null) {
            return res.status(404).json({ message: "curso no encontrada" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.curso = curso;
    next();
}

ruta.put("/:id", getCurso, async (req, res) => {
    if (req.body.titulo != null) {
        res.curso.titulo = req.body.titulo;
    }

    if (req.body.img != null) {
        res.curso.img = req.body.img;
    }

    if (req.body.temas) {
        if (req.body.temas.tema1) {
            if (req.body.temas.tema1.titulo != null) {
                res.curso.temas.tema1.titulo = req.body.temas.tema1.titulo;
            }
            if (req.body.temas.tema1.descripcion != null) {
                res.curso.temas.tema1.descripcion = req.body.temas.tema1.descripcion;
            }
            if (req.body.temas.tema1.video != null) {
                res.curso.temas.tema1.video = req.body.temas.tema1.video;
            }
            if (req.body.temas.tema1.miniatura != null) {
                res.curso.temas.tema1.miniatura = req.body.temas.tema1.miniatura;
            }
        }
        if (req.body.temas.tema2) {
            if (req.body.temas.tema2.titulo != null) {
                res.curso.temas.tema2.titulo = req.body.temas.tema2.titulo;
            }
            if (req.body.temas.tema2.descripcion != null) {
                res.curso.temas.tema2.descripcion = req.body.temas.tema2.descripcion;
            }
            if (req.body.temas.tema2.video != null) {
                res.curso.temas.tema2.video = req.body.temas.tema2.video;
            }
            if (req.body.temas.tema2.miniatura != null) {
                res.curso.temas.tema2.miniatura = req.body.temas.tema2.miniatura;
            }
        }
        if (req.body.temas.tema3) {
            if (req.body.temas.tema3.titulo != null) {
                res.curso.temas.tema3.titulo = req.body.temas.tema3.titulo;
            }
            if (req.body.temas.tema3.descripcion != null) {
                res.curso.temas.tema3.descripcion = req.body.temas.tema3.descripcion;
            }
            if (req.body.temas.tema3.video != null) {
                res.curso.temas.tema3.video = req.body.temas.tema3.video;
            }
            if (req.body.temas.tema3.miniatura != null) {
                res.curso.temas.tema3.miniatura = req.body.temas.tema3.miniatura;
            }
        }
    }
    try {
        const cursoActualizado = await res.curso.save();
        res.json(cursoActualizado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

ruta.delete('/:id', async (req, res) => {
    try {
        const cursoEliminado = await Curso.findByIdAndDelete(req.params.id);
        if (cursoEliminado == null) {
            return res.status(404).json({ message: 'curso no encontrado' });
        }
        res.json({
            message: 'curso eliminado con éxito',
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = ruta;
