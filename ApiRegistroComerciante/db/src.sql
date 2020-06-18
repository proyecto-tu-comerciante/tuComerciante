CREATE database tiendas;

USE tiendas;

CREATE TABLE registro(
id INT PRIMARY KEY NOT NULL auto_increment,
nombre VARCHAR(45) NOT NULL,
ciudad VARCHAR (45) NOT NULL
);

DESCRIBE registro;