$('#btndata').on('click', Mostrar)

function Mostrar() {
	const num1 = Number($('#num1').val())

	if (num1 % 7 == 0 && num1 % 3 == 0) {
		$('#data').html('El numero es multiplo de 7 y de 3.')
	} else {
		$('#data').html('El numero no es multiplo de 7 y de 3.')
	}
}
