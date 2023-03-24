import database from "../infra/bd.js";

class SalaDAO {
  static async TodasSalas() {
    const dadosbd = await database.query("SELECT * FROM sala");
    if (dadosbd.length === 0) {
      return {
        dados: "Não há salas cadastradas",
        status: 404,
      };
    } else {
      return {
        dados: { SalasCadastradas: dadosbd },
        status: 200,
      };
    }
  }

  static async mostrarUm(numero, andar) {
    const dadosbd = await database.query(
      `SELECT * FROM sala WHERE numero_da_sala = ? AND andar = ?`,
      [numero, andar]
    );
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }

  static async inserir(obj) {
    try {
      await database.query(
        "INSERT INTO sala (numero_da_sala, andar) VALUES (?,?)",
        Object.values(obj)
      );
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Sala inserida com sucesso na tabela sala" },
      status: 201,
    };
  }

  static async atualizar(numero, andar, obj) {
    try {
      await database.query(
        "UPDATE sala SET numero_da_sala = ?, andar = ? WHERE numero_da_sala = ? AND andar = ?",
        [obj.numero_da_sala, obj.andar, numero, andar]
      );
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: "Sala atualizada com sucesso",
      status: 200,
    };
  }

  static async excluir(numero, andar) {
    try {
      await database.query(
        "DELETE FROM sala WHERE numero_da_sala = ? AND andar = ?",
        [numero, andar]
      );
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: {
        msg: "Sala excluída com sucesso da tabela sala",
      },
      status: 200,
    };
  }
}

export default SalaDAO;
