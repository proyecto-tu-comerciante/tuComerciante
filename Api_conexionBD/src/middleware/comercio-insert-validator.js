const { check, validationResult } = require('express-validator');

validatorParams = [

     check('nombreComercio').isString().isLength({ min: 3, max: 30 }),
     check('direcionComercio').isString().isLength({ min: 4, max: 20 }),
     check('domicilio').isString().isLength({ min: 2, max: 2 }),
     check('barrio').isString().isLength({ min: 4, max: 30 }),
     check('ciudad').isString().isLength({ min: 4, max: 20 }),
     check('horarioApertura').isDate().isLength({ min: 5, max: 8 }),
     check('horarioCierre').isDate().isLength({ min: 5, max: 8 })
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