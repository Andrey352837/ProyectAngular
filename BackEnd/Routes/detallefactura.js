const express = require("express");
const Router = express.Router();

const ServicioDetalleFactura = require("./../services/detalleFactura.js");
const detalleFacturaServicio = new ServicioDetalleFactura();

// Obtener todos los detalles de factura o uno por ID
Router.get("/:detalleId?", async (solicitud, respuesta) => {
  try {
    const detalle = await detalleFacturaServicio.Listar(solicitud.params.detalleId);
    respuesta.json(detalle);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener los detalles de factura." });
  }
});

// Agregar un nuevo detalle de factura
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevoDetalle = await detalleFacturaServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevoDetalle);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar el detalle de factura." });
  }
});

// Actualizar un detalle de factura existente
Router.put("/:detalleId", async (solicitud, respuesta) => {
  try {
    const { detalleId } = solicitud.params;
    const detalleActualizado = await detalleFacturaServicio.Actualizar(detalleId, solicitud.body);
    respuesta.json(detalleActualizado);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al actualizar el detalle de factura." });
  }
});

// Eliminar un detalle de factura
Router.delete("/:detalleId", async (solicitud, respuesta) => {
  try {
    await detalleFacturaServicio.Borrar(solicitud.params.detalleId);
    respuesta.json({ mensaje: "Detalle de factura eliminado correctamente." });
  } catch (error) {
    respuesta.status(500).json({ error: "Error al eliminar el detalle de factura." });
  }
});

module.exports = Router;
