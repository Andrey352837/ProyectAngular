const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class cargo {

  constructor() {

  };
  async Agregar(nombre) {
    let resultado;
    try {
      resultado = await prisma.cargo.create({
        data: {
          nombre: nombre
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar el cargo ${nombre} debido al error: ${error}`);
    }
    return resultado;
  }

  async Actualizar(id, cargo) {
    let resultado;
    try {
      resultado = await prisma.cargo.update({
        where: { id: parseInt(id) },
        data: { nombre: cargo },
      });
    } catch (error) {
      console.error(`No se pudo actualizar el cargo ${id} debido al error: ${error}`);
    }
    return resultado;
  }

  async Borrar(id) {
    let resultado;
    try {
      resultado = await prisma.cargo.delete({
        where: {
          id: parseInt(id),
        },
      });
    } catch (error) {
      console.error(`No se pudo borrar el cargo ${id} debido al error: ${error}`);
    }
    return resultado;
  }

  async Listar(id) {
    let Cargos;
    try {
      if (id === undefined) {
        Cargos = await prisma.cargo.findMany();
      } else {
        Cargos = await prisma.cargo.findMany({
          where: {
            id: parseInt(id),
          },
        });
      }
    } catch (error) {
      
      console.error(`No se pudieron listar los cargos debido al error: ${error}`);
    }
    console.log(Cargos);
    return Cargos;
  }
}

module.exports = cargo;
