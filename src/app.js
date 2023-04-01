import express from "express"
import salaController from "./controllers/salaController.js";
import medicoController from "./controllers/medicoController.js";
import pacienteController from "./controllers/pacienteController.js";

import cors from 'cors';

const app = express()

app.use(express.json())

app.use (cors())

app.get("/testedeploy",(req,res) => {
  res.status(200).send ({msg: "Api sendo acessada remotamente"});
});

pacienteController(app);
medicoController(app);
salaController(app);

export default app;