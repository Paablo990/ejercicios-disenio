$("#btndata").click(Mostrar);

function Mostrar() {
  let plan = $("#plan option:selected").text();

  let nMillas =
    plan == "Plan Plus"
      ? Number($("#millas").val()) * 2
      : Number($("#millas").val());

  if (nMillas >= 60000) {
    $("#data").html(`Europa (destino lejano)`);
  } else if (nMillas >= 30000 && nMillas < 60000) {
    $("#data").html(`América del Norte (destino intermedio)`);
  } else if (nMillas >= 15000 && nMillas < 30000) {
    $("#data").html(`América del Sur (destino cercano).`);
  } else {
    $("#data").html(`No dispone de millas suficientes.`);
  }
}
