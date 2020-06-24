//ingreamos los que requeriremos para conectar la base de datos
const express = require('express');
const routes = express.Router();
const { getStoreByAddres, getStoreByAddresCategoria } = require('../controllers/getStore-controller');


routes.get('/getStore/:barrio', getStoreByAddres);
routes.get('/getStore/:idCategoriaCo/:barrio', getStoreByAddresCategoria);


module.exports = routes;