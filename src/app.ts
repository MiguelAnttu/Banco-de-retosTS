//Reto 1
interface UsuarioAPI {
  id: number;
  username: string;
  email: string;
  rol: 'admin' | 'editor' | 'alumno';
  token?: string; 
}


const usuarioValido: UsuarioAPI = {
  id: 1,
  username: 'miguel',
  email: 'miguel@gmail.com',
  rol: 'editor',
  
};


const usuarioInvalido: UsuarioAPI = {
  id: 2,
  username: 'invitado01',
  email: 'invitado@gmail.com',
  rol: 'alumno', 
};


