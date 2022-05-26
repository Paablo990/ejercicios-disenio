$(function () {
	const $exonerados = $('#exonerados');
	const $desaprobados = $('#desaprobados');
	const $cedula = $('#cedula');
	const $ultimoPromedio = $('#ultimoPromedio');

	const libreta = [];

	$('#boton').on('click', function () {
		const cedula = Number($cedula.val());
		const ultimoPromedio = Number($ultimoPromedio.val());
		libreta.push(cedula, ultimoPromedio);

		const exonerados = [];
		const desaprobados = [];

		for (let i = 0; i < libreta.length; i++) {
			if (i % 2 !== 0) {
				const nota = libreta[i];
				if (nota >= 8) exonerados.push(libreta[i - 1], nota);
				else desaprobados.push(libreta[i - 1], nota, definirPeriodo(nota));
			}
		}

		$exonerados.html('');
		$desaprobados.html('');

		for (let i = 0; i < exonerados.length; i += 2) {
			const alumno = exonerados[i];
			$exonerados.append(`
      <li> 
        Cedula: ${alumno}
        <ul>
          <li>Nota: ${exonerados[i + 1]}</li>
        </ul> 
      </li>
      `);
		}

		for (let i = 0; i < desaprobados.length; i += 3) {
			const alumno = desaprobados[i];
			$desaprobados.append(
				`<li>
          Cedula: ${alumno} 
          <ul>
            <li>Nota: ${desaprobados[i + 1]}</li>
            <li>Juicio: ${desaprobados[i + 2]}</li>
          </ul>
        </li>`
			);
		}
	});

	function definirPeriodo(nota) {
		return nota < 8 && nota >= 5 ? 'Diciembre' : 'Febrero';
	}
});
