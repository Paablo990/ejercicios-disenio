$(() => {
  let numWhile = 1

  while (numWhile <= 1000) {
    $('#parrafoWhile').append(numWhile++ + ' ')
  }

  let numDoWhile = 1

  do {
    $('#parrafoDoWhile').append(numDoWhile++ + ' ')
  } while (numDoWhile <= 1000)

  for (let numFor = 1; numFor <= 1000; numFor++) {
    $('#parrafoFor').append(numFor + ' ')
  }
})
