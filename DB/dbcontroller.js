var mysql = require('mysql');
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
  InsertarReporte: rep =>{
    return new Promise((resolve, reject) => {
      con.query('INSERT INTO REPORTE VALUES(?,?)', [rep.user, rep.mensaje], (err, result) => {
      if (err)
        throw err;
      return resolve(0);
      });
    });
  },
  Consulatar: admin =>{
    return new Promise((resolve, reject) => {
      con.query('SELECT CUERPO FROME REPORTE WHERE id_reporte = ?', [admin.id], (err, result) => {
      if (err)//Cuando ya tengamos los procedures chidos le cambiamos esta madrola
        throw err;
      return resolve(0);
      });
    });
  },
  ValidarConsultaReporte: e=>{
    return new Promise((resolve, reject) => {
      con.query('SELECT CURPO FROME REPORTE WHERE id_reporte = ?', (err, result) => {
      if (err)
        throw err;
      if (result.length ==0)
        return resolve(1)
      return resolve(0);
      });
    });
  },
  ValidarConsultaUsuario: e =>{
    return new Promise((resolve, reject) => {
      con.query('SELECT USUARIO FROME REPORTE WHERE id_nombre = ?', (err, result) => {
      if (err)
        throw err;
      if (result.length ==0)
        return resolve(1)
      return resolve(0);
      });
    });
  }
}
CREATE FUNCTION getId_userbyNAME (nombreusuario(45) MEDIUMINT) RETURNS INT
    BEGIN
        RETURN(SELECT id_user from USUARIO where nombre = nombreusuario);
    END$$
    /*Lo que obtenemos de la funcion se lo pasameos como parametro al procedure*/
CREATE PROCEDURE InsertarReporte(IN id_usuario INT, cuerpo VARCHAR(75))
    BEGIN
        INSERT INTO reportes (id_user, cuerpo)  VALUES (id_user,cuerpo);
    END$$
