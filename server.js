const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
require('./hbs/helpers/helpers');

// HBS
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');




app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Jared',
        anio: new Date().getFullYear()
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
