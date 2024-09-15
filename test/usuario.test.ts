import request from 'supertest';
import { UsuarioGetDeleteRequestDTO } from '../src/dto/usuarioDto/usuarioGetDeleteRequestDTO';
import { UsuarioPostPutRequestDTO } from '../src/dto/usuarioDto/usuarioPostPutRequestDTO';
import { prisma } from '../src/database/prismaClient';
import { UsuarioPesoPatchRequestDTO } from '../src/dto/usuarioDto/usuarioPesoPatchRequestDTO';
import { app, server } from '../src/server';
import { UsuarioLoginPostRequestDTO } from '../src/dto/usuarioDto/usuarioLoginPostRequestDTO';

let token:any;

beforeEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "usuarios" RESTART IDENTITY CASCADE;`;
	const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
		'login': 'fabio',
		'peso': 72,
		'senha': '123456'
	};
	await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);
	const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
		'login': 'fabio',
		'senha': '123456'
	}
	const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);
	token = response.body;
});

afterEach(async () => {
	await prisma.$executeRaw`TRUNCATE TABLE "usuarios" RESTART IDENTITY CASCADE;`;
});

afterAll(async () => {
	prisma.$disconnect();
	server.close()
});

describe('GET /usuarios/pesquisar', () => {
	it('Pesquisa um usuário que não existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 100
		}
		const response = await request(app).get('/usuarios/pesquisar').send(usuarioGetDeleteRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Pesquisa um usuário que existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 1
		}
		const response = await request(app).get('/usuarios/pesquisar').send(usuarioGetDeleteRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('login', 'fabio');
	});
	it('Pesquisa um usuário com id negativo', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': -1
		}
		const response = await request(app).get('/usuarios/pesquisar').send(usuarioGetDeleteRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});

describe('PATCH /usuarios/atualizar/peso', () => {
	it('Atualiza o peso de um usuário que não existe', async () => {
		const usuarioPesoPatchRequestDTO: UsuarioPesoPatchRequestDTO = {
			'id': 100,
			'peso': 100
		}
		const response = await request(app).patch('/usuarios/atualizar/peso').send(usuarioPesoPatchRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Atualiza o peso de um usuário que existe', async () => {
		const usuarioPesoPatchRequestDTO: UsuarioPesoPatchRequestDTO = {
			'id': 1,
			'peso': 100
		}
		const response = await request(app).patch('/usuarios/atualizar/peso').send(usuarioPesoPatchRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('peso', 100);
	});
	it('Atualiza o peso de um usuário com numero negativo', async () => {
		const usuarioPesoPatchRequestDTO: UsuarioPesoPatchRequestDTO = {
			'id': 1,
			'peso': -100
		}
		const response = await request(app).patch('/usuarios/atualizar/peso').send(usuarioPesoPatchRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Peso deve ser um número positivo' });
	});
	it('Atualiza o peso de um usuário com id negativo', async () => {
		const usuarioPesoPatchRequestDTO: UsuarioPesoPatchRequestDTO = {
			'id': -1,
			'peso': 100
		}
		const response = await request(app).patch('/usuarios/atualizar/peso').send(usuarioPesoPatchRequestDTO).set('Authorization', `${token}`);
		
		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});

describe('POST /usuarios/adicionar', () => {
	it('Adiciona uma usuário', async () => {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
			'login': 'vinicius',
			'peso': 50,
			'senha': "123456"
		}
		const response = await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body).toHaveProperty('login', 'vinicius');
	});
	it('Adiciona uma usuário com login já existente', async () => {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
			'login': 'fabio',
			'peso': 72,
			'senha': '123456'
		};
		const response = await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Login já existe!' });
	});
	it('Adiciona uma usuário com login vazio', async () => {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
			'login': '',
			'peso': 72,
			'senha': '123456'
		};
		const response = await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Login é obrigatório' });
	});
	it('Adiciona uma usuário com peso negativo', async () => {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
			'login': 'fabio',
			'peso': -1,
			'senha': '123456'
		};
		const response = await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Peso deve ser um número positivo' });
	});
	it('Adiciona uma usuário com senha com tamanho invalido', async () => {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
			'login': 'fabio',
			'peso': -1,
			'senha': '12345'
		};
		const response = await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Senha deve ter pelo menos 6 caracteres' });
	});
});

describe('DELETE /usuarios/remover', () => {
	it('Remove um usuário que não existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 100
		}
		const response = await request(app).delete('/usuarios/remover').send(usuarioGetDeleteRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Remove um usuário que existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 1
		}
		const response = await request(app).delete('/usuarios/remover').send(usuarioGetDeleteRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
	it('Remove um usuário com id negativo', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': -1
		}
		const response = await request(app).delete('/usuarios/remover').send(usuarioGetDeleteRequestDTO).set('Authorization', `${token}`);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({ message: 'Id deve ser um número positivo' });
	});
});