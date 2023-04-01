import meidcoModel from "../models/medicoModel.js";
import medicoDAO from "../DAO/medicoDAO.js";

const medicoController = (app) => {
  app.get("/medicos", async (req, res) => {
    const resposta = await medicoDAO.TodosOsMedicos();
    res.status(resposta.status).send(resposta.dados);
  });
  app.get("/medicos/:crm_medico", async (req, res) => {
    const resposta = await medicoDAO.mostrarUm(req.params.crm_medico);
    res.status(resposta.status).send(resposta.dados);
  });
  app.post("/medicos", async (req, res) => {
    const modelado = salaModel.modelar(req.body)
    const resposta = await medicoDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
  });
  app.delete("/medicos/:crm_medico", async (req, res) => {
    const resposta = await medicoDAO.excluir(req.params.numero_da_sala)
    res.status(resposta.status).send(resposta.dados)
  });

  app.put("/medicos/:crm_medico", async (req, res) => {
    const resposta = await medicoDAO.atualizar(req.params.crm_medico, req.body)
    res.status(resposta.status).send(resposta.dados)
  });

};

export default medicoController;
