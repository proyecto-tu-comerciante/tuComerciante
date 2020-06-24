//ingreamos los que requeriremos para conectar la base de datos
const express = require('express');
const routes = express.Router();

const { inserDateComerciante } = require('../controllers/inserDateComerciante-controller');
const insertComercianteValidator = require('../middleware/comerciante-insert-validator');

routes.post('/insert/comerciante', insertComercianteValidator.validatorParams, insertComercianteValidator.validator, inserDateComerciante);

module.exports = routes;