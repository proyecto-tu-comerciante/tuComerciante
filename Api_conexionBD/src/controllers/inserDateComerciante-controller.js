// importamos la funcion creada en database.js
const mysqlConection = require('../config/database');
const bcrypt = require('bcrypt');
const inserDateComerciante = (req, res) => {
     let hashPass = bcrypt.hashSync(req.body.contrasena, 8);
    const { idComerciante, nombreComerciante, apellidoComerciante, telefonoComerciante, contrasena, confirmarContrasena } = req.body;
    
    mysqlConection.query('INSERT INTO comerciante VALUES (?,?,?,?,?,?)',[idComerciante, nombreComerciante, apellidoComerciante, telefonoComerciante, hashPass, confirmarContrasena], (err, rows) => {
        if (!err) {
            res.json({ Status: "se ha guardado correctamente" });
        } else {
            console.log(err);
        }
    }); 
}


module.exports = {
    inserDateComerciante
}