$("#btndata").click(intercambiar);

function intercambiar(){

    var a = Number($("#Num1").val());

    var b = Number($("#Num2").val());

    var aux;

    aux = a;
    a = b;  
    b = aux;

    $("#data").html("Intercambiado: "+a+","+b);

}