$("#btndata").click(Pagar);

function Pagar(){

    var num = Number($("#PrecioL").val());

    var num1 = Number($("#Litros").val());

    var total = (num * num1);

    var nombre = $("#Nombre").val();

    $("#data").html("Nombre: "+nombre+"<br> Cantidad de Litros: "+num1+"<br>----------------------------"+"<br> Total a pagar: "+total+"$");
    

} 
