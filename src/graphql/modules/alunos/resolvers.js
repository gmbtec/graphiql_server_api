module.exports = {
  Query: {
    alunos: async (obj, args, context, info) =>
      await context.usuarioCadastroService.alunos(),
  },
  Mutation: {
    criarAluno: async (_, { data }, { usuarioCadastroService }) =>
      await usuarioCadastroService.criarAluno(data),
    atualizarAluno: async (_, { id, data }, { usuarioCadastroService }) =>
      await usuarioCadastroService.atualizarAluno(id, data),
    deletarAluno: async (_, { filtro }, { usuarioCadastroService }) =>
      await usuarioCadastroService.deletarAluno(filtro),
  },
};
