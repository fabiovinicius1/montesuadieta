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
import { RefeicaoPatchNomeDto } from '../src/dto/refeicaoDto/refeicaoPatchNomeDto';
import { RefeicaoAlimentoPostDto } from '../src/dto/refeicaoDto/refeicaoAlimentoPostDto';
import { RefeicaoAlimentoDeleteDto } from '../src/dto/refeicaoDto/RefeicaoAlimentoDeleteDto';
import { UsuarioLoginPostRequestDTO } from '../src/dto/usuarioDto/usuarioLoginPostRequestDTO';
import Jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
beforeAll(async () => {
	const usuarioPostPutRequestDTO1: UsuarioPostPutRequestDTO = {
		'login': 'fabio',
		'peso': 72,
		'senha': '123'
	};
	const usuarioPostPutRequestDTO2: UsuarioPostPutRequestDTO = {
		'login': 'fernandes',
		'peso': 88,
		'senha': '789'
	};
	const refeicaoPostPutDto1: RefeicaoPostPutDto = {
		'nomeRefeicao': 'Almoço',
		'usuarioId': 2
	};
	const refeicaoPostPutDto2: RefeicaoPostPutDto = {
		'nomeRefeicao': 'Lanche',
		'usuarioId': 2
	};
	await prisma.usuarios.create({
		data: {
			...usuarioPostPutRequestDTO1
		}
	});
	await prisma.usuarios.create({
		data: {
			...usuarioPostPutRequestDTO2
		}
	});
	await prisma.refeicaoUsuario.create({
		data:{
			...refeicaoPostPutDto1
		}
	});
	await prisma.refeicaoUsuario.create({
		data:{
			...refeicaoPostPutDto2
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
	};
	const alimentoAppPostPutDt2: AlimentoAppPostPutDto = {
		"porcao": 100,
		"nomeAlimentoApp": "feijao",
		"caloria": 120,
		"proteina": 8,
		"carboidrato": 60,
		"saturados": 3,
		"monoinsaturados": 4,
		"poliinsaturados": 3,
		"gordutaTotal": 10
	};
	await prisma.alimentosTabelaApp.create({
		data: {
			...alimentoAppPostPutDto
		}
	});
	await prisma.alimentosTabelaApp.create({
		data: {
			...alimentoAppPostPutDt2
		}
	});
});

afterAll(async () => {
	await prisma.usuarios.deleteMany();
	await prisma.alimentosTabelaApp.deleteMany();
	await prisma.refeicaoUsuario.deleteMany();
});

describe('GET /usuarios/pesquisar', () => {
	it('Pesquisa um usuário que não existe', async () => {
		const usuarioGetDeleteRequestDTO: UsuarioGetDeleteRequestDTO = {
			'id': 100
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
			'id': 100,
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

describe('GET /refeicoes/pesquisar', () => {
	it('Pesquisa uma refeição que não existe', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': 100
		}
		const response = await request(app).get('/refeicoes/pesquisar').send(refeicaoGetDeleteDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Pesquisa uma refeição que existe', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': 1
		}
		const response = await request(app).get('/refeicoes/pesquisar').send(refeicaoGetDeleteDto);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('nomeRefeicao', 'Almoço');
	});
});

describe('PATCH /refeicoes/atualizar/contato', () => {
	it('Atualiza o nome de uma refeição que não existe', async () => {
		const RefeicaoPatchNomeDto: RefeicaoPatchNomeDto = {
			'id': 100,
			'nomeRefeicao': 'Jantar'
		}
		const response = await request(app).patch('/refeicoes/atualizar/nome').send(RefeicaoPatchNomeDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Atualiza o nome de uma refeição que existe', async () => {
		const RefeicaoPatchNomeDto: RefeicaoPatchNomeDto = {
			'id': 1,
			'nomeRefeicao': 'Jantar'
		}
		const response = await request(app).patch('/refeicoes/atualizar/nome').send(RefeicaoPatchNomeDto);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('nomeRefeicao', 'Jantar');
	});
});

describe('POST /refeicoes/adicionar', () => {
	it('Adiciona uma refeição em um usuário que não existe', async () => {
		const refeicaoPostPutDto: RefeicaoPostPutDto = {
			'nomeRefeicao': 'Café da manha',
			'usuarioId': 100,
		}
		const response = await request(app).post('/refeicoes/adicionar').send(refeicaoPostPutDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Usuário não existe!' });
	});
	it('Adiciona uma refeição em um usuário que existe', async () => {
		const refeicaoPostPutDto: RefeicaoPostPutDto = {
			'nomeRefeicao': 'Café da manha',
			'usuarioId': 2,
		}
		const response = await request(app).post('/refeicoes/adicionar').send(refeicaoPostPutDto);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('nomeRefeicao', 'Café da manha');
	});
});

describe('DELETE /refeicoes/remover', () => {
	it('Remove uma refeição que não existe', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': 100
		}
		const response = await request(app).delete('/refeicoes/remover').send(refeicaoGetDeleteDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Remove uma refeição que existe', async () => {
		const refeicaoGetDeleteDto: RefeicaoGetDeleteDto = {
			'id': 1
		}
		const response = await request(app).delete('/refeicoes/remover').send(refeicaoGetDeleteDto);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
});

describe('POST /refeicoes/adicionar/alimentoApp', () => {
	it('Adiciona uma alimento na refeição que não existe', async () => {
		const refeicaoAlimentoPostDto: RefeicaoAlimentoPostDto = {
			'idAlimento': 1,
			'idRefeicao': 100,
		}
		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(refeicaoAlimentoPostDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Refeição não existe!' });
	});
	it('Adiciona um alimento que não existe na refeição que existe', async () => {
		const refeicaoAlimentoPostDto: RefeicaoAlimentoPostDto = {
			'idAlimento': 100,
			'idRefeicao': 2,
		}
		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(refeicaoAlimentoPostDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Alimento não existe!' });
	});
	it('Adiciona uma alimento na refeição que existe', async () => {
		const refeicaoAlimentoPostDto: RefeicaoAlimentoPostDto = {
			'idAlimento': 2,
			'idRefeicao': 2,
		}
		const response = await request(app).post('/refeicoes/adicionar/alimentoApp').send(refeicaoAlimentoPostDto);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('refeicaoId', 2);
	});
});

describe('DELETE /refeicoes/remover/alimentoApp', () => {
	it('Remove um alimento que não existe na refeição do usuário', async () => {
		const refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto = {
			'id': 100
		}
		const response = await request(app).delete('/refeicoes/remover/alimentoApp').send(refeicaoAlimentoDeleteDto);

		expect(response.status).toBe(404);
		expect(response.body).toEqual({ message: 'Alimento não existe na refeição!' });
	});
	it('Remove um alimento que existe na refeição do usuário', async () => {
		const refeicaoAlimentoDeleteDto: RefeicaoAlimentoDeleteDto = {
			'id': 1
		}
		const response = await request(app).delete('/refeicoes/remover/alimentoApp').send(refeicaoAlimentoDeleteDto);

		expect(response.status).toBe(204);
		expect(response.body).toEqual({});
	});
});

describe('POST /auth/login/usuario', () => {
	it('Login realizado com sucesso', async () => {
		const usuarioPostPutRequestDTO: UsuarioPostPutRequestDTO = {
			'login': 'siqueira',
			'peso': 50,
			'senha': "909"
		}
		await request(app).post('/usuarios/adicionar').send(usuarioPostPutRequestDTO);

		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
			'login': 'siqueira',
			'senha': "909"
		}
		const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);

		expect(response.status).toBe(201);
		const decoded = Jwt.verify(response.body, process.env.SECRET!);
        expect(decoded).toEqual('siqueira');
	});
	it('Login passado incorreto', async () => {
		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
			'login': 'siqueir',
			'senha': '909'
		}
		const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);
		expect(response.status).toBe(401);
		expect(response.body).toEqual({ message: 'Login ou senha incorretos!' });
	});
	it('Senha passado incorreto', async () => {
		const usuarioLoginPostRequestDTO: UsuarioLoginPostRequestDTO = {
			'login': 'siqueira',
			'senha': '90'
		}
		const response = await request(app).post('/auth/login/usuario').send(usuarioLoginPostRequestDTO);

		expect(response.status).toBe(401);
		expect(response.body).toEqual({ message: 'Login ou senha incorretos!' });
	});
});