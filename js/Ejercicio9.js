$('#btndata').on('click', Mostrar)

function Mostrar() {
	let num = Number($('#Num1').val())
	let tipo = ''

	if (num == 0) {
		tipo = 'neutro'
	} else if (num > 0) {
		tipo = 'positivo'
	} else {
		tipo = 'negativo'
	}

	$('#data').html(`El numero ${num} es ${tipo}`)
}

// let tipo = num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Neutro";
