const express = require('express');
const app = express();

//setings
app.set('port', process.env.PORT || 3002);

//Middlewares
app.use(express.json());


//Routes
app.use(require('./Routes/comercio'))

// iniciar servidor
app.listen(app.get('port'),()=> {
    console.log('server on port 3002', app.get('port'));
})

