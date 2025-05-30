const express = require("express");
const Router = express.Router();

const ServicioOfertaAcademica = require("./../services/ofertaAcademica.js");
const ofertaAcademicaServicio = new ServicioOfertaAcademica();

// Obtener todas las ofertas académicas o una por ID
Router.get("/:ofertaacademicaId?", async (solicitud, respuesta) => {
  try {
    const oferta = await ofertaAcademicaServicio.Listar(solicitud.params.ofertaacademicaId);
    respuesta.json(oferta);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener las ofertas académicas." });
  }
});

Router.get("/ofertacarrera/:id?", async (solicitud, respuesta) => {
  try {
    const oferta = await ofertaAcademicaServicio.listarOfertaCarrera(solicitud.params.id);
    respuesta.json(oferta);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener las ofertas académicas." });
  }
});

// Agregar una nueva oferta académica
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevaOferta = await ofertaAcademicaServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevaOferta);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar la oferta académica." });
  }
});

// Actualizar una oferta académica existente
Router.put("/:ofertaacademicaId?", async (solicitud, respuesta) => {
  try {
    const ofertaActualizada = await ofertaAcademicaServicio.Actualizar(solicitud.params.ofertaacademicaId, solicitud.body);
    respuesta.json(ofertaActualizada);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al actualizar la oferta académica." });
  }
});

// Eliminar una oferta académica
Router.delete("/:ofertaacademicaId", async (solicitud, respuesta) => {
  try {
    await ofertaAcademicaServicio.Borrar(solicitud.params.ofertaacademicaId);
    respuesta.json({ mensaje: "Oferta académica eliminada correctamente." });
  } catch (error) {
    respuesta.status(500).json({ error: "Error al eliminar la oferta académica." });
  }
});

module.exports = Router;