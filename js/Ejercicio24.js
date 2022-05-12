$(() => {
	$('#boton').on('click', () => {
		const base = Number($('#base').val())
		const altura = Number($('#altura').val())

		$('#resultado').html(calcularTriangulo(base, altura))
	})

	function calcularTriangulo(base, altura) {
		return base < 0 || altura < 0 ? -1 : (base * altura) / 2
	}
})
