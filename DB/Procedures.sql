USE EXAMENCIFRADO;
DELIMITER $$
DROP FUNCTION IF EXISTS getidUsuario$$
DROP PROCEDURE IF EXISTS InsertarReporte$$
DROP PROCEDURE IF EXISTS VerReporte$$

CREATE FUNCTION getidUsuario(nom_usuario VARCHAR(45)) RETURNS INT
    BEGIN
        RETURN(SELECT id_user FROM USUARIO WHERE nombre = nom_usuario);
    END$$

CREATE PROCEDURE InsertarReporte(IN id_usuario INT, IN cuerpo VARCHAR(100))
    BEGIN
       INSERT INTO REPORTE (id_user,cuerpo)VALUES(id_usuario,cuerpo);
    END$$

CREATE PROCEDURE VerReporte(IN NOM_usuario INT)
    BEGIN
		SELECT REPORTE.cuerpo, USUARIO.nombre FROM REPORTE INNER JOIN USUARIO ON USUARIO.id_user = REPORTE.id_user WHERE NOMBRE = NOM_usuario;
    END$$
