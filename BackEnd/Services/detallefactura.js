const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class detallefactura {
    constructor() {}

    async Agregar(detalle) {
        try {
            return await prisma.detalleFactura.create({
                data: {
                    id_curso: parseInt(detalle.id_curso),
                    id_encabezadofactura: parseInt(detalle.id_encabezadofactura),
                    precio_unitario: parseFloat(detalle.precio_unitario),
                }
            });
        } catch (error) {
            console.error(`Error al agregar el detalle de factura: ${error.message}`);
            throw new Error("No se pudo insertar el detalle de factura.");
        }
    }

    async Actualizar(id, datos) {
        try {
            return await prisma.detalleFactura.update({
                where: { id: parseInt(id) },
                data: datos,
            });
        } catch (error) {
            console.error(`Error al actualizar el detalle de factura ${id}: ${error.message}`);
            throw new Error("No se pudo actualizar el detalle de factura.");
        }
    }

    async Borrar(id) {
        try {
            return await prisma.detalleFactura.delete({
                where: { id: parseInt(id) },
            });
        } catch (error) {
            console.error(`Error al borrar el detalle de factura ${id}: ${error.message}`);
            throw new Error("No se pudo borrar el detalle de factura.");
        }
    }

    async Listar(id = null) {
        try {
            if (id === null) {
                return await prisma.detalleFactura.findMany({
                    include: {
                        Curso: true,
                        EncabezadoFactura: true
                    }
                });
            } else {
                return await prisma.detalleFactura.findUnique({
                    where: { id: parseInt(id) },
                    include: {
                        Curso: true,
                        EncabezadoFactura: true
                    }
                });
            }
        } catch (error) {
            console.error(`Error al listar los detalles de factura: ${error.message}`);
            throw new Error("No se pudieron listar los detalles de factura.");
        }
    }
}

module.exports = detallefactura;