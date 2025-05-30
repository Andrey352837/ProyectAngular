const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class planestudios {
    constructor() {}
  
    async Agregar(planEstudios) {
      let resultado;
      try {
        resultado = await prisma.planEstudios.create({
          data: {
            nombre: planEstudios.nombre,
            anno: planEstudios.anno,
            id_carrera: parseInt(planEstudios.id_carrera)
          }
        });
      } catch (error) {
        console.error(`No se pudo insertar el plan de estudios ${planEstudios.nombre} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Actualizar(id, datos) {
      let resultado;
      try {
        resultado = await prisma.planEstudios.update({
          where: { id: parseInt(id) },
          data: datos,
        });
      } catch (error) {
        console.error(`No se pudo actualizar el plan de estudios ${id} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Borrar(id) {
      let resultado;
      try {
        resultado = await prisma.planEstudios.delete({
          where: {
            id: parseInt(id),
          },
        });
      } catch (error) {
        console.error(`No se pudo borrar el plan de estudios ${id} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Listar(id) {
      let planesEstudio;
      try {
          if (id === undefined) {
              planesEstudio = await prisma.planEstudios.findMany({
                  include: {
                      Carrera: true // Incluye toda la información de la materia
                  }
              });
          } else {
              planesEstudio = await prisma.planEstudios.findUnique({
                  where: {
                      id: parseInt(id),
                  },
                  include: {
                      Carrera: true // Incluye la materia para un solo plan de estudios
                  }
              });
          }
      } catch (error) {
          console.error(`No se pudieron listar los planes de estudio debido al error: ${error}`);
      }
      console.log(planesEstudio);
      return planesEstudio;
  }
}
  
  module.exports = planestudios;