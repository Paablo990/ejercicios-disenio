$(() => {
	$('#boton').on('click', () => {
		const edad = Number($('#edad').val())
		const tope = Number($('#tope').val())

		alert(esMayor(edad, tope))
	})

	function esMayor(edad, tope) {
		return edad > tope
	}
})
