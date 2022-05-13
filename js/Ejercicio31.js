$(() => {
    $("#boton").on("click", () => {
      let texto = $("#texto").val().toLowerCase()
  
  
      $("#resultado").html(texto);
  
  
    });
  });
  
