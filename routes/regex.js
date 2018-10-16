var funcion = {
	ValidarLlave: llave =>{
		console.log("Esta es la opcion " + JSON.stringify(llave.opcion) + "  " + llave.contra.length);
		if (llave.opcion == "AES 128" && llave.contra.length > 16 )
			return "Tu llave no debe sobrepasar los 16 caracteres"; 
		if (llave.opcion == "AES 192" && llave.contra.length > 24)
			return "Tu llave no debe sobrepasar los 24 caracteres";
		if (llave.opcion == "AES 256" && llave.contra.length > 32)
			return "Tu llave no debe sobrepasar los 32 caracteres";
		return 0;
	}
}
module.exports = funcion;