//ingreamos los que requeriremos para conectar la base de datos
const express = require('express');
const routes = express.Router();

// importamos la funcion creada en database.js
const mysqlConection = require('../database');

//creamos ruta para obtener datos y que arroje un resultado en caso de salir error
routes.get('/', (req, res) => {
    mysqlConection.query('SELECT * FROM categorias', (err, rows, ) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    })
});

//2 ruta obtener datos segun su id 
routes.get('/:idCategoria', (req, res) => {
    const { idCategoria } = req.params;
    mysqlConection.query('SELECT * FROM categoria WHERE idCategoria = ?', [idCategoria], (err, rows) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    })
})

//enviar datos usando el metodo post a la BD 
routes.post('/', async (req, res) => {
         
    const { idCategoria, nombrecategoria} = req.body;
     
    mysqlConection.query('INSERT INTO Negocio VALUES (?,?)',[idCategoria,nombreCategoria
    ], (err, rows) => {
        if (!err) {
            res.json({ Status: "se ha guardado correctamente" });
        } else {
            console.log(err);
        }
    }); 
});

routes.put('/update/:idCategoria',(req,res) => {
    const idCategoria = req.body.idNegocio;
        mysqlConection.query('UPDATE categoria SET ? WHERE idCategoria: ?',[req.body, idCategoria],(err,rows) => {

        if (!err) {
            res.json({ Status: "se ha eliminado correctamente" });
        } else {
            console.log(err);
        }
    })
});

module.exports = routes;