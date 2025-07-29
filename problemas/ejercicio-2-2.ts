import { BusquedaBinaria } from '../clases/BusquedaBinaria'

// Una aplicación ofrece descuentos con códigos numéricos ordenados. Solo se aplican si el código es válido.

// Dado un arreglo de códigos ordenados descuentos[], verifica si un código ingresado por el usuario es válido usando búsqueda binaria.

const descuentos: number[] = [
  2314, 2561, 3124, 3456, 4567, 5678, 6789, 7890, 8901, 9012
]
const codigoBuscado: number = 4567

console.log(BusquedaBinaria.buscar(descuentos, codigoBuscado))
