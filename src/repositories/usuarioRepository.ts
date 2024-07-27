import { Usuario } from '../model/usuarioModel';

const usuarios: Usuario[] = [
  { id: 1, login: "joao", senha: "123", peso: 72 },
  { id: 2, login: "maria", senha: "3321", peso: 52 },
];

export const findUsuarioByLoginRepository = (login: string): Usuario | undefined => {
  return usuarios.find(usuario => usuario.login === login);
};

export const addUsuarioRepository = (usuario: Usuario): Usuario | undefined => {
 usuarios.push(usuario);
 return findUsuarioByLoginRepository(usuario.login);
};

export const updatePesoUsuarioRepository = (login: string, peso: number): Usuario | undefined => {
  const usuario = findUsuarioByLoginRepository(login);
  if (usuario) {
    usuario.peso = peso;
    return usuario;
  }
  return undefined;
};
