import express from "express"
import usuariocontroller from "./controllers/usuariosController.js";
import salaController from "./controllers/salaController.js";

import cors from 'cors';

const app = express()

app.use(express.json())

app.use (cors())

app.get("/testedeploy",(req,res) => {
  res.status(200).send ({msg: "Api sendo acessada remotamente"});
});


usuariocontroller(app);
salaController(app);

export default app;