const CryptoJS = require("crypto-js");
var funciones = {
  cifrar: data =>{
    if (data.opcion = "AES 128") 
      var ciphertext = CryptoJS.AES.encrypt(data, data.contra);
    if (data.opcion = "AES 192") 
      var ciphertext = CryptoJS.AES.encrypt(data, data.contra);
    if (data.opcion = "AES 256") 
      var ciphertext = CryptoJS.AES.encrypt(data, data.contra);

    return ciphertext.toString();
    //Uno con 16 caracteres
    //Otro con 24 caracteres
    //Uno ultimo con 32
  },
  decifrar: parametros =>{
    hola = [];
    hola.push(parametros.map(metercosas));
    function metercosas(parametros) {
      var nom = CryptoJS.AES.decrypt(parametros.nom_usu, 'secret key 12345');
      var ema = CryptoJS.AES.decrypt(parametros.ema_usu, 'secret key 12345');
      var edad = CryptoJS.AES.decrypt(parametros.edad_usu, 'secret key 12345');
      var tel = CryptoJS.AES.decrypt(parametros.tel_usu, 'secret key 12345');
      nuevo = {"index":parametros.length,"nom":nom.toString(CryptoJS.enc.Utf8) ,"ema":ema.toString(CryptoJS.enc.Utf8),"edad":edad.toString(CryptoJS.enc.Utf8),"tel":tel.toString(CryptoJS.enc.Utf8)};
      return nuevo;
    }
    console.log("Estos es hola señores::." + JSON.stringify(hola));
    return hola;
  }
}
module.exports = funciones;
