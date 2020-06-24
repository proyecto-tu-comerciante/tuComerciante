const express = require('express');
const app = express();

//setings
app.set('port', process.env.PORT || 3002);

//permite formatiar la salida del json y visualizarlo mas ordenado con la indentacion de 4 espacios
app.set('json spaces', 4);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));


//Routes
app.use(require('./Routes/getStore'));
app.use(require('./Routes/inserdate'));
app.use(require('./Routes/insertcategories'));
app.use(require('./Routes/insertmarker'));
app.use(require('./Routes/login'));
// iniciar servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})