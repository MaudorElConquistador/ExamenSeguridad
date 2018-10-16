function limpiar(e){
    document.getElementById("retorno").innerHTML = "";
    document.getElementById("error").innerHTML = "";
}
function enviar(e) {
    //Obtenemos los datos del formulario
    var usu = document.getElementById("usr").value;
    var con = document.getElementById("con").value;
    var opt = document.getElementById("opt").value;
    var men = document.getElementById("men").value;
    //abre una nueva hoja para poner lo de la base
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./cifrar", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify({user: usu, contra: con, opcion: opt, mensaje:men}));
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
        	alert("Esta es la respuesta carnal " + xhr.responseText);
            limpiar();
            document.getElementById("retorno").innerHTML=xhr.responseText;
                        
        }
        else if(xhr.readyState != 4 && xhr.status != 200){
            document.getElementById("error").innerHTML= "Upps algo ha sucedido asegurese que su navegador soporte javascript";
        }
    }
}
