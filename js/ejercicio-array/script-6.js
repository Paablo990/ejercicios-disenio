$(function () {
	const $resultado = $('#resultado');
	const $texto = $('#texto');

	const listaTextos = [];

	$('#boton').on('click', function () {
		const texto = $texto.val();
		listaTextos.push(texto);

		listaSinRepetidos = quitarRepetidos(listaTextos);

		$resultado.html(`Array sin repetidos = [${listaSinRepetidos.join(',')}]`);
	});

	function quitarRepetidos(array) {
		const arrayOrdenado = array.sort();
		const arraySinRepetidos = [];

		for (let i = 0; i < arrayOrdenado.length; i++) {
			if (arrayOrdenado[i] !== arrayOrdenado[i + 1]) {
				arraySinRepetidos.push(arrayOrdenado[i]);
			}
		}
		return arraySinRepetidos;
	}
});
