import { Usuario } from '../../model/usuarioModel';
import { updatePesoUsuarioRepository,findUsuarioByLoginRepository } from '../../repositories/usuarioRepository';


export const atualizarPesoUsuarioService = (login: string, peso: number): Usuario | undefined => {
const result = findUsuarioByLoginRepository(login);
if (result) {
	return updatePesoUsuarioRepository(login, peso);
} else {
	return undefined;
}
};
