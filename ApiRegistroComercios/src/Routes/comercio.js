//ingreamos los que requeriremos para conectar la base de datos
const express = require('express');
const routes = express.Router();

// importamos la funcion creada en database.js
const mysqlConection = require('../database');

//creamos ruta para obtener datos y que arroje un resultado en caso de salir error
routes.get('/', (req, res) => {
    mysqlConection.query('SELECT * FROM comercio', (err, rows, ) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    })
});

//2 ruta obtener datos segun su id 
routes.get('/:idComercio', (req, res) => {
    const { idComercio } = req.params;
    mysqlConection.query('SELECT * FROM comercio WHERE idComercio = ?', [idComercio], (err, rows) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err);
        }
    })
})

//enviar datos usando el metodo post a la BD 
routes.post('/', async (req, res) => {
         
    const { idcomercio, nombrecomercio,direcionComercio,domicilio,latitud,longitud, idComercianteCo,idCategoriaCo,idHorarioCo,codBarrioCo} = req.body;
     
    mysqlConection.query('INSERT INTO comercio VALUES (?,?,?,?,?,?,?,?,?,?)',[idcomercio, nombrecomercio,direcionComercio,domicilio,latitud,longitud, idComercianteCo,idCategoriaCo,idHorarioCo,codBarrioCo
    ], (err, rows) => {
        if (!err) {
            res.json({ Status: "se ha guardado correctamente" });
        } else {
            console.log(err);
        }
    }); 
});

routes.get('/obtener/:idCategoriaCo', (req, res) => {
    const { idCategoriaCo } = req.params;
    mysqlConection.query('SELECT c.nombreComercio FROM comercio c JOIN idCategoria ca ON ca.idCategoria = c. idCategoriaCo WHERE idCategoriaCo = ?', [idCategoriaCo], (err, rows) => {
    if (!err) {
    res.json(rows)
    } else {
    console.log(err);
    }
    })
   });

routes.delete('/eliminar/:idComercio',(req,res) => {
    const {idComercio} = req.params
    mysqlConection.query('DELETE FROM comercio WHERE idComercio = ?',[idComercio],(err,rows) => {
        if (!err) {
            res.json({ Status: "se ha eliminado correctamente" });
        } else {
            console.log(err);
        }
    })
});

routes.put('/update/:idComercio',(req,res) => {
    const idComercio = req.body.idComercio;
        mysqlConection.query('UPDATE comercio SET ? WHERE idComercio: ?',[req.body, idComercio],(err,rows) => {

        if (!err) {
            res.json({ Status: "se ha eliminado correctamente" });
        } else {
            console.log(err);
        }
    })
});

module.exports = routes;