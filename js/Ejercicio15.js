$('Document').ready(() => {
	$('#btndata').on('click', () => {
		const codigo = $('#codigo').val().toUpperCase()
		let departamento

		switch (codigo) {
			case 'A':
				departamento = 'Canelones'
				break

			case 'B':
				departamento = 'Maldonado'
				break

			case 'C':
				departamento = 'Rocha'
				break

			case 'D':
				departamento = 'Treinta y Tres'
				break

			case 'E':
				departamento = 'Cerro Largo'
				break

			case 'F':
				departamento = 'Rivera'
				break

			case 'G':
				departamento = 'Artigas'
				break

			case 'H':
				departamento = 'Salto'
				break

			case 'I':
				departamento = 'Paysandu'
				break

			case 'J':
				departamento = 'Rio Negro'
				break

			case 'K':
				departamento = 'Soriano'
				break

			case 'L':
				departamento = 'Colonia'
				break

			case 'M':
				departamento = 'San Jose'
				break

			case 'N':
				departamento = 'Flores'
				break

			case 'O':
				departamento = 'Florida'
				break

			case 'P':
				departamento = 'Lavalleja'
				break

			case 'Q':
				departamento = 'Durazno'
				break

			case 'R':
				departamento = 'Tacuarembo'
				break

			case 'S':
				departamento = 'Montevideo'
				break
			default:
				departamento = 'No existe ningun departamento con ese codigo'
				break
		}

		$('#data').html(departamento)
	})
})
