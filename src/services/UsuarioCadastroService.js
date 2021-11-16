const db = require("../db");

class UsuarioCadastroService {
  constructor(service) {
    this.service = service;
  }
  alunos = async () => await this.service("alunos");
  criarAluno = async (data) =>
    await (await this.service("alunos").insert(data).returning("*"))[0];

  atualizarAluno = async (id, data) =>
    await (
      await this.service("alunos").where({ id }).update(data).returning("*")
    )[0];

  deletarAluno = async (filtro) => {
    if (filtro.id) {
      return await this.service("alunos").where({ id: filtro.id }).delete();
    }
    if (filtro.email) {
      return await this.service("alunos")
        .where({ email: filtro.email })
        .delete();
    }

    throw new Error("Favor passar um parametro!!!");
  };
}

module.exports = new UsuarioCadastroService(db);
