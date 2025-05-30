const { PrismaClient } = require("@prisma/client")
const bcrypt = require ('bcrypt');
const crypto = require ('crypto');
const jwt = require('jsonwebtoken');
const PWW = require('../PWW')
const pww = new PWW();
const prisma = new PrismaClient();
class autentificacion {
  constructor() {
  };
  
  async Autenticacion(CorreoElectronico, ClaveSinEncriptar) {
    // bcrypt.hash(ClaveSinEncriptar, 10, function(err, hash) {
    //   console.log(hash); //Clave encriptada
    // });
    let Usuario = await prisma.usuarios.findFirst({
      where: {
        CorreoElectronico: CorreoElectronico,
      },
      select: {
        Rol: true,
        Clave: true
      }
    });
    let Resultado = await bcrypt.compare(ClaveSinEncriptar, Usuario.Clave);
    if (Resultado === true) {
      return jwt.sign({ data: Usuario.Rol }, pww.getUsuario, { expiresIn: '1m' });
    } else {
      return false;
    }
  };
  async ValidarToken(solicitud) {
    let Resultado;
    try {
      Resultado = await jwt.verify(solicitud.headers.authorization.split(" ")[1], pww.getUsuario);
    } catch(err) {
      Resultado = err;
    }
   return Resultado;
  };
}
module.exports =autentificacion;