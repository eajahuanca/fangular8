const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


// static files
app.use(express.static(path.join(__dirname, 'public')));

//server
app.listen(5003, () => {
 console.log('Aplicacion ejemplo, escuchando el puerto 5003!');
});
