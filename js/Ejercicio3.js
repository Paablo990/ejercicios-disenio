$("#btndata").click(Restar);    
$("#btndata1").click(Multiplicar);


function Restar(){

    var numero = Number($("#Numero").val());
    
    var numero1 = Number($("#Numero1").val());

    var resta = (numero-numero1);

    $("#data").html("Resultado: "+resta);

}

function Multiplicar(){

    var numero = Number($("#Numero").val());
    
    var numero1 = Number($("#Numero1").val());

    var multiplicacion = (numero * numero1);    

    $("#data1").html("Resultado: "+multiplicacion);

}

