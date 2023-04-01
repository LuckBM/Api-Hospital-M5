import salaModel from "../models/salaModel.js";
import SalaDAO from "../DAO/salaDAO.js";

const salaController = (app) => {
  app.get("/salas", async (req, res) => {
    const resposta = await SalaDAO.TodasSalas();
    res.status(resposta.status).send(resposta.dados);
  });
  app.get("/salas/:numero_da_sala", async (req, res) => {
    const resposta = await SalaDAO.mostrarUm(req.params.numero_da_sala);
    res.status(resposta.status).send(resposta.dados);
  });
  app.post("/salas", async (req, res) => {
    const modelado = salaModel.modelar(req.body)
    const resposta = await SalaDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
  });
  app.delete("/salas/:numero_da_sala", async (req, res) => {
    const resposta = await SalaDAO.excluir(req.params.numero_da_sala)
    res.status(resposta.status).send(resposta.dados)
  });

  app.put("/salas/:numero_da_sala", async (req, res) => {
    const resposta = await SalaDAO.atualizar(req.params.numero_da_sala, req.body)
    res.status(resposta.status).send(resposta.dados)
  });

};

export default salaController;
