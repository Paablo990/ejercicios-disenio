$(() => {
	$('#boton').on('click', () => {
		const peso = Number($('#peso').val())
		const altura = Number($('#altura').val()) / 100

		const imc = calcularIMC(peso, altura)
		const mensaje = obtenerMensaje(imc)

		$('#resultado').html(mensaje)
	})

	function calcularIMC(peso, altura) {
		return peso / (altura * altura)
	}

	function obtenerMensaje(imc) {
		let mensaje = 'bajo peso'

		if (imc >= 18.5 && imc <= 24.9) mensaje = 'Adecuado'
		else if (imc >= 25 && imc <= 29.9) mensaje = 'Sobrepeso'
		else if (imc >= 30 && imc <= 34.9) mensaje = 'Obesidad I'
		else if (imc >= 35 && imc <= 39.9) mensaje = 'Obesidad II'
		else if (imc >= 40) mensaje = 'Obesidad III'

		return mensaje
	}
})
