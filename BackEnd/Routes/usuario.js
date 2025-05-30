const express = require("express");
const Router = express.Router();

const ServicioUsuario = require("./../services/usuario.js");
const usuarioServicio = new ServicioUsuario();

// Obtener todos los usuarios o un usuario por ID
Router.get("/:usuarioId?", async (solicitud, respuesta) => {
  try {
    const usuario = await usuarioServicio.Listar(solicitud.params.usuarioId);
    respuesta.json(usuario);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener usuarios." });
  }
});

// Agregar un nuevo usuario
Router.post("/", async (solicitud, respuesta) => {
  try {
    const nuevoUsuario = await usuarioServicio.Agregar(solicitud.body);
    respuesta.status(201).json(nuevoUsuario);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al agregar el usuario." });
  }
});

// Actualizar un usuario existente
Router.put("/:usuarioId", async (solicitud, respuesta) => {
  try {
    const { usuarioId } = solicitud.params;
    const usuarioActualizado = await usuarioServicio.Actualizar(usuarioId, solicitud.body);
    respuesta.json(usuarioActualizado);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al actualizar el usuario." });
  }
});

// Eliminar un usuario
Router.delete("/:usuarioId", async (solicitud, respuesta) => {
  try {
    await usuarioServicio.Borrar(solicitud.params.usuarioId);
    respuesta.json({ mensaje: "Usuario eliminado correctamente." });
  } catch (error) {
    respuesta.status(500).json({ error: "Error al eliminar el usuario." });
  }
});

module.exports = Router;