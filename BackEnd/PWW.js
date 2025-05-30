const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class PWW {

    constructor() {
        this.usuario = "ALLUsersCRUsuario";
        
      }
    
      getUsuario() { return this.usuario; }
     
    
  
}
  module.exports = PWW;