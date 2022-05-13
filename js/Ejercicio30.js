$(() => {
  $("#boton").on("click", () => {
    let texto = $("#texto").val().toUpperCase()


    $("#resultado").html(texto);


  });
});
