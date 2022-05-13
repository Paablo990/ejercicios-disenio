$(() => {
    $("#boton").on("click", () => {
      let texto = $("#texto").val();
  
     
  
      $("#resultado").html(verificarTexto(texto));
    });
  
    function verificarTexto(texto) {
      for (let i = 0; i < texto.length; i++) {
          let numeroCaracteres = texto.length;
        if (texto.charAt(0) == texto.charAt(numeroCaracteres-1)) {
          mensaje = "La primera y la ultima letra coinciden";
        } else {
          mensaje = "No coinciden la primera y la ultima letra";
        }
        return mensaje;
      }
    }
  
  
  });