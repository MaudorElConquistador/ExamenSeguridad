var express = require('express');
var router = express.Router();
const path = require('path');
const body_parser = require('body-parser');
const cipher = require('./cifrar.js');
const DB = require('..DB/dbcontroller.js');
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
    DB.InsertarReporte(req.body).then(succes =>{
      if (succes != 0)
        return res.send("Ha ocurrido un error");
        
      res.send("Se ha cifrado el mensaje correctamente");
    });
});


//que contesta en discord
module.exports = router;
