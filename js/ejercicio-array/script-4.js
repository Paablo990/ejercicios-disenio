$(function () {
	const $resultado = $('#resultado');
	const $numero = $('#numero');

	const listaNumeros = [];

	$('#boton').on('click', function () {
		const numero = Number($numero.val());

		listaNumeros.push(numero);

		listaFinal = mayoresA20();

		$resultado.html(``);
		$resultado.append(`Array normal = [${listaNumeros.join(',')}]<br>`);
		$resultado.append(`Array mayores a 20 = [${listaFinal.join(',')}]`);
	});

	function mayoresA20() {
		const arr = [];

		for (let i = 0; i < listaNumeros.length; i++) {
			const numero = listaNumeros[i];
			if (numero > 20) arr.push(numero);
		}
		return arr;
	}
});
