var mysql = require('mysql');
const cipher = require('./cifrar.js');
var con = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'holamundo',
   database: 'OTRAMADROLA',
   port: 3306
});

con.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

var funciones = {
  ValidarConsultaUsuario: usuario =>{
    return new Promise((resolve, reject) => {
      con.query('SELECT USUARIO FROME REPORTE WHERE id_nombre = ?', [usuario.usuario] ,(err, result) => {
      if (err)
        throw err;
      if (result.length ==0)
        return resolve(1)
      return resolve(0);
      });
    });
  }