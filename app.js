
const express = require('express');
const app = express ();
const path = require('path');
const port = 3000;

const pathViews = path.join (__dirname,'/views/')
app.use(express.static('public'));



app.listen (process.env.PORT || port, () => {
 console.log ('Servidor corriendo en el puerto ' + port)
});

app.get('/', (req, res) => {
    res.sendFile(pathViews+'home.html');
});

app.get('/register', (req, res) => {
    res.sendFile(pathViews+'register.html');
});
app.get('/login', (req, res) => {
    res.sendFile(pathViews+'login.html');
});
//Esta ruta de tipo get se utiliza para redireccionar el formulario al home
app.post("/registro", (req, res) => {
    res.redirect ("/");
});
