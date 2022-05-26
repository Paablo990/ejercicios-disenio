$(function () {
  const NUMEROS = []

  $('#boton').on('click', function () {
    const numero = Number($('#numero').val())
    const parrafo = $('#resultado')

    NUMEROS.push(numero)
    const arrOrdenado = NUMEROS.sort()
    const mayor = arrOrdenado[NUMEROS.length - 1]
    const menor = arrOrdenado[0]

    parrafo.html(`Menor ${menor}, Mayor ${mayor}`)
  })
})

function mostrarArray(array) {
  const parrafo = $('#resultado')
  parrafo.html('')
  for (let i = 0; i < array.length; i++) {
    resultado.append(array[i] + (i != array.length - 1 ? ',' : ''))
  }
}
