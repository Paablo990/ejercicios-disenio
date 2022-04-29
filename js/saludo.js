$("#btndata").click(hacealgo);

function hacealgo(){

    var nombre= $("#Nombre").val();
    var apellido= $("#Apellido").val();

    $("#data").html("Soy: "+nombre+""+apellido);
    
}
