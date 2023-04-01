import bd from "../infra/bd.js";

const pacienteModel = {
modelar: (obj) => {
return {

cpf_paciente: obj.cpf_paciente,
nome: obj.nome,
sexo: obj.sexo,
data_de_nacimento: obj.data_de_nacimento,
sala: obj.sala

};
},
};

export default pacienteModel;

