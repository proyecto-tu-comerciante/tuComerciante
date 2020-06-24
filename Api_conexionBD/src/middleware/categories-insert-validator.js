const { check, validationResult } = require('express-validator');

validatorParams = [

     check('tipoCategoria').isString().isLength({ min: 3, max: 25 })

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