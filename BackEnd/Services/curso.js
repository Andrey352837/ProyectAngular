const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class curso {
    constructor() {}
  
    async Agregar(curso) {
      let resultado;
      try {
        resultado = await prisma.curso.create({
          data: {
            id_materia: parseInt(curso.id_materia),
            id_docente: parseInt(curso.id_docente),
            horario: curso.horario,
            aula: curso.aula,
            id_cuatrimestre: parseInt(curso.id_cuatrimestre)
          }
        });
      } catch (error) {
        console.error(`No se pudo insertar el curso debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Actualizar(id, datos) {
      let resultado;
      try {
        resultado = await prisma.curso.update({
          where: { id: parseInt(id) },
          data: {
            nombre: datos
          },
        });
      } catch (error) {
        console.error(`No se pudo actualizar el curso ${id} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Borrar(id) {
      let resultado;
      try {
        resultado = await prisma.curso.delete({
          where: {
            id: parseInt(id),
          },
        });
      } catch (error) {
        console.error(`No se pudo borrar el curso ${id} debido al error: ${error}`);
      }
      return resultado;
    }

    async Listar(id) {
      let cursos;
      try {
        if (id === undefined) {
          cursos = await prisma.curso.findMany({
            include: {
              Usuario: true, // Trae la información del docente
              Materia: true, // Trae la información de la materia
              Cuatrimestre: true // Trae la información del cuatrimestre
            }
          });
        } else {
          cursos = await prisma.curso.findUnique({
            where: {
              id: parseInt(id),
            },
            include: {
              Usuario: true, 
              Materia: true, 
              Cuatrimestre: true 
            }
          });
        }
      } catch (error) {
        console.error(`No se pudieron listar los cursos debido al error: ${error}`);
      }
      console.log(cursos);
      return cursos;
    }
  }
  module.exports = curso;
