DROP DATABASE IF EXISTS EXAMEN;
CREATE DATABASE EXAMEN;
USE EXAMEN;
CREATE TABLE USUARIO(
	id_user int primary key AUTO_INCREMENT,
	nombre 	VARCHAR(100) NOT NULL,
	password VARCHAR(50) NOT NULL
);
CREATE TABLE REPORTE(
	id_reporte int PRIMARY KEY AUTO_INCREMENT,
	id_user  int NOT NULL,
	cuerpo VARCHAR(100) NOT NULL,
	FOREIGN KEY (id_user) REFERENCES USUARIO(id_user)
);
CREATE TABLE ReporteEnUsuario(
	id_riu int PRIMARY KEY AUTO_INCREMENT,
	id_user  int NOT NULL,
	id_reporte int NOT NULL,
	FOREIGN KEY (id_user)REFERENCES USUARIO(id_user),
	FOREIGN KEY (id_reporte)REFERENCES REPORTE(id_reporte)
);
INSERT INTO USUARIO VALUES(nombre,password)
('mauricio','contraseña');
SELECT nombre FROM usuario WHERE nombre = ?

SELECT nombre FROM usuario WHERE id_user = ?
/*en la segunda pagina tiene que poner su nombre no? para mostrarle sus mensajes
*/
SELECT cuerpo FROM reporte WHERE id_user = ?
CREATE PROCEDURE getReportesdeUsuario (IN id_user)
	BEGIN
		DROP TEMPORARY TABLE IF EXISTS Tempprestamoinusuario;
	    CREATE TEMPORARY TABLE Tempprestamoinusuario AS (SELECT id_reporte FROM ReporteEnUsuario WHERE id_user = id_user);
    END$$
