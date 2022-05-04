$(() => {
	let numWhile = -100

	while (numWhile <= 10) {
		$('#parrafoWhile').append(numWhile++ + ' ')
	}

	let numDoWhile = -100

	do {
		$('#parrafoDoWhile').append(numDoWhile++ + ' ')
	} while (numDoWhile <= 10)

    for (let numFor = -100; numFor <= 10; numFor++) {
            
        $('#parrafoFor').append(numFor+' ')
        
    }
})
