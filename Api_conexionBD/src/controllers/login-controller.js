const mysqlConection = require('../config/database');
const bcrypt = require('bcrypt');
const login = (req, res) => {

    const idComerciante = req.body.idComerciante;
    const contrasena = req.body.contrasena;

    mysqlConection.query('SELECT idComerciante, contrasena FROM comerciante WHERE idComerciante = ?', [idComerciante], (err, rows) => {
        if (err) {
            return res.json({ Status: "error 500" })
        }

        if (rows[0]) {
            if (bcrypt.compareSync(req.body.contrasena, rows[0].contrasena)) {
                return res.status(200).json({ Status: "Ingreso exitoso" });


            } else {
                return res.status(400).json({ Status: "su autenticacion fallo" })
            }
        }
        return res.status(500).json({ Status: "error de servidor" })

    }
    )


};

module.exports = {
    login
}