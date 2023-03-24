import bd from "../infra/bd.js";

const salaModel = {
modelar: (obj) => {
return {
numero_da_sala: obj.numero_da_sala,
andar: obj.andar
};
},
};

export default salaModel;