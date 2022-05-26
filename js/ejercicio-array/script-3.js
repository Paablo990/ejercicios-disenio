$(function () {
  const NUMEROS = []

  $('#btnAgregar').on('click', function () {
    const numero = Number($('#numero').val())
    NUMEROS.push(numero)
  })

  $('#btnMostrar').on('click', function () {
    const parrafo = $('#resultado')

    let cantidadNumerosM100 = 0
    let pares = 0
    let sumaImparesM100 = 0
    let promedio = 0

    for (let i = 0; i < NUMEROS.length; i++) {
      numeroActual = NUMEROS[i]

      if (numeroActual > 100) {
        cantidadNumerosM100++
        if (numeroActual % 2 !== 0) sumaImparesM100 += numeroActual
      }
      if (numeroActual % 2 === 0) pares++
      promedio += numeroActual
    }
    promedio = promedio / NUMEROS.length

    parrafo.html(
      `Cantidad numeros mayores a 100: ${cantidadNumerosM100} <br>
      Cantdad de numeros pares: ${pares} <br>
      Suma de los numeros impares mayores a 100: ${sumaImparesM100} <br>
      Promedio: ${promedio}`
    )
  })
})
