$(function () {
	const $resultado = $('#resultado');
	const $alias = $('#alias');

	const listaAlias = [];

	$('#boton').on('click', function () {
		const alias = $alias.val();
		if (alias.replaceAll(' ', '').length === 0) return;

		listaAlias.push(alias);

		listaFinal = quitarRepetidos(listaAlias);

		$resultado.html(``);
		$resultado.append(`Array alias = [${listaFinal.join(',')}]`);
	});

	function quitarRepetidos(array) {
		const arrayOrdenado = array.sort();
		const arraySinRepetidos = [];

		for (let i = 0; i < arrayOrdenado.length; i++) {
			const alias = arrayOrdenado[i];
			if (alias !== arrayOrdenado[i + 1]) arraySinRepetidos.push(alias);
		}

		return arraySinRepetidos;
	}
});
