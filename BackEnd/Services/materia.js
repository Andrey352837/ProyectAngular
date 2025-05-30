const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class materia {
    constructor() {}
  
    async Agregar(materia) {
      let resultado;
      try {
        resultado = await prisma.materia.create({
          data: {
            nombre: materia.nombre,
            codigo: materia.codigo,
            id_plan_estudios: parseInt(materia.id_plan_estudios)
          }
        });
      } catch (error) {
        console.error(`No se pudo insertar la materia ${materia.nombre} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Actualizar(id, datos) {
      let resultado;
      try {
        resultado = await prisma.materia.update({
          where: { id: parseInt(id) },
          data: datos,
        });
      } catch (error) {
        console.error(`No se pudo actualizar la materia ${id} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Borrar(id) {
      let resultado;
      try {
        resultado = await prisma.materia.delete({
          where: {
            id: parseInt(id),
          },
        });
      } catch (error) {
        console.error(`No se pudo borrar la materia ${id} debido al error: ${error}`);
      }
      return resultado;
    }
    async Listar(id) {
      let materias;
      try {
        if (id === undefined) {
          materias = await prisma.materia.findMany({
            include: {
              PlanEstudios: true // Incluir información del plan de estudio
            }
          });
        } else {
          materias = await prisma.materia.findUnique({
            where: {
              id: parseInt(id),
            },
            include: {
              PlanEstudios: true // Incluir información del plan de estudio
            }
          });
        }
      } catch (error) {
        console.error(`No se pudieron listar las materias debido al error: ${error}`);
      }
      console.log(materias);
      return materias;
    }
  }
  
  module.exports = materia;
