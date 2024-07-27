import { Usuario } from '../../model/usuarioModel';
import { addUsuarioRepository,findUsuarioByLoginRepository } from '../../repositories/usuarioRepository';


export const adicionarUsuarioService = (usuario: Usuario): Usuario | undefined => {
const result = findUsuarioByLoginRepository(usuario.login);
if (!result) {
	return addUsuarioRepository(usuario);
} else {
	return undefined;
}
};
