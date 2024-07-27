import { Usuario } from '../../model/usuarioModel';
import { addUsuarioRepository,findUsuarioByLoginRepository } from '../../repositories/usuarioRepository';


export const adicionarUsuarioService = async (usuario: Usuario): Promise<Usuario | null> => {
const result = await findUsuarioByLoginRepository(usuario.login);
if (result === null) {
	return await addUsuarioRepository(usuario);
} else {
	return null;
}
};
