import { Usuario } from '../../model/usuarioModel';
import { updatePesoUsuarioRepository,findUsuarioByLoginRepository } from '../../repositories/usuarioRepository';


export const atualizarPesoUsuarioService = async (login: string, peso: number): Promise<Usuario | null> => {
const result = await findUsuarioByLoginRepository(login);
if (result !== null) {
	return await updatePesoUsuarioRepository(login, peso);
} else {
	return null;
}
};
