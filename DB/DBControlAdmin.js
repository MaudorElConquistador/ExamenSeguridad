var mysql = require('mysql');
const cipher = require('../routes/cifrar.js');
var con = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'holamundo',
   database: 'EXAMENSEGURIDAD',
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
  ValidarUsuario: usuario =>{
    return new Promise((resolve, reject) => {
      con.query('SELECT *FROM USUARIO WHERE NOMBRE = ?', [usuario.user] ,(err, result) => {
      if (err)
        throw err;
      if (result.length == 0)
        return resolve(1)
      return resolve(result);
      });
    });
  }
}
module.exports = funciones;
