$(() => {
	let fila_total = 0

	$('#btndata').on('click', () => {
		const tabla = $('#tabla')

		tabla.html(
			'<tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Edad</th></tr>'
		)

		const cedula = $('#cedula').val()
		const nombre = $('#nombre').val()
		const apellido = $('#apellido').val()
		const edad = $('#edad').val()

		const filas = $('#filas').val()

		// CREAMOS LA TABLA
		for (let i = 0; i < filas; i++) {
			let data = ''
			for (let j = 0; j < 4; j++) {
				data += `<td id="${i}${j}">???</td>`
			}
			tabla.append(`<tr id="${i}">${data}</tr>`)
		}
	})
})
