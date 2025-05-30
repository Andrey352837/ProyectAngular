const express = require("express");
const Router = express.Router();

const ServicioEncabezadoFactura = require("./../services/encabezadoFactura.js");
const encabezadoFacturaServicio = new ServicioEncabezadoFactura();

// Obtener todos los encabezados de factura o uno por ID
Router.get("/:encabezadoId?", async (solicitud, respuesta) => {
  try {
    const encabezado = await encabezadoFacturaServicio.Listar(solicitud.params.encabezadoId);
    respuesta.json(encabezado);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener los encabezados de factura." });
  }
});

// Agregar un nuevo encabezado de factura
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevoEncabezado = await encabezadoFacturaServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevoEncabezado);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar el encabezado de factura." });
  }
});

// Actualizar un encabezado de factura existente
Router.put("/:encabezadoId", async (solicitud, respuesta) => {

    respuesta.status(500).json({ error: "Error al actualizar el encabezado de factura, este no se puede actualizar." });
  
});

// Eliminar un encabezado de factura
Router.delete("/:encabezadoId", async (solicitud, respuesta) => {
  
    respuesta.status(500).json({ error: "Error al eliminar el encabezado de factura, este no se puede eliminar." });
  
});

module.exports = Router;
