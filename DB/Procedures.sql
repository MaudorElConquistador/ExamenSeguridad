USE EXAMEN;
DELIMITER $$

DROP PROCEDURE IF EXISTS searchColony$$
/*
SELECT nombre FROM usuario WHERE nombre = ?

SELECT nombre FROM usuario WHERE id_user = ?

SELECT cuerpo FROM reporte WHERE id_user = ?
*/
CREATE PROCEDURE getReportesdeUsuario (IN id_user)
	BEGIN
		DROP TEMPORARY TABLE IF EXISTS Tempprestamoinusuario;
	    CREATE TEMPORARY TABLE Tempprestamoinusuario AS (SELECT id_reporte FROM ReporteEnUsuario WHERE id_user = id_user);
    END$$
