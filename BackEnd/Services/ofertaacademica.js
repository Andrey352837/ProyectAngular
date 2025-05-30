const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ofertaacademica {
    constructor() {}
  
    async Agregar(oferta) {
      let resultado;
      try {
        resultado = await prisma.ofertaAcademica.create({
          data: {
            id_curso: parseInt(oferta.id_curso),
            id_carrera: parseInt(oferta.id_carrera),
            id_cuatrimestre: parseInt(oferta.id_cuatrimestre),
            anno: oferta.anno
          }
        });
      } catch (error) {
        console.error(`No se pudo insertar la oferta académica debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Actualizar(id, datos) {
      let resultado;

      
      try {
        resultado = await prisma.ofertaAcademica.update({
          where: { id: parseInt(id) },
          data: datos,
        });
      } catch (error) {
        console.error(`No se pudo actualizar la oferta académica ${id} debido al error: ${error}`);
      }
      return resultado;
    }
  
    async Borrar(id) {
      let resultado;
      try {
        resultado = await prisma.ofertaAcademica.delete({
          where: {
            id: parseInt(id),
          },
        });
      } catch (error) {
        console.error(`No se pudo borrar la oferta académica ${id} debido al error: ${error}`);
      }
      return resultado;
    }
    async Listar(id) {
      let ofertas;
      try {
          if (id === undefined) {
              ofertas = await prisma.ofertaAcademica.findMany({
                  include: {
                    Curso: {
                      include: {
                          Materia: true ,
                          Usuario: true
                          // Trae la información de la materia dentro del curso
                      }
                  },        
                      Carrera: true,       // Trae toda la información de la carrera
                      Cuatrimestre: true   // Trae toda la información del cuatrimestre
                  }
              });
          } else {
              ofertas = await prisma.ofertaAcademica.findUnique({
                  where: {
                      id: parseInt(id),
                  },
                  include: {
                    Curso: {
                      include: {
                          Materia: true,
                          Usuario: true // Trae la información de la materia dentro del curso
                      }
                  },
                      Carrera: true,
                      Cuatrimestre: true
                  }
              });
          }
      } catch (error) {
          console.error(`No se pudieron listar las ofertas académicas debido al error: ${error}`);
      }
      console.log(ofertas);
      return ofertas;
  }

  async listarOfertaCarrera(id){
    let ofertas;
    try {
      
ofertas = await prisma.ofertaAcademica.findMany({
  where: {
    id_carrera: parseInt(id)
  },
  include: {
    Curso: {
      include: {
        Materia: true,
        Usuario: true
      }
    },
  }
});
    } catch (error) {
      console.error(`No se pudieron listar las ofertas académicas debido al error: ${error}`);
  }
  console.log(ofertas);
  return ofertas;
}
  }

  
  
  module.exports = ofertaacademica;
