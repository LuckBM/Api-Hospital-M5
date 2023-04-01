import database from "../infra/bd.js";

class medicoDAO {
  static async TodosOsMedicos() {
    const dadosbd = await database.query("SELECT * FROM medico");
    if (dadosbd.length === 0) {
      return {
        dados: "Não há medicos cadastrados",
        status: 404,
      };
    } else {
      return {
        dados: { medicosCadastrados: dadosbd },
        status: 200,
      };
    }
  }

  static async mostrarUm(crm) {
    const dadosbd = await database.query(
      'SELECT * FROM medico WHERE crm_medico = ?',
      [crm]
    );
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }

  static async inserir(obj) {
    try {
      await database.query(
        "INSERT INTO medico (crm_medico, nome, sala, email) VALUES (?,?,?,?)",
        Object.values(obj)
      );
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "medico inserido com sucesso na tabela medico" },
      status: 201,
    };
  }

  static async atualizar(crm) {
    try {
      await database.query(
        "UPDATE medico SET crm_medico = ?, nome = ?, sala = ?, email = ?",
        [obj.crm_medico, obj.nome, obj.sala, obj.email, crm]
      );
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: "medico atualizado com sucesso",
      status: 200,
    };
  }

  static async excluir(crm) {
    try {
      await database.query(
        "DELETE FROM medico WHERE crm_medico = ?",
        [crm]
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
        msg: "medico excluída com sucesso da tabela medico",
      },
      status: 200,
    };
  }
}

export default medicoDAO;