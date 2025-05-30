const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class cuatrimestre {
    constructor() {}
  
    async Agregar(cuatrimestre) {
      let resultado;



      
      try {
        resultado = await prisma.cuatrimestre.create({
          data: {
            numero_cuatrimestre: cuatrimestre.numero_cuatrimestre,
            anno: cuatrimestre.anno
          }
        });
      } catch (error) {
        console.error(`No se pudo insertar el cuatrimestre ${cuatrimestre.numero_cuatrimestre} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Actualizar(id, datos) {
      let resultado;
      try {
        resultado = await prisma.cuatrimestre.update({
          where: { id: parseInt(id) },
          data: datos,
        });
      } catch (error) {
        console.error(`No se pudo actualizar el cuatrimestre ${id} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Borrar(id) {
      let resultado;
      try {
        resultado = await prisma.cuatrimestre.delete({
          where: {
            id: parseInt(id),
          },
        });
      } catch (error) {
        console.error(`No se pudo borrar el cuatrimestre ${id} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Listar(id) {
      let cuatrimestres;
      try {
        if (id === undefined) {
          cuatrimestres = await prisma.cuatrimestre.findMany();
        } else {
          cuatrimestres = await prisma.cuatrimestre.findUnique({
            where: {
              id: parseInt(id),
            }
          });
        }
      } catch (error) {
        console.error(`No se pudieron listar los cuatrimestres debido al error: ${error}`);
      }
      console.log(cuatrimestres);
      return cuatrimestres;
    }
  }
  
  module.exports = cuatrimestre;
