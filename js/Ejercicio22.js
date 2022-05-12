$(() => {
	$('#boton').on('click', () => {
		const num1 = Number($('#num1').val())
		const num2 = Number($('#num2').val())

		mostrarPares(num1, num2)
	})
})

function mostrarPares(num1, num2) {
	const parrafo = $('#resultado')
	parrafo.html('')

	if (num1 === '' || num2 === '') {
		parrafo.html('Complete todos los campos')
		return
	}

	const menor = num1 <= num2 ? num1 : num2
	const mayor = num2 >= num1 ? num2 : num1

	for (let i = menor; i <= mayor; i++) {
		parrafo.append(`${i % 2 === 0 ? i : ''} `)
	}
}
