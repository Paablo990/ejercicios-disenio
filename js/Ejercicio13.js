$('#btndata').click(Mostrar)

function Mostrar() {
	let asignatura = $('#nomAsig').val()

	let nombre = ($('#nom').val())

	let oral = Number($('#notaO').val())

	let practico = Number($('#notaP').val())

	let escrito = Number($('#notaE').val())

	let promedio = Math.ceil((oral + practico + escrito) / 3)

	let juicio

	if (promedio >= 8) {
		juicio = '<span style="color:green;">Exonerado</span>'
        $('#exo').append(`${asignatura} ${nombre} Promedio ${promedio} ${juicio} <br>`)
    } else if (promedio <= 7 && promedio >= 4) {
		juicio = '<span style="color:yellow;">Examen diciembre</span>'
        $('#feb').append(`${asignatura} ${nombre} Promedio ${promedio} ${juicio} <br>`)
    } else {
		juicio = '<span style="color:red;">Examen Febrero</span>'
        $('#dic').append(`${asignatura} ${nombre} Promedio ${promedio} ${juicio} <br>`)
    }
    
}
$('#btndata2').click(() => {$('#exo, #feb, #dic').html("")})

