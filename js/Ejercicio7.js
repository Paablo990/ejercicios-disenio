$("#btndata").click(Mostrar);

function Mostrar() {
  var Ciudad = $("#Ciudad").val();

  $("#data").html(
    '<a href= "https://api.openweathermap.org/data/2.5/weather?q=' +
      Ciudad +
      ',uy&appid=320bb7d079b7b4bece9d426bcd511cea">' +
      Ciudad +
      "</a>"
  );
}
