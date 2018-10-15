function enviar(e) {
    //Obtenemos los datos del formulario
    var usu = document.getElementById("usr").value;
    var con = document.getElementById("con").value;
    var opt = document.getElementById("opt").value;
    var men = document.getElementById("men").value;
    //abre una nueva hoja para poner lo de la base
    console.log(nombre," ",correo," ",edad," ",telefono);
    var xhr = new XMLHttpRequest();
    xhr.open("post", "./cifrar", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify({user: usu, contra: con, opcion: opt, mensaje:men}));
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            document.getElementById("exito").innerHTML=xhr.responseText;              
        }
        else if(xhr.readyState != 4 && xhr.status != 200){
            document.getElementById("error").innerHTML= "Upps algo ha sucedido asegurese que su navegador soporte javascript";           
        }
    }
}