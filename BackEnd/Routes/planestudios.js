const express = require("express");
const Router = express.Router();

const ServicioPlanEstudios = require("./../services/planestudios.js");
const planEstudiosServicio = new ServicioPlanEstudios();

// Obtener todos los planes de estudio o uno por ID
Router.get("/:planId?", async (solicitud, respuesta) => {
  try {
    const plan = await planEstudiosServicio.Listar(solicitud.params.planId);
    respuesta.json(plan);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener los planes de estudio." });
  }
});

// Agregar un nuevo plan de estudios
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevoPlan = await planEstudiosServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevoPlan);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar el plan de estudios." });
  }
});

// Actualizar un plan de estudios existente
Router.put("/:planId", async (solicitud, respuesta) => {
  try {
    const { planId } = solicitud.params;
    const planActualizado = await planEstudiosServicio.Actualizar(solicitud.params.planId, solicitud.body);
    respuesta.json(planActualizado);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al actualizar el plan de estudios." });
  }
});

// Eliminar un plan de estudios
Router.delete("/:planId", async (solicitud, respuesta) => {
  try {
    await planEstudiosServicio.Borrar(solicitud.params.planId);
    respuesta.json({ mensaje: "Plan de estudios eliminado correctamente." });
  } catch (error) {
    respuesta.status(500).json({ error: "Error al eliminar el plan de estudios." });
  }
});

module.exports = Router;