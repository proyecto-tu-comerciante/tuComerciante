//ingreamos los que requeriremos para conectar la base de datos
const express = require('express');
const routes = express.Router();

const { login } = require('../controllers/login-controller');
const loginValidator = require('../middleware/login-validator');

routes.post('/login', loginValidator.validatorParams, loginValidator.validator, login);

module.exports = routes;