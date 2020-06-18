//ingreamos los que requeriremos para conectar la base de datos
const express = require('express');
const routes = express.Router();

// importamos la funcion creada en database.js
const mysqlConection = require('../database');

//creamos ruta para obtener datos y que arroje un resultado en caso de salir error
routes.get('/', (req, res) => {
    mysqlConection.query('SELECT * FROM comerciante', (err, rows, ) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    })
});

//enviar datos usando el metodo post a la BD 
routes.post('/', async (req, res) => {
         
    const { idComerciante, nombreComerciante,apellidoComerciante,telefonoComerciante,contrasena} = req.body;
     
    mysqlConection.query('INSERT INTO comerciante VALUES (?,?,?,?,?)',[idComerciante, nombreComerciante,apellidoComerciante,telefonoComerciante,contrasena
    ], (err, rows) => {
        if (!err) {
            res.json({ Status: "se ha guardado correctamente" });
        } else {
            console.log(err);
        }
    }); 
});

routes.get('/obtener/:tipoNegocio_idtipoNegocio', (req, res) => {
    const { tipoNegocio_idtipoNegocio } = req.params;
    mysqlConection.query('SELECT n.nombreNegocio FROM Negocio n JOIN tipoNegocio tp ON tp.idtipoNegocio = n.tiponegocio_idtipoNegocio WHERE tipoNegocio_idtipoNegocio = ?', [tipoNegocio_idtipoNegocio], (err, rows) => {
    if (!err) {
    res.json(rows)
    } else {
    console.log(err);
    }
    })
   });

routes.delete('/eliminar/:idComerciante',(req,res) => {
    const {idComerciante} = req.params
    mysqlConection.query('DELETE FROM comerciante WHERE idComerciante = ?',[idComerciante],(err,rows) => {
        if (!err) {
            res.json({ Status: "se ha eliminado correctamente" });
        } else {
            console.log(err);
        }
    })
});

routes.put('/update/:idComerciante',(req,res) => {
    const idComerciante = req.body.idComerciante;
        mysqlConection.query('UPDATE comerciante SET ? WHERE idNegocio: ?',[req.body, idNegocio],(err,rows) => {

        if (!err) {
            res.json({ Status: "se ha eliminado correctamente" });
        } else {
            console.log(err);
        }
    })
});

module.exports = routes;