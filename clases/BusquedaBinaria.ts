export class BusquedaBinaria {
  /**
   * Realiza una búsqueda binaria en un arreglo de elementos ordenados.
   * @param elementos - Arreglo de elementos ordenados a buscar.
   * @param elementoBuscado - Elemento que se desea encontrar en el arreglo.
   * @returns El índice del elemento encontrado, o -1 si no se encuentra.
   */
  public static buscar<T>(elementos: T[], elementoBuscado: T): number {
    let inicio = 0
    let fin = elementos.length - 1

    while (inicio <= fin) {
      const medio = Math.floor((inicio + fin) / 2)
      const elementoActual = elementos[medio]

      if (elementoActual === elementoBuscado) return medio
      else if (elementoActual < elementoBuscado) inicio = medio + 1
      else fin = medio - 1
    }

    return -1
  }
}
