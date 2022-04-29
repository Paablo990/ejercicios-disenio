$("#btndata").click(Sumar);    


function Sumar(){

    var numero= Number($("#Numero").val());
    
    var numero1= Number($("#Numero1").val());

    var suma = Number(numero+numero1);

    $("#data").html("Resultado: "+suma);

}