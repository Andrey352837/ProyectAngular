const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class carrera {
    constructor() {}
  
    async Agregar(carrera) {
      let resultado;
      try {
        resultado = await prisma.carrera.create({
          data: {
            nombre: carrera.nombre,
            especialidad: carrera.especialidad
          }
        });
      } catch (error) {
        console.error(`No se pudo insertar la carrera ${carrera.nombre} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Actualizar(id, datos) {
      let resultado;
      try {
        resultado = await prisma.carrera.update({
          where: { id: parseInt(id) },
          data: datos,
        });
      } catch (error) {
        console.error(`No se pudo actualizar la carrera ${id} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Borrar(id) {
      let resultado;
      try {
        resultado = await prisma.carrera.delete({
          where: {
            id: parseInt(id),
          },
        });
      } catch (error) {
        console.error(`No se pudo borrar la carrera ${id} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Listar(id) {
      let carreras;
      try {
        if (id === undefined) {
          carreras = await prisma.carrera.findMany();
        } else {
          carreras = await prisma.carrera.findUnique({
            where: {
              id: parseInt(id),
            }
          });
        }
      } catch (error) {
        console.error(`No se pudieron listar las carreras debido al error: ${error}`);
      }
      console.log(carreras);
      return carreras;
    }
  }
  
  module.exports = carrera ;
  