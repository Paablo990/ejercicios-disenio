const FRASES = []

$(function () {
  $('#boton').on('click', function () {
    const frase = $('#frase').val()
    FRASES.push(frase)
    const largoFrases = funcionArray(FRASES)
    mostrarArray(largoFrases)
  })
})

function funcionArray(array) {
  const arrayNuevo = []
  for (let i = 0; i < array.length; i++) {
    arrayNuevo.push((array[i] + '').length)
  }
  return arrayNuevo
}

function mostrarArray(array) {
  const parrafo = $('#resultado')
  parrafo.html('')
  for (let i = 0; i < array.length; i++) {
    resultado.append(array[i] + (i != array.length - 1 ? ',' : ''))
  }
}
