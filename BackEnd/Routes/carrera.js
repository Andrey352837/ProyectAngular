const express = require("express");
const Router = express.Router();

const ServicioCarrera = require("./../services/carrera.js");
const carreraServicio = new ServicioCarrera();

// Obtener todas las carreras o una carrera por ID
Router.get("/:carreraId?", async (solicitud, respuesta) => {
  try {
    const carrera = await carreraServicio.Listar(solicitud.params.carreraId);
    respuesta.json(carrera);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener carreras." });
  }
});

// Agregar una nueva carrera
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevaCarrera = await carreraServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevaCarrera);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar la carrera." });
  }
});

// Actualizar una carrera existente
Router.put("/:carreraId", async (solicitud, respuesta) => {
  try {
    const { carreraId } = solicitud.params;
    const carreraActualizada = await carreraServicio.Actualizar(carreraId, solicitud.body);
    respuesta.json(carreraActualizada);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al actualizar la carrera." });
  }
});

// Eliminar una carrera
Router.delete("/:carreraId", async (solicitud, respuesta) => {
  try {
    await carreraServicio.Borrar(solicitud.params.carreraId);
    respuesta.json({ mensaje: "Carrera eliminada correctamente." });
  } catch (error) {
    respuesta.status(500).json({ error: "Error al eliminar la carrera." });
  }
});

module.exports = Router;