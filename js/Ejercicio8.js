$("#btndata").click(Mostrar);

function Mostrar(){

  var Nombre = $("#Nombre").val();
  var Apellido = $("#Apellido").val();
  var edad = Number($("#Edad").val());

  $("#data").append('<br> Nombre= '+Nombre+'<br> Apellido= '+Apellido+ '<br> Edad= '+edad+"<br>");
  }


// $("#btndata").click() =>{

  // var Nombre = $("#Nombre").val();
  // var Apellido = $("#Apellido").val();
  // var edad = Number($("#Edad").val());

  // $("#data").append(`<br> Nombre= ${Nombre} <br> Apellido= ${Apellido} <br> Edad= ${edad}`);
// }