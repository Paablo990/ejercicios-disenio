$('document').ready(() => {
	$('#btndata').on('click', () => {
		const casa = Number($('#casa').val())
		const sueldo = Number($('#sueldo').val())
		const anios = sueldo > 20000 ? 1 : 7
		const cuotas = casa / (12 * anios)
		const primerPago =
			sueldo <= 20000 ? (15 * cuotas) / 100 : (30 * cuotas) / 100
		const pagoParcial = (casa - primerPago) / (12 * anios)

		$('#data').html(
			`Primer pago: ${Math.ceil(
				primerPago
			)} <br><br> Pagos parciales: ${Math.ceil(
				pagoParcial
			)} en pagos mensuales por ${anios} años`
		)
	})
})
