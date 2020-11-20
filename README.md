# Documentação Mapa Eleições
  Projeto Mapa Eleições
  
  ![alt text](https://github.com/thimico/mapa-eleicoes/blob/master/client/public/preview.png?raw=true)
  
### Ferramentas ###
  
  * node >= 12.18.3 (test&development)
  
  * npm >= 6.14.6 (test&development)
  
  * mongodb >= 2.6.10 (test&development)
  
  * docker >= 17.03.2-ce (development&production)
  
  * redis >= 3.0.6 (development&production)
  
  * nginx >= 1.0.15 (production)
  
# Organização dos Diretórios:
Pasta Principal é / , lá contém o arquivo (app.ts) que é o arquivo para executar as chamadas de metódos já com o teste de conexão. 

-> Diretório models

  contém o arquivo partido.ts que teem Definições de Schema utilizando *mongoose

# Funcionamento dos Arquivos
# Caminho : /routes/routes.ts

O arquivo routes tem acesso as funções getAll, count, insert, get, update, delete  dos controllers. 

O código é compativel para testagem via Postman

# Caminho : /mongo.ts
imports de fora do projeto:

"mongoose" -> para conectar com o banco

# Caminho: controllers/base.ts
Funções 

insert()-> Nessa função vc cria um cadastro da classe ao qual extende

getAll() -> Busca todos genericamente bastando extender a clase BaseCtrl

count() -> Quantidade de registros

get() -> Pesquisa um registro por seu ID

update()-> Atualiza um registro

delete() -> deleta o registro por seu nome 

# Executando com docker-compose
Vá até a pasta do projeto e rode o seguinte comando

`docker-compose up`

# Executando manualmente

Requistos : Necessário criar um server/banco de dados mongo

Vá até a pasta do projeto e rode o seguinte comando

`npm i`

`npm run dev`

# Testes

para rodar os testes bastar ir até a basta tests e rodar o seguinte comando
`npm run test`

Também pode ser feito testes atráves da ferramenta postman:

# Especificações
node version 14.13.1 linux/amd64

Mongo

Sistema Operacional: linux Ubuntu 18.4

# Importações
`npm i`

# Contatos
thg.mnzs@gmail.com
