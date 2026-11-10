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




interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
}


const misTareas: Tarea[] = [
  { id: 1, titulo: 'Estudiar interfaces', completada: false },
  { id: 2, titulo: 'Hacer el reto de TypeScript', completada: false },
  { id: 3, titulo: 'Repasar RxJS', completada: true },
];


function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {
  return lista.map((tarea) =>
    tarea.id === idBuscar ? { ...tarea, completada: true } : tarea
  );
}


const nuevaLista = completarTarea(misTareas, 1);

console.log(misTareas[0]!.completada);  
console.log(nuevaLista[0]!.completada);
console.log(misTareas === nuevaLista); 
