import database from "./bd.js";

  database.connection.connect();

  database.connection.query(
    "DROP TABLE `hospital`.`sala`;",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela deletada com sucesso");
      }
    }
  );
  database.connection.query(
    "DROP TABLE `hospital`.`medico`;",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela deletada com sucesso");
      }
    }
  );

  database.connection.query(
    "DROP TABLE `hospital`.`paciente`;",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("tabela deletada com sucesso");
      }
    }
  );
  database.connection.end();