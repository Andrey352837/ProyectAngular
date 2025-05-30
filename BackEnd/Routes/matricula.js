const express = require("express");
const Router = express.Router();

const ServicioMatricula = require("./../services/matricula.js");
const matriculaServicio = new ServicioMatricula();

// Obtener todas las matrículas o una por ID
Router.get("/:matriculaId?", async (solicitud, respuesta) => {
  try {
    const matricula = await matriculaServicio.Listar(solicitud.params.matriculaId);
    respuesta.json(matricula);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener las matrículas." });
  }
});

// Agregar una nueva matrícula
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevaMatricula = await matriculaServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevaMatricula);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar la matrícula." });
  }
});

// Actualizar una matrícula existente
Router.put("/:matriculaId", async (solicitud, respuesta) => {
  try {
    const { matriculaId } = solicitud.params;
    const matriculaActualizada = await matriculaServicio.Actualizar(matriculaId, solicitud.body);
    respuesta.json(matriculaActualizada);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al actualizar la matrícula." });
  }
});

// Eliminar una matrícula
Router.delete("/:matriculaId", async (solicitud, respuesta) => {
  try {
    await matriculaServicio.Borrar(solicitud.params.matriculaId);
    respuesta.json({ mensaje: "Matrícula eliminada correctamente." });
  } catch (error) {
    respuesta.status(500).json({ error: "Error al eliminar la matrícula." });
  }
});

module.exports = Router;
