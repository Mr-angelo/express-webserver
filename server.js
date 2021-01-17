const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');

//coemntario pull a.c.a

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    //res.send(salida)
    res.render('home', {
        nombre: 'Angelo',
        //anio: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {

    //res.send(salida)
    res.render('about', {
        //anio: new Date().getFullYear()
    });
});

app.listen(port);
