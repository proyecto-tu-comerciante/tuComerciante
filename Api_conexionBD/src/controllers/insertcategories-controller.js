// importamos la funcion creada en database.js
const mysqlConection = require('../config/database');

const insertcategories = (req, res) => {
           
    const { idCategoria, tipoCategoria } = req.body;
    
    mysqlConection.query('INSERT INTO categoria VALUES (?,?)', [idCategoria, tipoCategoria], (err, rows) => {
    if (!err) {
    res.json({ Status: "se ha guardado correctamente" });
    } else {
    console.log(err);
    }
    });
   };


module.exports = {
    insertcategories
}