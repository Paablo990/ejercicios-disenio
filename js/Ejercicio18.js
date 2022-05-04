$(() => {
	$('#btndata').on('click', () => {
		// $('#alto').removeClass('input--error')
		// $('#ancho').removeClass('input--error')

		const parrafo = $('#resultado')
		const alto = Number($('#alto').val())
		const ancho = Number($('#ancho').val())

		parrafo.html('')

		if (alto <= 0) {
			// $('#alto').addClass('input--error')
			$('#alto').focus()
			parrafo.html('El alto no puede ser menor a 0')
			return
		}

		if (ancho <= 0) {
			// $('#ancho').addClass('input--error')
			$('#ancho').focus()
			parrafo.html('El ancho no puede ser menor a 0')
			return
		}

		const fila = '#'.repeat(ancho)

		for (let i = 0; i < alto; i++) {
			parrafo.append(fila + '<br>')
		}
	})
})
