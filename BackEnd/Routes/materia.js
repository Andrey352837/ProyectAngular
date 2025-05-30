const express = require("express");
const Router = express.Router();

const ServicioMateria = require("./../services/materia.js");
const materiaServicio = new ServicioMateria();

// Obtener todas las materias o una por ID
Router.get("/:materiaId?", async (solicitud, respuesta) => {
  try {
    const materia = await materiaServicio.Listar(solicitud.params.materiaId);
    respuesta.json(materia);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener las materias." });
  }
});

// Agregar una nueva materia
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevaMateria = await materiaServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevaMateria);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar la materia." });
  }
});

// Actualizar una materia existente
Router.put("/:materiaId", async (solicitud, respuesta) => {
  try {
    const { materiaId } = solicitud.params;
    const materiaActualizada = await materiaServicio.Actualizar(materiaId, solicitud.body);
    respuesta.json(materiaActualizada);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al actualizar la materia." });
  }
});

// Eliminar una materia
Router.delete("/:materiaId", async (solicitud, respuesta) => {
  try {
    await materiaServicio.Borrar(solicitud.params.materiaId);
    respuesta.json({ mensaje: "Materia eliminada correctamente." });
  } catch (error) {
    respuesta.status(500).json({ error: "Error al eliminar la materia." });
  }
});

module.exports = Router;