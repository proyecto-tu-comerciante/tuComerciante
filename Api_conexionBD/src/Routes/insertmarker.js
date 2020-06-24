//ingreamos los que requeriremos para conectar la base de datos
const express = require('express');
const routes = express.Router();

const {insertmarker} = require ('../controllers/insertmarker-controller');
const insertmarkerValidator = require ('../middleware/comercio-insert-validator');

routes.post('/insert/marker', insertmarkerValidator.validatorParams, insertmarkerValidator.validator, insertmarker);  

module.exports = routes;