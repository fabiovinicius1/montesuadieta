## Documentação da API

A documentação da API pode ser encontrada no [SwaggerHub](https://app.swaggerhub.com/apis-docs/FABIOVINICIUSFS1/montesuadieta/1.0.0).

## Instalação

1. Clone o repositório

   ```bash
   git clone https://github.com/fabiovinicius1/montesuadieta.git
   ```

2. Navegue para o repositorio do projeto

   ```bash
   cd montesuadieta/
   ```

3. Instale as dependências

   ```bash
   npm install
   ```

## Configuração inicial

4. Crie um arquivo **.env** com as seguinte variáveis:

	```bash
	DATABASE_URL = "postgresql://postgres:senha123@localhost:5432/devdb?schema=public"
	SECRET = suaChaveSecretaSuperSegura123!@#
	PORT = 3000
	```

5. Crie um arquivo **.env.test.local** com as seguinte variáveis:

	```bash
	DATABASE_URL = postgresql://postgres:senha123@localhost:5432/testedb?schema=public
	SECRET = suaChaveSecretaSuperSegura123!@#
	PORT = 3001
	```

6. Rode o comando docker compose para subir o serviço do postgres

	```bash
	docker compose up -d
	```

## Rodando as migrations do prisma

7. Para o ambiente de desenvolvimento
	```bash
	npm run migrate:dev
	```
8. Para o ambiente de teste
	```bash
	npm run migrate:teste
	```
## Teste 

9. Rodando os teste

	```bash
	npm run migrate:teste
	```
## Aplicaçao

10. Rodando a aplicação
	```bash
	npm run dev
	```
