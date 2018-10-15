var express = require('express');
var router = express.Router();
const path = require('path');
var body_parser = require('body-parser');
var DB = require('..DB/dbcontroller.js');
var regex = require('./regex.js');
/*
router.use(body_parser.json());
router.use(body_parser.urlencoded({extended: true}));
*/

/* GET home page.  aqui va ir lo del cifrado? mau mau mau mau mau mau */
router.get('/', function(req, res, next) {
  	res.sendFile("CifrarMensaje.html", {root: path.join(__dirname, "../public/html")});
});
router.post('/cifrar', function(req, res){
    var holi = req.body;
    
    validado = regex.ValidarLlave(req.body);
    if (validado != 0) 
      return res.send();
    DB.ValidarConsultaUsuario(req.body).then(retorno =>{
    	if (retorno == 1)
    		return res.send("Ese usuario no ha sido registrado");
    	DB.InsertarReporte(req.body).then(succes =>{
      		if (succes != 0)
        		return res.send("Ha ocurrido un error");
      		return res.send("Se ha cifrado el mensaje correctamente");
    	});
    });
});


//que contesta en discord
module.exports = router;
