const express = require("express");
const Router = express.Router();

const ServicioHistoricoAcademico = require("./../services/historicoAcademico.js");
const historicoAcademicoServicio = new ServicioHistoricoAcademico();

// Obtener todos los historiales académicos o uno por ID
Router.get("/:historicoId?", async (solicitud, respuesta) => {
  try {
    const historico = await historicoAcademicoServicio.Listar(solicitud.params.historicoId);
    respuesta.json(historico);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener los historiales académicos." });
  }
});
Router.get("/historicoest/:historicoId?", async (solicitud, respuesta) => {
  try {
    const historico = await historicoAcademicoServicio.historicoEst(solicitud.params.historicoId);
    respuesta.json(historico);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener los historiales académicos." });
  }
});


// Agregar un nuevo historial académico
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevoHistorico = await historicoAcademicoServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevoHistorico);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar el historial académico." });
  }
});

// Actualizar un historial académico existente
Router.put("/:historicoId", async (solicitud, respuesta) => {
  try {
    const { historicoId } = solicitud.params;
    const historicoActualizado = await historicoAcademicoServicio.Actualizar(historicoId, solicitud.body);
    respuesta.json(historicoActualizado);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al actualizar el historial académico." });
  }
});

// Eliminar un historial académico
Router.delete("/:historicoId", async (solicitud, respuesta) => {
  try {
    await historicoAcademicoServicio.Borrar(solicitud.params.historicoId);
    respuesta.json({ mensaje: "Historial académico eliminado correctamente." });
  } catch (error) {
    respuesta.status(500).json({ error: "Error al eliminar el historial académico." });
  }
});

module.exports = Router;
