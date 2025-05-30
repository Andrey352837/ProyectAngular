const express = require("express");
const Router = express.Router();
const ServicioCargo = require('./../services/cargo.js');

const usuario = require('./../services/autentificacion.js');

const cargos = new ServicioCargo();
// Router.get("/", async (solicitud, respuesta) => {

//   let Resultado;
//   //try {
//     //Resultado = await usuario.ValidarToken(solicitud);
//   //} catch (error) {
//     //respuesta.status(401).json(error);
//   //}
// //  if (Resultado.data === "AdministradorNivel1") {
//     const cargo = await listadoDeCargos(solicitud.params.cargoId);
//     respuesta.json(Provincias);
//   //} else {
//     //respuesta.status(401).json();
//   }



 
//   respuesta.json(cargo);
// });


Router.get("/:cargoId?", async (solicitud, respuesta) => {
  try {
    const cargo = await cargos.Listar(solicitud.params.materiaId);
    respuesta.json(cargo);
  } catch (error) {
    respuesta.status(500).json({ error: "Error al obtener los cargos." });
  }
});


Router.post('/', async (solicitud, respuesta) => {
  respuesta.json(cargos.Agregar(solicitud.body.nombre));
  
});

Router.delete('/:cargoId', async (solicitud, respuesta) => {
  respuesta.json(cargos.Borrar(solicitud.params.cargoId));
  
});

Router.put('/:cargoId', async (solicitud, respuesta) => {
  const { cargoId } = solicitud.params;
  const { cargo } = solicitud.body.nombre;
  respuesta.json(cargos.Actualizar(cargoId, solicitud.body.nombre));
  
});

module.exports = Router;