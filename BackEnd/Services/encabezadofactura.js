const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class encabezadofactura {
    constructor() {}

    async Agregar(encabezadoFactura) {
      let resultado;
      try {
        resultado = await prisma.encabezadoFactura.create({
          data: {
            id_cuatrimestre: parseInt(encabezadoFactura.id_cuatrimestre),
            id_carrera: parseInt(encabezadoFactura.id_carrera),
            id_usuario: parseInt(encabezadoFactura.id_usuario),
          }
        });
      } catch (error) {
        console.error(`No se pudo insertar el encabezado de factura debido al error: ${error}`);
      }
      return resultado;
    }

    async Listar(id) {
      let encabezadoFacturas;
      try {
        if (id === undefined) {
          encabezadoFacturas = await prisma.encabezadoFactura.findMany({
            include: {
              Carrera: true,
              Cuatrimestre: true,
              Usuario: true,
              DetalleFactura: true
            }
          });
        } else {
          encabezadoFacturas = await prisma.encabezadoFactura.findUnique({
            where: {
              id: parseInt(id),
            },
            include: {
              Carrera: true,
              Cuatrimestre: true,
              Usuario: true,
              DetalleFactura: true
            }
          });
        }
      } catch (error) {
        console.error(`No se pudieron listar los encabezados de factura debido al error: ${error}`);
      }
      console.log(encabezadoFacturas);
      return encabezadoFacturas;
    }

    async Borrar(id) {
      let resultado;
      try {
        resultado = await prisma.encabezadoFactura.delete({
          where: {
            id: parseInt(id),
          },
        });
      } catch (error) {
        console.error(`No se pudo borrar el encabezado de factura ${id} debido al error: ${error}`);
      }
      return resultado;
    }
}

module.exports = encabezadofactura;