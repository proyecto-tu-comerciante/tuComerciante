const mysqlConection = require('../config/database');

const insertmarker = (req, res) => {
 
    const { idComercio, nombreComercio, direcionComercio, domicilio, idComercianteCo, barrio, idCategoriaCo, ciudad, horarioApertura, horarioCierre } = req.body;
    
    mysqlConection.query('INSERT INTO comercio VALUES (?,?,?,?,?,?,?,?,?,?)', [idComercio, nombreComercio, direcionComercio, domicilio, idComercianteCo, barrio, idCategoriaCo, ciudad, horarioApertura, horarioCierre ], (err, rows) => {
    if (!err) {
    res.json({ Status: "se ha guardado correctamente" });
    } else {
    console.log(err);
    }
    });
   };

   module.exports = {
    insertmarker
}