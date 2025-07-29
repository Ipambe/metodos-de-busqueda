import { BusquedaBinaria } from '../clases/BusquedaBinaria'

// Un profesor tiene las notas finales ordenadas y desea saber si un estudiante obtuvo una calificación específica.

// Dado un arreglo notas[] ordenado y una notaBuscada, aplica búsqueda binaria.

const notas: number[] = [60, 70, 75, 80, 85, 90, 95]
const notaBuscada: number = 80

console.log(BusquedaBinaria.buscar(notas, notaBuscada))
