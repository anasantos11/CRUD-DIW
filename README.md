# crud-diw
Repósitório criado para controle de versões da página web que será criada para trabalho da faculdade:
By: Ana Paula dos Santos

Trabalho DIW – CRUD via AJAX
Instruções
Neste trabalho o objetivo é montar um cadastro completo – CRUD (CREATE | REPORT | UPDATE | DELETE) - utilizando para isto:
 como backend, o ambiente do RESTIFY DB fornecido pelo professor e
 como o front-end, uma aplicação baseada no framework Bootstrap.
Alguns requisitos básicos devem ser atendidos para este trabalho. São eles:
 Escolha a tabela que será utilizada no seu trabalho. Ela deverá ter pelo menos 5 campos, sendo uma chave primária
(código) e, pelo menos, um campo de data.
 A aplicação será realizada integralmente por meio do AJAX acessando os web services do RESTIFY DB. Estas
funcionalidades vão utilizar a tabela indicada pelo grupo de vocês.
Utilize o código disponibilizado no SGA (insert.html) como base. O arquivo já traz a requisição AJAX fixa para a inserção de um
registro no banco de dados. Consulte a documentação do RESTIFY DB (http://restifydb.com/api/documentation/#write) que irá
mostrar como se fazer o CRUD e outras opções .
As telas não precisam ficar, em termos visuais, exatamente como está mostrado abaixo, porém deverá entregar as mesmas
funcionalidades. O menu e os botões devem funcionar da seguinte maneira:
 Menu Listar: o clicar, exibe os registros existentes na tabela (código do laboratório que vocês já fizeram).
 Menu Inserir: ao clicar, mostra o formulário com dados em branco para inserir um novo registro. No formulário de inserção, ao clicar
no botão Confirmar do formulário, o código deverá inserir o registro na tabela.
 Link Alterar (tela de listagem): Ao clicar, deverá exibir um formulário com os dados da linha onde o link se encontra permitindo ao
usuário alterar os dados. Ao clicar no botão confirmar, o código deverá alterar os dados na tabela.
 Link Excluir (tela de listagem): Ao clicar, deverá exibir uma mensagem confirmando a exclusão. Caso o botão confirmar seja
presscionado, deverá excluir o registro na tabela.
