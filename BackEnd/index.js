const express = require("express");
const routerAPI = require('./Routes/index.js');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
routerAPI(app);

app.listen(80, () => {
  console.log(`http://localhost:80`);
  console.log('Presione CTRL-C para deternerlo\n');
  console.log("Servidor iniciado en el puerto 80");
});
