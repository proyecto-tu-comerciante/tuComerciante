//ingreamos los que requeriremos para conectar la base de datos
const express = require('express');
const routes = express.Router();

const {insertcategories} = require ('../controllers/insertcategories-controller');
const insertValidator = require ('../middleware/categories-insert-validator');

routes.post('/insert/categories',insertValidator.validatorParams, insertValidator.validator,insertcategories);  

module.exports = routes;