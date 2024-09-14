## Documentação da API

A documentação da API pode ser encontrada no [SwaggerHub](https://app.swaggerhub.com/apis-docs/FABIOVINICIUSFS1/montesuadieta/1.0.0).

## Instalação

- npm install
## Configuração inicial
- Crie um arquivo **.env** com as seguinte variáveis: 
  - **DATABASE_URL = "postgresql://postgres:senha123@localhost:5432/devdb?schema=public"**
  - **SECRET** = suaChaveSecretaSuperSegura123!@#
  - **PORT** = 3000
- Crie um arquivo **.env.test.local** com as seguinte variáveis: 
  - **DATABASE_URL = postgresql://postgres:senha123@localhost:5432/testedb?schema=public**
  - **SECRET** = suaChaveSecretaSuperSegura123!@#
  - **PORT** = 3001

## Rodando a aplicação
- npm run migrate:dev
- npm run dev

## Rodando os teste
- npm run migrate:teste
- npm run teste
