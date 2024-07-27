import { Usuario } from '../../model/usuarioModel';
import { findUsuarioByLoginRepository} from '../../repositories/usuarioRepository';

export const pesquisarUsuarioService = async(login: string): Promise<Usuario|null> => {
  return await findUsuarioByLoginRepository(login);  
};