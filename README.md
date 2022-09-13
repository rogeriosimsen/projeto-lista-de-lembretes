<h1>Lista de Lembretes</h1>

<h3>Bem vindos ao projeto Lista de Lembretes!</h3>

=> <a href="https://meus-lembretes.netlify.app/" target="blank">CLIQUE AQUI PARA ACESSAR O PROJETO</a>

É um software bastante simples, no qual, tem como objetivo, salvar algo que você precise lembrar. <br>
O uso é bastante simples, você apenas precisa informar algo que precise lembrar e a data em que deseja ser lembrado.<br>

<h4>O software funciona da seguinte forma:</h4>
Tenho um banco de dados com duas tabelas: tabela 'data' e tabela 'lembrete'. Criei um relacionamento entre as duas no qual, associa um lembrete a uma data.<br><br>

Ao clicar no botão salvar, por meio de uma função js, os inputs são validados para não serem salvos com dados vazios no banco de dados. 
Se estiverem vazios, um alerta é exibido, se não, continuamos com o fluxo.<br><br>

Antes de fato o lembrete ser salvo, faço uma pesquisa no banco de dados pela data que foi informada, se já conter uma data igual a que foi informada, ele apenas associa 
o lembrete a data já salva no banco, se não ele cria uma data nova e associa o lembrete à ela.<br>
Assim que o lembrete é salvo, meu endpoit listar é acionado e já renderiza os dados atualizados em tela. Os lembretes são listados por data, em ordem cronológica.<br><br>

Por fim, ao clicar no botão excluir do lado de cada lembrete, o lembrete é excluído. Caso a data do lembrete excluído, não possua nenhum lembrete associado a ela, 
essa data é excluída do banco de dados também.<br><br>


<h4>A construção do software foi feito em duas partes:</h4>
FRONT-END: <br>
apenas uma página (index.html), que possui um arquivo para estilos CSS (styles.css) e um arquivo JavaScript (script.js), onde está armazenado todos os scripts.
Nas minhas funções do JavaScript, por meio de comentários, tentei explicar ao máximo cada etapa que faço, para ter o resultado que preciso. 
Pode ser que você ache um pouco confuso num primeiro momento, mas garanto que conseguirá entender.<br>
O front-end está hospedado no servidor da empresa Netlify, que possui planos para hospedagem gratuitos, mas com algumas limitações.<br><br>

BACK-END: <br>
em arquitetura RESTFul, foi desenvolvido uma API, para a manipulação (salvar, listar e excluir) dos lembretes.<br>
No meu back-end, também tentei explicar ao máximo cada linha do meu código, através de comentários. Pode ser que tenha ficado um código um pouco "sujo", mas minha
ideia com esses comentários, era tentar mostrar o máximo possível da minha lógica na hora de resolver os probleminhas.
O mesmo, se encontra hospedado na plataforma do Heroku, junto com seu banco de dados PostgreSQL.<br><br>

=><a href="https://project-my-notes.herokuapp.com/mynotes/listar" target="_blank">Clique aqui para acessar o link da API.</a><br>
=><a href="https://github.com/rogeriosimsen/lembretes" target="_blank">Clique aqui para acessar o link do repositório no GitHub da API.</a><br><br>

Basicamente, meu projeto é esse. Poderia ter deixado com um layout muito mais bonito, mas por questões de tempo, tive que fazer algo um pouco mais simples. Espero que gostem e 
que de alguma forma, possa servir de exemplo. <br><br>

Apesar de parecer simples, foi um projetinho bem desafiador hein! Achei que seria muuuuuito mais fácil de ser feito, mas quando comecei a de fato codifica-lo, me deparei 
com diversos problemas no qual, não fazia nem ideia de uma possível solução. <br>
Maaaaaaaas com muita pesquisa, persistencia e café hehehe, acredito que eu tenha desenvolvido todas as funcionalidades que foram propostas no enunciado.<br><br>

Esse texto já ficou bem grande, então fico por aqui. Uma abraço a todos e até o próximo projeto.


