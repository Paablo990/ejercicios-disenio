$(() => {
  $("#boton").on("click", () => {
    let texto = $("#texto").val();
    let textoReversa = ''

    for (let i = texto.length - 1; i >= 0; i--) {
        textoReversa += texto.charAt(i);
      }
   

    $("#resultado").html(textoReversa);
  });

});
