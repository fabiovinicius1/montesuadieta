import { Usuario } from '../../model/usuarioModel';
import { findUsuarioByLoginRepository} from '../../repositories/usuarioRepository';

export const pesquisarUsuarioService = (login: string): Usuario | undefined => {
  return findUsuarioByLoginRepository(login);  
};