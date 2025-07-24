const cadastrarUsuariosUseCase = require("./cadastro");

describe("Cadastrar usuario UseCase", function () {
  const usuariosRepository = {
    cadastrar: jest.fn(),
  };
  test("Deve poder cadastrar usuario", async function () {
    const usuarioDTO = {
      nome_completo: "nome_valido",
      CPF: "CPF_valido",
      telefone: "telefone_valido",
      email: "email_valido",
    };

    const sut = cadastrarUsuariosUseCase({ usuariosRepository });
    const output = await sut(usuarioDTO);

    expect(output).toBeUndefined();
    expect(usuariosRepository.cadastrar).toHaveBeenCalledWith(usuarioDTO);
    expect(usuariosRepository.cadastrar).toHaveBeenCalledTimes(1);
  });
  test("Deve retornar um throw AppeError se o usuariosRepository não for fornecido", function () {
    expect(() => cadastrarUsuariosUseCase({})).toThrow(
      "usuariosRepository não fornecido"
    );
  });
});
