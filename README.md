## Documentação da API

A documentação da API pode ser encontrada no [SwaggerHub](https://app.swaggerhub.com/apis-docs/FABIOVINICIUSFS1/montesuadieta/1.0.0).

## Rodando a aplicação via docker apos baixar o repositório git
1. Clonar repositório
   ```bash
 	git clone https://github.com/fabiovinicius1/montesuadieta.git
   ```
2. Navegando para o repositório
   ```bash
 	cd montesuadieta/
   ```
3. Subindo os containers
   ```bash
 	docker compose up -d
   ```
## Rodando a aplicação via docker 

1. Baixar a imagem do PostgreSQL

   ```bash
   docker pull postgres:latest
   ```

2. Rodar o container do PostgreSQL

   ```bash
	docker run -d --name db-montesuadieta -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=senha123 -e POSTGRES_DB=postgres -v pgdata-montesuadieta:/var/lib/postgresql/data -p 5432:5432 postgres:latest
   ```

3. Baixar a imagem do backend

   ```bash
   docker pull fabioviniciusfsiqueira/montesuadieta-backend:latest
   ```
4. Rodar o container do backend

   ```bash
	docker run -d --name api-montesuadieta --link db-montesuadieta:db -e DATABASE_URL="postgresql://postgres:senha123@db:5432/devdb?schema=public" -e SECRET=suaChaveSecretaSuperSegura123 -e PORT=3000 -p 3000:3000 fabioviniciusfsiqueira/montesuadieta-backend:latest sh -c "npm run migrate:dev && npm run dev"
   ```
5. Rodar o container de teste do backend

   ```bash
	docker run --rm --name api-montesuadieta-test --link db-montesuadieta:db -e DATABASE_URL="postgresql://postgres:senha123@db:5432/testedb?schema=public" -e SECRET=suaChaveSecretaSuperSegura123 -e PORT=3001 fabioviniciusfsiqueira/montesuadieta-backend:latest sh -c "npm run migrate:teste && npm run teste"
   ```
