const express = require("express");
const Router = express.Router();

const ServicioCuatrimestre = require("./../services/cuatrimestre.js");
const cuatrimestreServicio = new ServicioCuatrimestre();

// Obtener todos los cuatrimestres o uno por ID
Router.get("/:cuatrimestreId?", async (solicitud, respuesta) => {
  try {
    const cuatrimestre = await cuatrimestreServicio.Listar(solicitud.params.cuatrimestreId);
    respuesta.json(cuatrimestre);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener los cuatrimestres." });
  }
});

// Agregar un nuevo cuatrimestre
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevoCuatrimestre = await cuatrimestreServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevoCuatrimestre);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar el cuatrimestre." });
  }
});

// Actualizar un cuatrimestre existente
Router.put("/:cuatrimestreId", async (solicitud, respuesta) => {
  try {
    const { cuatrimestreId } = solicitud.params;
    const cuatrimestreActualizado = await cuatrimestreServicio.Actualizar(cuatrimestreId, solicitud.body);
    respuesta.json(cuatrimestreActualizado);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al actualizar el cuatrimestre." });
  }
});

// Eliminar un cuatrimestre
Router.delete("/:cuatrimestreId", async (solicitud, respuesta) => {
  try {
    await cuatrimestreServicio.Borrar(solicitud.params.cuatrimestreId);
    respuesta.json({ mensaje: "Cuatrimestre eliminado correctamente." });
  } catch (error) {
    respuesta.status(500).json({ error: "Error al eliminar el cuatrimestre." });
  }
});

module.exports = Router;