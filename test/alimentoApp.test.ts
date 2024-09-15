import request from 'supertest';
import { prisma } from '../src/database/prismaClient';
import { AlimentoAppPostPutDto } from '../src/dto/alimentoAppDto/alimentoAppPostPutDto';
import { AlimentoAppGetDeleteDto } from '../src/dto/alimentoAppDto/alimentoAppGetDeleteDto';
import { app, server } from '../src/server';
import { AdminPostPutRequestDTO } from '../src/dto/adminDto/AdminPostPutRequestDTO';
import { AdminLoginPostRequestDTO } from '../src/dto/adminDto/AdminLoginPosRequestDTO';

let token: any;

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "alimentosTabelaApp" RESTART IDENTITY;`;
	await prisma.$executeRaw`TRUNCATE TABLE "admin" RESTART IDENTITY CASCADE;`;
	const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
		"porcao": 100,
		"nomeAlimentoApp": "arroz",
		"caloria": 123.5348925,
		"proteina": 2.58825,
		"carboidrato": 25.80975,
		"saturados": 0.3,
		"monoinsaturados": 0.4,
		"poliinsaturados": 0.3,
		"gordutaTotal": 1
	};
	await prisma.alimentosTabelaApp.create({
		data: {
			...alimentoAppPostPutDto
		}
	});
	const adminPostPutRequestDTO: AdminPostPutRequestDTO = {
		'login': 'admin',
		'senha': '123456'
	};
	await request(app).post('/admin/adicionar').send(adminPostPutRequestDTO);
	const adminLoginPostRequestDTO: AdminLoginPostRequestDTO = {
		'login': 'admin',
		'senha': '123456'
	}
	const response = await request(app).post('/auth/login/admin').send(adminLoginPostRequestDTO);
	token = response.body;
});

afterEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "alimentosTabelaApp" RESTART IDENTITY;`;
	await prisma.$executeRaw`TRUNCATE TABLE "admin" RESTART IDENTITY CASCADE;`;
});

afterAll(async () => {
	prisma.$disconnect();
	server.close()
});

describe('GET /alimentosApp/pesquisar', () => {
	it('Pesquisa um alimento do App que não existe', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': 100
		}
		const response = await request(app).get('/alimentosApp/pesquisar').send(alimentoAppGetDeleteDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Alimento não existe!' });
	});
	it('Pesquisa um alimento do App que existe', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': 1
		}
		const response = await request(app).get('/alimentosApp/pesquisar').send(alimentoAppGetDeleteDto);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('nomeAlimentoApp', 'arroz');
	});
	it('Pesquisa um alimento do App com id negativo', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': -1
		}
		const response = await request(app).get('/alimentosApp/pesquisar').send(alimentoAppGetDeleteDto);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});


describe('POST /alimentosApp/adicionar', () => {
	it('Adiciona uma alimento do App', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "teste",
			"caloria": 12,
			"proteina": 6,
			"carboidrato": 80,
			"saturados": 3,
			"monoinsaturados": 4,
			"poliinsaturados": 3,
			"gordutaTotal": 10
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body).toHaveProperty('nomeAlimentoApp', 'teste');
	});
	it('Adiciona uma alimento do App com nome vazio', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "",
			"caloria": 12,
			"proteina": 6,
			"carboidrato": 80,
			"saturados": 3,
			"monoinsaturados": 4,
			"poliinsaturados": 3,
			"gordutaTotal": 10
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Nome do alimento é obrigatório' });
	});
	it('Adiciona uma alimento do App com porçao negativo', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": -100,
			"nomeAlimentoApp": "teste",
			"caloria": 12,
			"proteina": 6,
			"carboidrato": 80,
			"saturados": 3,
			"monoinsaturados": 4,
			"poliinsaturados": 3,
			"gordutaTotal": 10
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Porção deve ser um número positivo' });
	});
	it('Adiciona uma alimento do App com caloria negativo', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "teste",
			"caloria": -12,
			"proteina": 6,
			"carboidrato": 80,
			"saturados": 3,
			"monoinsaturados": 4,
			"poliinsaturados": 3,
			"gordutaTotal": 10
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Caloria deve ser um número positivo' });
	});
	it('Adiciona uma alimento do App com proteina negativo', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "teste",
			"caloria": 12,
			"proteina": -6,
			"carboidrato": 80,
			"saturados": 3,
			"monoinsaturados": 4,
			"poliinsaturados": 3,
			"gordutaTotal": 10
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Proteína deve ser um número positivo' });
	});
	it('Adiciona uma alimento do App com carboidrato negativo', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "teste",
			"caloria": 12,
			"proteina": 6,
			"carboidrato": -80,
			"saturados": 3,
			"monoinsaturados": 4,
			"poliinsaturados": 3,
			"gordutaTotal": 10
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Carboidrato deve ser um número positivo' });
	});
	it('Adiciona uma alimento do App com saturados negativo', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "teste",
			"caloria": 12,
			"proteina": 6,
			"carboidrato": 80,
			"saturados": -3,
			"monoinsaturados": 4,
			"poliinsaturados": 3,
			"gordutaTotal": 10
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Saturados deve ser um número positivo' });
	});
	it('Adiciona uma alimento do App com monoinsaturados negativo', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "teste",
			"caloria": 12,
			"proteina": 6,
			"carboidrato": 80,
			"saturados": 3,
			"monoinsaturados": -4,
			"poliinsaturados": 3,
			"gordutaTotal": 10
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Monoinsaturados deve ser um número positivo' });
	});
	it('Adiciona uma alimento do App com poliinsaturados negativo', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "teste",
			"caloria": 12,
			"proteina": 6,
			"carboidrato": 80,
			"saturados": 3,
			"monoinsaturados": 4,
			"poliinsaturados": -3,
			"gordutaTotal": 10
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Poliinsaturados deve ser um número positivo' });
	});
	it('Adiciona uma alimento do App com Gordura total negativo', async () => {
		const alimentoAppPostPutDto: AlimentoAppPostPutDto = {
			"porcao": 100,
			"nomeAlimentoApp": "teste",
			"caloria": 12,
			"proteina": 6,
			"carboidrato": 80,
			"saturados": 3,
			"monoinsaturados": 4,
			"poliinsaturados": 3,
			"gordutaTotal": -10
		}
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Gordura total deve ser um número positivo' });
	});
});

describe('DELETE /alimentosApp/remover', () => {
	it('Remove um alimento do App que não existe', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': 100
		}
		const response = await request(app).delete('/alimentosApp/remover').send(alimentoAppGetDeleteDto).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Alimento não existe!' });
	});
	it('Remove um alimento do App que existe', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': 1
		}
		const response = await request(app).delete('/alimentosApp/remover').send(alimentoAppGetDeleteDto).set('Authorization', `${token}`);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
	it('Remove um alimento do App com id negativo', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': -1
		}
		const response = await request(app).delete('/alimentosApp/remover').send(alimentoAppGetDeleteDto);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});