$('#btndata').click(Sumar)

function Sumar() {
	let num = Number($('#Num1').val())
	let num1 = Number($('#Num2').val())

	if ((num + num1) % 2 == 0 && num + num1 > 1500) {
		$('#data').html(`El numero es par y mayor a 1500`)
	} else {
		$('#data').html(`El numero no cumple la condicion`)
	}
}
