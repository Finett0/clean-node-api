module.exports = function cadastratUsuarioUseCase() {
  return async function ({ nome_completo, CPF, telefone, endereco, email }) {
    await usuarioRepository.cadastrar({
      nome_completo,
      CPF,
      telefone,
      endereco,
      email,
    });
  };
};
