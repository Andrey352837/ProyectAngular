const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class auditoria {
    constructor() {}

    async Agregar(auditoria) {
      let resultado;
      try {
        resultado = await prisma.auditoria.create({
          data: {
            id_usuario: parseInt(auditoria.id_usuario),
            accion: auditoria.accion,
            descripcion: auditoria.descripcion,
          }
        });
      } catch (error) {
        console.error(`No se pudo insertar la auditoría debido al error: ${error}`);
      }
      return resultado;
    }

    async Listar(id) {
      let auditorias;
      try {
        if (id === undefined) {
          auditorias = await prisma.auditoria.findMany({
            include: {
              Usuario: {
                include: {
                  Cargo: true, // Incluye la información del cargo del usuario
                },
              },// Incluye la información del usuario asociado
            },
          });
        } else {
          auditorias = await prisma.auditoria.findUnique({
            where: {
              id: parseInt(id),
            },
            include: {
              Usuario: {
                include: {
                  Cargo: true, // Incluye la información del cargo del usuario
                },
              },// Incluye la información del usuario asociado
            },
          });
        }
      } catch (error) {
        console.error(`No se pudieron listar las auditorías debido al error: ${error}`);
      }
      console.log(auditorias);
      return auditorias;
    }
  }

module.exports = auditoria;