import database from "./bd.js";

const popSala = () => {

  database.connection.connect();

  database.connection.query(
    "CREATE TABLE `hospital`.`sala` (numero_da_sala int not null, andar int not null);",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela sala criada com sucesso");
      }
    }
  );

  database.connection.query(
    "INSERT INTO sala (numero_da_sala, andar) VALUES (1, 1), (2, 1), (3, 2);",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela sala populada com sucesso");
      }
    }
  );

  database.connection.end();
}

export default popSala;
