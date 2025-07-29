import { BusquedaSecuencial } from '../clases/BusquedaSecuencial'

// Una tienda tiene una lista de productos agotados. Se desea saber si un producto aún no está disponible.

// Dado un arreglo de cadenas agotados[], busca un producto ingresado por el usuario y devuelve su posición (o mensaje).

const agotados = [
  'Laptop',
  'Tablet',
  'Smartphone',
  'Auriculares',
  'Reloj inteligente'
]
const productoBuscado = 'Tablet'

console.log(BusquedaSecuencial.buscar(agotados, productoBuscado))
