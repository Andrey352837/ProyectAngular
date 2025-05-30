const { PrismaClient } = require("@prisma/client");
const bcrypt = require('bcrypt');
const crypto = require ('crypto');
const jwt = require('jsonwebtoken');
const PWW = require('../PWW')
const prisma = new PrismaClient();
const instancia = new PWW();
class Usuario {
  constructor() {}

  async Agregar(usuario) {
    let resultado;
    let contrasenna;

    contrasenna = await bcrypt.hash(usuario.contrasena, 10);
    try {
      resultado = await prisma.usuario.create({
        data: {
          cedula: usuario.cedula,
          nombre: usuario.nombre,
          apellidos: usuario.apellidos,
          fecha_nacimiento: usuario.fecha_nacimiento,
          correo: usuario.correo,
          id_carrera: usuario.id_carrera,
          contrasena: contrasenna,
          id_cargo: parseInt(usuario.id_cargo)
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar el usuario ${usuario.nombre} debido al error: ${error}`);
    }
    return resultado;
  }

  async Actualizar(id, datos) {
    let resultado;
    try {
      resultado = await prisma.usuario.update({
        where: { id: parseInt(id) },
        data: datos,
      });
    } catch (error) {
      console.error(`No se pudo actualizar el usuario ${id} debido al error: ${error}`);
    }
    return resultado;
  }

  async Borrar(id) {
    let resultado;
    try {
      resultado = await prisma.usuario.delete({
        where: {
          id: parseInt(id),
        },
      });
    } catch (error) {
      console.error(`No se pudo borrar el usuario ${id} debido al error: ${error}`);
    }
    return resultado;
  }

  async Listar(id) {
    let usuarios;
    try {
      if (id === undefined) {
        usuarios = await prisma.usuario.findMany({
          include: { Cargo: true },
        });
      } else {
        usuarios = await prisma.usuario.findUnique({
          where: {
            id: parseInt(id),
          },
          include: { Cargo: true },
        });
      }
    } catch (error) {
      console.error(`No se pudieron listar los usuarios debido al error: ${error}`);
    }
    console.log(usuarios);
    return usuarios;
  }
}

module.exports = Usuario;