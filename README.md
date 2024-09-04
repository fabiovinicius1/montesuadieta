## Documentação da API

A documentação da API pode ser encontrada no [SwaggerHub](https://app.swaggerhub.com/apis-docs/FABIOVINICIUSFS1/montesuadieta/1.0.0).

## Instalação

- npm install
## Configuração inicial
- Crie um arquivo **.env** com as seguinte variáveis: 
  - **DATABASE_URL = file:./dev.db**
  - **SECRET** = <chave_secreta>
- Crie um arquivo **.env.test.local** com as seguinte variáveis: 
  - **DATABASE_URL = file:./teste.db**
  - **SECRET** = <chave_secreta>

## Rodando a aplicação
- npm run migrate:dev
- npm run dev

## Rodando os teste
- npm run migrate:teste
- npm run teste
