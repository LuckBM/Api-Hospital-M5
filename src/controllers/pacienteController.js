import salaModel from "../models/pacienteModel.js";
import pacienteDAO from "../DAO/pacienteDAO.js";

const pacienteController = (app) => {
  app.get("/pacientes", async (req, res) => {
    const resposta = await pacienteDAO.TodosOsPacientes();
    res.status(resposta.status).send(resposta.dados);
  });
  app.get("/pacientes/:cpf_paciente", async (req, res) => {
    const resposta = await pacienteDAO.mostrarUm(req.params.cpf_paciente);
    res.status(resposta.status).send(resposta.dados);
  });
  app.post("/pacientes", async (req, res) => {
    const modelado = salaModel.modelar(req.body)
    console.log(modelado)
    const resposta = await pacienteDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
  });
  app.delete("/pacientes/:cpf_paciente", async (req, res) => {
    const resposta = await pacienteDAO.excluir(req.params.numero_da_sala)
    res.status(resposta.status).send(resposta.dados)
  });

  app.put("/pacientes/:cpf_paciente", async (req, res) => {
    const resposta = await pacienteDAO.atualizar(req.params.cpf_paciente, req.body)
    res.status(resposta.status).send(resposta.dados)
  });

};

export default pacienteController;
