const express = require("express");
const Router = express.Router();

const ServicioCurso = require("./../services/curso.js");
const cursoServicio = new ServicioCurso();

// Obtener todos los cursos o uno por ID
Router.get("/:cursoId?", async (solicitud, respuesta) => {
  try {
    const curso = await cursoServicio.Listar(solicitud.params.cursoId);
    respuesta.json(curso);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener los cursos." });
  }
});

// Agregar un nuevo curso
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevoCurso = await cursoServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevoCurso);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar el curso." });
  }
});

// Actualizar un curso existente
Router.put("/:cursoId", async (solicitud, respuesta) => {
 try {
    const { cursoId } = solicitud.params;
    const cursoActualizado = await cursoServicio.Actualizar(cursoId, solicitud.body.nombre);
   respuesta.json(cursoActualizado);
 } catch (error) {
 respuesta.status(500).json({ error: "Error al actualizar el curso." });
 }
});

// Eliminar un curso
Router.delete("/:cursoId", async (solicitud, respuesta) => {
  try {
    await cursoServicio.Borrar(solicitud.params.cursoId);
    respuesta.json({ mensaje: "Curso eliminado correctamente." });
  } catch (error) {
    respuesta.status(500).json({ error: "Error al eliminar el curso." });
  }
});

module.exports = Router;