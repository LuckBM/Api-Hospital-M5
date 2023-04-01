import database from "./bd.js";

const popPaciente = () => {

  database.connection.connect();

  database.connection.query(
"CREATE TABLE `hospital`. `paciente` ( cpf_paciente VARCHAR(11) NOT NULL, nome VARCHAR(50) NOT NULL, sexo CHAR(1) NOT NULL, data_de_nascimento VARCHAR(12) , sala VARCHAR(10) NOT NULL);",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela paciente criada com sucesso");
      }
    }
  );

  database.connection.query(
    "INSERT INTO paciente (cpf_paciente, nome, sexo, data_de_nascimento, sala) VALUES ('11122233344', 'João da Silva', 'M', '1990-01-01', '1'), ('22233344455', 'Maria Souza', 'F', '1985-05-15', '2'), ('33344455566', 'Pedro Santos', 'M', '2000-12-31', '3');",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela paciente populada com sucesso");
      }
    }
  );


}

export default popPaciente;



