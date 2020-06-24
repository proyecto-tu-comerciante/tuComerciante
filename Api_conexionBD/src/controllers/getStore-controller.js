// importamos la funcion creada en database.js
const mysqlConection = require('../config/database');


const getStoreByAddres = (req, res) => {
    const { barrio } = req.params;

    mysqlConection.query('SELECT nombreComercio FROM comercio WHERE barrio = ?', [barrio], (err, rows) => {
        if (!err) {
            res.json(rows)
            return console.log(rows);

        } else {
            console.log(err);
        }
    })
};

const getStoreByAddresCategoria = (req, res) => {
    const { idCategoriaCo, barrio } = req.params;

    mysqlConection.query('SELECT c.nombreComercio FROM comercio c JOIN categoria ca ON c.idCategoriaCo = ca.idCategoria WHERE c.idCategoriaCo = ? AND c.barrio = ?', [idCategoriaCo, barrio], (err, rows) => {
        if (!err) {
            res.json(rows)
            return console.log(rows);

        } else {
            console.log(err);
        }
    })
};


module.exports = {
    getStoreByAddres,
    getStoreByAddresCategoria

}