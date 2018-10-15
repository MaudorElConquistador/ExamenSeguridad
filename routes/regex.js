var funcion = {
	ValidarLlave: e =>{
		if(e.opcion == "129" e.contra.length > 16 )
			return "Tu llave no debe sobrepasar los 16 caracteres"
		if (e.opcion== "192" e.contra.length > 24)
			return "Tu llave no debe sobrepasar los 24 caracteres"
		if (e.opcion== "256" e.contra.length > 32)
			return "Tu llave no debe sobrepasar los 32 caracteres"
		return 0;
	}
}
module.exports = funcion;