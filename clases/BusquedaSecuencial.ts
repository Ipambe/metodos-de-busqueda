export class BusquedaSecuencial {
  /**
   * Realiza una búsqueda secuencial en un arreglo de elementos.
   * @param elementos - Arreglo de elementos a buscar.
   * @param elementoBuscado - Elemento que se desea encontrar en el arreglo.
   * @returns El índice del elemento encontrado, o -1 si no se encuentra.
   */
  public static buscar<T>(elementos: T[], elementoBuscado: T): number {
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i] === elementoBuscado) {
        return i
      }
    }
    return -1
  }
}
