$('#btndata').click(Mostrar)

function Mostrar() {
	const nom = $('#nom').val()

	const mail = $('#gmail').val()

	const pwd = $('#pwd').val()
	const fNac = Number($('#fNac').val())
	const mayorEdad = 2022 - fNac >= 18 ? 'Mayor de edad' : 'Menor de edad'

	$('#data').append(`${nom} ${mail} ${pwd} ${fNac} ${mayorEdad} <br>`)
}

$('#btndata2').click(() => {$('#data').html("")})
