const express = require("express");
const Router = express.Router();

const ServicioAuditoria = require("./../services/auditoria.js");
const auditoriaServicio = new ServicioAuditoria();

// Obtener todas las auditorías o una auditoría por ID
Router.get("/:auditoriaId?", async (solicitud, respuesta) => {
  try {
    const auditoria = await auditoriaServicio.Listar(solicitud.params.auditoriaId);
    respuesta.json(auditoria);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener auditorías." });
  }
});

// Agregar una nueva auditoría
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevaAuditoria = await auditoriaServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevaAuditoria);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar la auditoría." });
  }
});

// Actualizar una auditoría existente
Router.put("/:auditoriaId", async (solicitud, respuesta) => {
  
    respuesta.status(500).json({ error: "Error al actualizar la auditoría, esta no puede ser modificada." });
  
});

// Eliminar una auditoría
Router.delete("/:auditoriaId", async (solicitud, respuesta) => {
      respuesta.status(500).json({ error: "Error al eliminar la auditoría, esta no puede ser eliminada." });
  
});

module.exports = Router;
