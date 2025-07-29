import { BusquedaSecuencial } from '../clases/BusquedaSecuencial'

// Tienes un arreglo con los nombres de los estudiantes inscritos. Un asistente desea saber si un estudiante llegó o no.

// Dado un arreglo nombres[] y un nombreBuscado, usa búsqueda secuencial para determinar si está en la lista.

const nombres = ['Ana', 'Luis', 'Pedro', 'María', 'Juan']
const nombreBuscado = 'María'

console.log(BusquedaSecuencial.buscar(nombres, nombreBuscado))
