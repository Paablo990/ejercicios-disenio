$(() => {
	$('#btndata').on('click', () => {
		const parrafo = $('#resultado')
		const divisor = Number($('#divisor').val())

		let dividendo = Number($('#dividendo').val())

		$('#divisor').removeClass('input--error')

		if (divisor == 0) {
			$('#divisor').addClass('input--error')
			$('#divisor').focus()
			parrafo.html(`No se puede dividir entre 0`)
			return
		}

		if (divisor > dividendo) {
			$('#divisor').addClass('input--error')
			$('#divisor').focus()
			parrafo.html(
				`No se puede hacer la resta entera si el divisor es mayor que el dividendo`
			)
			return
		}

		let resultado = 0

		while (dividendo >= divisor) {
			dividendo -= divisor
			resultado++
		}

		parrafo.html(`Resultado: ${resultado} <br> Resto: ${dividendo}`)
	})
})
