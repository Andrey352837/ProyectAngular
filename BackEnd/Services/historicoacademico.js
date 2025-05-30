const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class historicoacademico {
    constructor() {}

    async Agregar(historico) {
      let resultado;
      try {
        resultado = await prisma.historicoAcademico.create({
          data: {
            id_usuario: parseInt(historico.id_usuario),
            id_curso: parseInt(historico.id_curso),
            nota: parseFloat(historico.nota)
          }
        });
      } catch (error) {
        console.error(`No se pudo insertar el histórico académico debido al error: ${error}`);
      }
      return resultado;
    }

    async Actualizar(id, datos) {
      let resultado;
      try {
        resultado = await prisma.historicoAcademico.update({
          where: { id: parseInt(id) },
          data: datos,
        });
      } catch (error) {
        console.error(`No se pudo actualizar el histórico académico ${id} debido al error: ${error}`);
      }
      return resultado;
    }

    async Borrar(id) {
      let resultado;
      try {
        resultado = await prisma.historicoAcademico.delete({
          where: {
            id: parseInt(id),
          },
        });
      } catch (error) {
        console.error(`No se pudo borrar el histórico académico ${id} debido al error: ${error}`);
      }
      return resultado;
    }

    async Listar(id) {
      let historicos;
      try {
        if (id === undefined) {
          historicos = await prisma.historicoAcademico.findMany({
            include: {
              Curso : {
                include: {
                  Materia: true
                }
              }
            }
          });
        } else {
          historicos = await prisma.historicoAcademico.findUnique({
            where: {
              id: parseInt(id),
            },
            include: {
              Curso : {
                include: {
                  Materia: true
                }
              }
            }
          });
        }
      } catch (error) {
        console.error(`No se pudieron listar los históricos académicos debido al error: ${error}`);
      }
      console.log(historicos);
      return historicos;
    }
    async historicoEst(id){
      let ofertas;
      try {
        
  ofertas = await prisma.historicoAcademico.findMany({
    where: {
      id_usuario: parseInt(id)
    },
    include: {
      Curso : {
        include: {
          Materia: true
        }
      }
    }
  });
      } catch (error) {
        console.error(`No se pudieron listar las ofertas académicas debido al error: ${error}`);
    }
    console.log(ofertas);
    return ofertas;
  }
}

module.exports = historicoacademico;