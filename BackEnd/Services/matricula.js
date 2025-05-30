const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class matricula {
  constructor() {}

  async Agregar(matricula) {
    let resultado;
    try {
      resultado = await prisma.matricula.create({
        data: {
          id_usuario: matricula.id_usuario,
          id_curso: matricula.id_curso,
          fecha: matricula.fecha,
          estado: matricula.estado,
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar la matrícula del usuario ${matricula.id_usuario} debido al error: ${error}`);
    }
    return resultado;
  }

  async Actualizar(id, datos) {
    let resultado;
    try {
      resultado = await prisma.matricula.update({
        where: { id: parseInt(id) },
        data: datos,
      });
    } catch (error) {
      console.error(`No se pudo actualizar la matrícula ${id} debido al error: ${error}`);
    }
    return resultado;
  }

  async Borrar(id) {
    let resultado;
    try {
      resultado = await prisma.matricula.delete({
        where: {
          id: parseInt(id),
        },
      });
    } catch (error) {
      console.error(`No se pudo borrar la matrícula ${id} debido al error: ${error}`);
    }
    return resultado;
  }
  async Listar(id) {
    let matriculas;
    try {
      if (id === undefined) {
        matriculas = await prisma.matricula.findMany({
          include: {
            Curso: true,
            Usuario: true,
          },
        });
      } else {
        matriculas = await prisma.matricula.findUnique({
          where: {
            id: parseInt(id),
          },
          include: {
            Curso: true,
            Usuario: true,
          },
        });
      }
    } catch (error) {
      console.error(`No se pudieron listar las matrículas debido al error: ${error}`);
    }
    console.log(matriculas);
    return matriculas;
  }
}

module.exports = matricula;