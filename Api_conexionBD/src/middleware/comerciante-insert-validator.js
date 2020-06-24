const { check, validationResult } = require('express-validator');

validatorParams = [
     check('idComerciante').isNumeric().isLength({ min: 7, max: 11 }),
     check('nombreComerciante').isString().isLength({ min: 3, max: 25 }),
     check('apellidoComerciante').isString().isLength({ min: 4, max: 20 }),
     check('telefonoComerciante').isNumeric().isLength({ min: 4, max: 20 }),
     check('contrasena').isLength({ min: 8, max: 20 })
];

function validator(req, res, next) {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
     }
     next();
}

module.exports = {
     validatorParams,
     validator
}