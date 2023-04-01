import database from "../infra/bd.js";

class pacienteDAO {
  static async TodosOsPacientes() {
    const dadosbd = await database.query("SELECT * FROM paciente");
    if (dadosbd.length === 0) {
      return {
        dados: "Não há pacientes cadastrados",
        status: 404,
      };
    } else {
      return {
        dados: { pacientesCadastrados: dadosbd },
        status: 200,
      };
    }
  }

  static async mostrarUm(cpf) {
    const dadosbd = await database.query(
      'SELECT * FROM paciente WHERE cpf_paciente = ?',
      [cpf]
    );
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }

  static async inserir(obj) {
    console.log(obj)
    try {
      await database.query(
        "INSERT INTO paciente (cpf_paciente, nome, sexo, data_de_nascimento, sala) VALUES (?,?,?,?,?)",
        Object.values(obj)
      );
    } catch (error) {
      console.log(error)
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Paciente inserido com sucesso na tabela sala" },
      status: 201,
    };
  }

  static async atualizar(cpf) {
    try {
      await database.query(
        "UPDATE paciente SET cpf_paciente = ?, nome = ?, sexo = ?, data_de_nascimento = ?, sala = ? WHERE cpf_paciente = ?",
        [cpf]
      );
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: "Paciente atualizado com sucesso",
      status: 200,
    };
  }

  static async excluir(cpf) {
    try {
      await database.query(
        "DELETE FROM paciente WHERE cpf_paciente = ?",
        [cpf]
      );
    } catch (error) {
      console.log(error)
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: {
        msg: "Paciente excluída com sucesso da tabela sala",
      },
      status: 200,
    };
  }
}

export default pacienteDAO;