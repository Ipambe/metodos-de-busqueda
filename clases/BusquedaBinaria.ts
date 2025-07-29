export class BusquedaBinaria {
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
