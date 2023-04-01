import bd from "../infra/bd.js";

const medicoModel = {
modelar: (obj) => {
return {

crm_medico: obj.crm_medico,
nome: obj.nome,
sala: obj.sala,
email: obj.email

};
},
};

export default medicoModel;

