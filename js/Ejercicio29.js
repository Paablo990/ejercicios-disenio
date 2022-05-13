$(() => {
  $("#boton").on("click", () => {
    let texto = $("#texto").val();

    $("#resultado").html(`Las vocales son ${contarVocales(texto)}`);
  });

  function contarVocales(texto) {
    let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let contadorVocales = 0;

    for (let i = 0; i < texto.length; i++) {
      if (vocales.indexOf(texto[i]) >= 0) {
        contadorVocales++;
      }
    }
    return contadorVocales;
  }
});
