import database from "./bd.js";

const popMedico = () => {

 

  database.connection.query(
"CREATE TABLE `hospital`. `medico` (crm_medico INT, nome VARCHAR(50), sala INT, email VARCHAR(50));",
  function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela paciente criada com sucesso");
      }
    }
  );

  database.connection.query(
    "INSERT INTO medico (crm_medico, nome, sala, email) VALUES (12345, 'Dr. Fulano', 101, 'fulano@hospital.com'), (67890, 'Dra. Ciclana', 202, 'ciclana@hospital.com'), (24680, 'Dr. Beltrano', 303, 'beltrano@hospital.com');",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela paciente populada com sucesso");
      }
    }
  );


}

export default popMedico;



