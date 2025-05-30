
const rotuterCargo = require('./cargo.js');
const rotuterUsuario = require('./usuario.js');
const rotuterCarrera = require('./carrera.js');
const rotuterPlanEstudios = require('./planestudios.js');
const rotuterCuatrimestre = require('./cuatrimestre.js');
const rotuterMateria = require('./materia.js');
const rotuterCurso = require('./curso.js');
const rotuterOfertaAcademica = require('./ofertaacademica.js');
const rotuterHistoricoAcademico = require('./historicoacademico.js');
const rotuterEncabezadoFactura = require('./encabezadofactura.js');
const rotuterDetalleFactura = require('./detallefactura.js');

const rotuterMatricula = require('./matricula.js');

const rotuterauditoria = require('./auditoria.js');
function routerAPI(app) {
  app.use('/cargo', rotuterCargo);
  app.use('/usuario', rotuterUsuario);
  app.use('/carrera', rotuterCarrera);
  app.use('/planestudios', rotuterPlanEstudios);
  app.use('/cuatrimestre', rotuterCuatrimestre);
  app.use('/materia', rotuterMateria);
  app.use('/curso', rotuterCurso);
  app.use('/ofertaacademica', rotuterOfertaAcademica);
  app.use('/historicoacademico', rotuterHistoricoAcademico);
  app.use('/encabezadofactura', rotuterEncabezadoFactura);
  app.use('/detallefactura', rotuterDetalleFactura);
  app.use('/auditoria', rotuterauditoria);
  
  app.use('/matricula', rotuterMatricula);
}

module.exports = routerAPI;
