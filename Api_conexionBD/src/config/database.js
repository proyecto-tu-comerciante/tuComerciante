//creamos los requerimientos y configuramos la conexion a nuestra bas de datos 

const mysql = require('mysql');

const mysqlConection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tucomerciante',
    port: '3397'
});

// creamos la funcion con la que nuestra app indique si se conecto correctamente o no 
mysqlConection.connect(function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('conectado a BD');
    }
});

module.exports = mysqlConection;