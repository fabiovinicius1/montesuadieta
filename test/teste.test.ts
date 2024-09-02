import request from 'supertest';
import app from '../src/server';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { UsuarioGetDeleteRequestDTO } from '../src/dto/usuarioDto/usuarioGetDeleteRequestDTO';
import { UsuarioPostPutRequestDTO } from '../src/dto/usuarioDto/usuarioPostPutRequestDTO';
import { PrismaClient } from '@prisma/client';
import { UsuarioPesoPatchRequestDTO } from '../src/dto/usuarioDto/usuarioPesoPatchRequestDTO';
import { AlimentoAppPostPutDto } from '../src/dto/alimentoAppDto/alimentoAppPostPutDto';
import { AlimentoAppGetDeleteDto } from '../src/dto/alimentoAppDto/alimentoAppGetDeleteDto';
import { RefeicaoGetDeleteDto } from '../src/dto/refeicaoDto/refeicaoGetDeleteDto';
import { RefeicaoPostPutDto } from '../src/dto/refeicaoDto/refeicaoPostPutDto';

const prisma = new PrismaClient();
beforeAll(async () => {
	const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
		'login': 'fabio',
		'peso': 72,
		'senha': '123'
	}
	const refeicaoPostPutDto: RefeicaoPostPutDto = {
		'nomeRefeicao': 'Almoço',
		'usuarioId': 1
	}
	await prisma.usuarios.create({
		data: {
			...usuarioPostPutRequestDTO
		}
	});
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
	}
	await prisma.alimentosTabelaApp.create({
		data: {
			...alimentoAppPostPutDto
		}
	});
});

afterAll(async () => {
	await prisma.usuarios.deleteMany();
	await prisma.alimentosTabelaApp.deleteMany();
});

describe('GET /usuarios/pesquisar', () => {
	it('Pesquisa um usuário que não existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 2
		}
		const response = await request(app).get('/usuarios/pesquisar').send(usuarioGetDeleteRequestDTO);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Pesquisa um usuário que existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 1
		}
		const response = await request(app).get('/usuarios/pesquisar').send(usuarioGetDeleteRequestDTO);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('login', 'fabio');
	});
});

describe('PATCH /usuarios/atualizar/contato', () => {
	it('Atualiza o peso de um usuário que não existe', async () => {
		const usuarioPesoPatchRequestDTO: UsuarioPesoPatchRequestDTO = {
			'id': 2,
			'peso': 100
		}
		const response = await request(app).patch('/usuarios/atualizar/peso').send(usuarioPesoPatchRequestDTO);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Atualiza o peso de um usuário que existe', async () => {
		const usuarioPesoPatchRequestDTO: UsuarioPesoPatchRequestDTO = {
			'id': 1,
			'peso': 100
		}
		const response = await request(app).patch('/usuarios/atualizar/peso').send(usuarioPesoPatchRequestDTO);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('peso', 100);
	});
});

describe('POST /usuarios/adicionar', () => {
	it('Adiciona uma usuário', async () => {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
			'login': 'vinicius',
			'peso': 50,
			'senha': "456"
		}
		const response = await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body).toHaveProperty('login', 'vinicius');
	});
	it('Adiciona uma usuário com login já existente', async () => {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
			'login': 'vinicius',
			'peso': 70,
			'senha': "789"
		}
		const response = await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Login já existe!' });
	});
});

describe('DELETE /usuarios/remover', () => {
	it('Remove um usuário que não existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 100
		}
		const response = await request(app).delete('/usuarios/remover').send(usuarioGetDeleteRequestDTO);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Remove um usuário que existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 1
		}
		const response = await request(app).delete('/usuarios/remover').send(usuarioGetDeleteRequestDTO);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
});
describe('GET /alimentosApp/pesquisar', () => {
	it('Pesquisa um alimento do App que não existe', async () => {
		const alimentoAppGetDeleteDto: AlimentoAppGetDeleteDto = {
			'id': 2
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
		const response = await request(app).post('/alimentosApp/adicionar').send(alimentoAppPostPutDto);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body).toHaveProperty('nomeAlimentoApp', 'teste');
	});
});

describe('DELETE /alimentosApp/remover', () => {
	it('Remove um alimento do App que não existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 100
		}
		const response = await request(app).delete('/alimentosApp/remover').send(usuarioGetDeleteRequestDTO);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Alimento não existe!' });
	});
	it('Remove um alimento do App que existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 1
		}
		const response = await request(app).delete('/alimentosApp/remover').send(usuarioGetDeleteRequestDTO);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
});

// describe('GET /refeicoes/pesquisar', () => {
// 	it('Pesquisa uma refeição que não existe', async () => {
// 		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
// 			'id': 2
// 		}
// 		const response = await request(app).get('/refeicoes/pesquisar').send(refeicaoGetDeleteDto);

// 		expect(response.status).toBe(404);
// 		expect(response.body).toEqual({ message: 'Refeição não existe!' });
// 	});
// 	it('Pesquisa uma refeição que existe', async () => {
// 		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
// 			'id': 1
// 		}
// 		const response = await request(app).get('/refeicoes/pesquisar').send(refeicaoGetDeleteDto);

// 		expect(response.status).toBe(200);
// 		expect(response.body).toHaveProperty('nomeRefeicao', 'Almoço');
// 	});
// });

// describe('PATCH /refeicoes/atualizar/contato', () => {
// 	it('Atualiza o peso de um usuário que não existe', async () => {
// 		const usuarioPesoPatchRequestDTO: UsuarioPesoPatchRequestDTO = {
// 			'id': 2,
// 			'peso': 100
// 		}
// 		const response = await request(app).patch('/refeicoes/atualizar/nome').send(usuarioPesoPatchRequestDTO);

// 		expect(response.status).toBe(404);
// 		expect(response.body).toEqual({ message: 'Usuário não existe!' });
// 	});
// 	it('Atualiza o peso de um usuário que existe', async () => {
// 		const usuarioPesoPatchRequestDTO: UsuarioPesoPatchRequestDTO = {
// 			'id': 1,
// 			'peso': 100
// 		}
// 		const response = await request(app).patch('/refeicoes/atualizar/peso').send(usuarioPesoPatchRequestDTO);

// 		expect(response.status).toBe(200);
// 		expect(response.body).toHaveProperty('peso', 100);
// 	});
// });

// describe('POST /refeicoes/adicionar', () => {
// 	it('Adiciona uma usuário', async () => {
// 		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
// 			'login': 'vinicius',
// 			'peso': 50,
// 			'senha': "456"
// 		}
// 		const response = await request(app).post('/refeicoes/adicionar').send(usuarioPostPutRequestDTO);

// 		expect(response.status).toBe(201);
// 		expect(response.body).toHaveProperty('id');
// 		expect(response.body).toHaveProperty('login', 'vinicius');
// 	});
// 	it('Adiciona uma usuário com login já existente', async () => {
// 		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
// 			'login': 'vinicius',
// 			'peso': 70,
// 			'senha': "789"
// 		}
// 		const response = await request(app).post('/refeicoes/adicionar').send(usuarioPostPutRequestDTO);

// 		expect(response.status).toBe(404);
// 		expect(response.body).toEqual({ message: 'Login já existe!' });
// 	});
// });

// describe('DELETE /refeicoes/remover', () => {
// 	it('Remove um usuário que não existe', async () => {
// 		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
// 			'id': 100
// 		}
// 		const response = await request(app).delete('/refeicoes/remover').send(usuarioGetDeleteRequestDTO);

// 		expect(response.status).toBe(404);
// 		expect(response.body).toEqual({ message: 'Usuário não existe!' });
// 	});
// 	it('Remove um usuário que existe', async () => {
// 		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
// 			'id': 1
// 		}
// 		const response = await request(app).delete('/refeicoes/remover').send(usuarioGetDeleteRequestDTO);

// 		expect(response.status).toBe(204);
// 		expect(response.body).toEqual({});
// 	});
// });

// describe('POST /refeicoes/adicionar/alimentoApp', () => {
// 	it('Adiciona uma usuário', async () => {
// 		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
// 			'login': 'vinicius',
// 			'peso': 50,
// 			'senha': "456"
// 		}
// 		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(usuarioPostPutRequestDTO);

// 		expect(response.status).toBe(201);
// 		expect(response.body).toHaveProperty('id');
// 		expect(response.body).toHaveProperty('login', 'vinicius');
// 	});
// 	it('Adiciona uma usuário com login já existente', async () => {
// 		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
// 			'login': 'vinicius',
// 			'peso': 70,
// 			'senha': "789"
// 		}
// 		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(usuarioPostPutRequestDTO);

// 		expect(response.status).toBe(404);
// 		expect(response.body).toEqual({ message: 'Login já existe!' });
// 	});
// });

// describe('DELETE /refeicoes/remover/alimentoApp', () => {
// 	it('Remove um usuário que não existe', async () => {
// 		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
// 			'id': 100
// 		}
// 		const response = await request(app).delete('/refeicoes/remover/alimentoApp').send(usuarioGetDeleteRequestDTO);

// 		expect(response.status).toBe(404);
// 		expect(response.body).toEqual({ message: 'Usuário não existe!' });
// 	});
// 	it('Remove um usuário que existe', async () => {
// 		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
// 			'id': 1
// 		}
// 		const response = await request(app).delete('/refeicoes/remover/alimentoApp').send(usuarioGetDeleteRequestDTO);

// 		expect(response.status).toBe(204);
// 		expect(response.body).toEqual({});
// 	});
// });