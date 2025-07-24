## Pontos da Reunião

> Uma biblioteca pequena deseja controlar a entrada e saida de livros.Queremos cadastrar o usuário que irá pegar o livro emprestado, cadastrar os livros da nossa biblioteca e poder emprestar os livros para qualquer usuário, alem de buscar os registros de empréstimo.

## Dados

- Usuario: [nome_completo,CPF,telefone,endereco,email]
- Livro: [nome,quantidade,autor,genero,ISBN]
- Emprestimo: [usuario_id,livro_id,data_retorno,data_devolucao,data_saida]

## UseCases (Regras de negócio)

[] Cadastrar um novo usuário
[] - CPF ou email devem ser únicos

[] Buscar um cadastro ou usuário por CPF
[] - Retornar um usuário ou vazio

[] Cadastrar um novo livro
[] - ISBN deve ser único

[] Buscar um livro por nome ou ISBN
[] - Retornar os livros ou vazio

[] Emprestar um livro ao usuario
[] - A data de retorno não pode ser menor que a data de saída
[] - Um usuário não pode estar com mais de um livro com o mesmo ISBN ao mesmo tempo
[] - Um usuário pode estar com mais de um livro com ISBN diferentes ao mesmo tempo
[] - Ao cadastrar um empréstimo, será enviado um email automaticamente informando o nome do livro, nome do usuário, CPF, a data de sáida e
e a data de retorno

[] Devolver o livro emprestado
[] - Caso o usuário tenha atrasado, sera gerado uma multa fixa de R$10,00

[] Mostar todos os empréstimo pendentes, com o nome do livro, nome do usuário, CPF, data de saída e data de retorno. Ordenamos pela data de retorno mais antiga

## Estruturas

##UsuariosRepository
[] cadastrar: ({nome_completo,CPF,telefone,endereco,email}) => Promise<void>
