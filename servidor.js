var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log('Servidor: Iniciado');
});
/* Raiz: El método es sendFile (con F mayúscula) y debes agregar la variable de entorno 
llamada "__dirname" que te da la ruta de de la raíz en tu actual proyecto */
app.get('/',function(request,res){
    res.sendFile(__dirname + '/inicio.html');
});
/*Para llamar los archivos .css y .js públicos desde tu index.html debes declarar las rutas 
como estáticas de la siguiente forma: */
app.use('/public/css', express.static(__dirname + '/css'));
app.use('/public/js', express.static(__dirname + '/js'));
app.use('/public/img', express.static(__dirname + '/img'));

// Archivos HTML
app.get('/inicio.html', function(req, res){
    res.sendfile(__dirname + '/inicio.html');
});
app.get('/indice.html', function(req, res){
    res.sendfile(__dirname + '/indice.html');
});
app.get('/buscar.html', function(req, res){
    res.sendfile(__dirname + '/buscar.html');
});
app.get('/contacto.html', function(req, res){
    res.sendfile(__dirname + '/contacto.html');
});
app.get('/pagComic01.html', function(req, res){
    res.sendfile(__dirname + '/pagComic01.html');
});
app.get('/pagComic02.html', function(req, res){
    res.sendfile(__dirname + '/pagComic02.html');
});
app.get('/pagComic03.html', function(req, res){
    res.sendfile(__dirname + '/pagComic03.html');
});
app.get('/pagComic04.html', function(req, res){
    res.sendfile(__dirname + '/pagComic04.html');
});
app.get('/pagComic05.html', function(req, res){
    res.sendfile(__dirname + '/pagComic05.html');
});
app.get('/pagComic06.html', function(req, res){
    res.sendfile(__dirname + '/pagComic06.html');
});

// Archivos CSS
app.get('/css/inicio.css', function(req, res){
    res.sendfile(__dirname + '/css/inicio.css');
});
app.get('/css/menuResponsive.css', function(req, res){
    res.sendfile(__dirname + '/css/menuResponsive.css');
});
app.get('/css/buscar.css', function(req, res){
    res.sendfile(__dirname + '/css/buscar.css');
});
app.get('/css/contacto.css', function(req, res){
    res.sendfile(__dirname + '/css/contacto.css');
});
app.get('/css/indice.css', function(req, res){
    res.sendfile(__dirname + '/css/indice.css');
});
app.get('/css/scroll-indicator.css', function(req, res){
    res.sendfile(__dirname + '/css/scroll-indicator.css');
});

// Archivos JS
app.get('/js/menuResponsive.js', function(req, res){
    res.sendfile(__dirname + '/js/menuResponsive.js');
});
app.get('/js/index.js', function(req, res){
    res.sendfile(__dirname + '/js/index.js');
});
app.get('/js/buscar.js', function(req, res){
    res.sendfile(__dirname + '/js/buscar.js');
});
app.get('/js/scroll-indicator.js', function(req, res){
    res.sendfile(__dirname + '/js/scroll-indicator.js');
});

//Carpetas IMG
app.use('/public/img/300', express.static(__dirname + '/img/300'));
require("./rover_red_charlie.js");
/*
app.use('/public/img/rover_red_charlie', express.static(__dirname + '/img/rover_red_charlie'));

app.use('/public/img/rover_red_charlie/rover_red_charlie_1', 
    express.static(__dirname + '/img/rover_red_charlie/rover_red_charlie_1'));
app.use('/public/img/rover_red_charlie/rover_red_charlie_2', 
    express.static(__dirname + '/img/rover_red_charlie/rover_red_charlie_2'));
app.use('/public/img/rover_red_charlie/rover_red_charlie 3', 
    express.static(__dirname + '/img/rover_red_charlie/rover_red_charlie_3'));
app.use('/public/img/rover_red_charlie/rover_red_charlie_4', 
    express.static(__dirname + '/img/rover_red_charlie/rover_red_charlie_4'));
app.use('/public/img/rover_red_charlie/rover_red_charlie_5', 
    express.static(__dirname + '/img/rover_red_charlie/rover_red_charlie_5'));
app.use('/public/img/rover_red_charlie/rover_red_charlie_6', 
    express.static(__dirname + '/img/rover_red_charlie/rover_red_charlie_6'));

// Archivos IMG(posterior a sus carpetas)
app.get('/img/300/poster.jpg', function(req, res){
    res.sendfile(__dirname + '/img/300/poster.jpg');
});
app.get('/img/rover_red_charlie/poster.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/poster.jpg');
});
app.get('/img/rover_red_charlie/cover.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/cover.jpg');
});
// Rover Red Charlie #1
app.get('/img/rover_red_charlie/rover_red_charlie_1/001.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/001.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/002.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/002.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/003.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/003.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/004.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/004.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/005.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/005.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/006.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/006.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/007.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/007.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/008.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/008.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/009.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/009.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/010.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/010.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/011.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/011.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/012.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/012.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/013.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/013.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/014.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/014.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/015.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/015.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/016.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/016.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/017.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/017.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/018.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/018.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/019.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/019.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/020.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/020.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/021.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/021.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_1/022.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_1/022.jpg');
});
//Rover Red Charlie #2
app.get('/img/rover_red_charlie/rover_red_charlie_2/001.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/001.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/002.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/002.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/003.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/003.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/004.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/004.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/005.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/005.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/006.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/006.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/007.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/007.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/008.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/008.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/009.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/009.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/010.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/010.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/011.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/011.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/012.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/012.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/013.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/013.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/014.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/014.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/015.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/015.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/016.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/016.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/017.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/017.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/018.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/018.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/019.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/019.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/020.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/020.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/021.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/021.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/022.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/022.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/023.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/023.jpg');
});
//Rover Red Charlie #2
app.get('/img/rover_red_charlie/rover_red_charlie_2/001.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/001.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/002.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/002.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/003.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/003.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/004.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/004.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/005.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/005.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/006.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/006.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/007.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/007.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/008.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/008.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/009.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/009.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/010.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/010.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/011.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/011.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/012.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/012.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/013.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/013.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/014.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/014.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/015.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/015.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/016.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/016.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/017.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/017.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/018.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/018.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/019.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/019.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/020.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/020.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/021.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/021.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/022.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/022.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_2/023.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_2/023.jpg');
});
//Rover Red Charlie #3
app.get('/img/rover_red_charlie/rover_red_charlie_3/001.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/001.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/002.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/002.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/003.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/003.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/004.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/004.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/005.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/005.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/006.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/006.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/007.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/007.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/008.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/008.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/009.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/009.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/010.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/010.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/011.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/011.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/012.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/012.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/013.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/013.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/014.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/014.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/015.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/015.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/016.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/016.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/017.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/017.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/018.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/018.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/019.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/019.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/020.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/020.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/021.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/021.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/022.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/022.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_3/023.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_3/023.jpg');
});
//Rover Red Charlie #4
app.get('/img/rover_red_charlie/rover_red_charlie_4/001.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/001.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/002.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/002.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/003.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/003.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/004.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/004.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/005.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/005.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/006.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/006.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/007.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/007.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/008.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/008.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/009.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/009.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/010.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/010.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/011.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/011.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/012.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/012.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/013.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/013.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/014.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/014.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/015.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/015.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/016.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/016.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/017.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/017.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/018.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/018.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/019.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/019.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/020.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/020.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_4/021.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_4/021.jpg');
});
//Rover Red Charlie #5
app.get('/img/rover_red_charlie/rover_red_charlie_5/001.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/001.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/002.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/002.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/003.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/003.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/004.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/004.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/005.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/005.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/006.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/006.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/007.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/007.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/008.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/008.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/009.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/009.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/010.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/010.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/011.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/011.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/012.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/012.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/013.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/013.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/014.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/014.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/015.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/015.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/016.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/016.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/017.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/017.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/018.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/018.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/019.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/019.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/020.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/020.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/021.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/021.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_5/022.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_5/022.jpg');
});
//Rover Red Charlie #6
app.get('/img/rover_red_charlie/rover_red_charlie_6/001.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/001.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/002.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/002.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/003.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/003.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/004.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/004.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/005.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/005.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/006.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/006.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/007.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/007.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/008.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/008.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/009.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/009.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/010.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/010.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/011.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/011.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/012.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/012.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/013.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/013.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/014.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/014.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/015.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/015.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/016.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/016.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/017.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/017.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/018.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/018.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/019.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/019.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/020.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/020.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/021.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/021.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/022.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/022.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/023.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/023.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/024.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/024.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/025.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/025.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/026.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/026.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/027.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/027.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/028.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/028.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/029.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/029.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/030.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/030.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/031.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/031.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/032.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/032.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/033.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/033.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/034.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/034.jpg');
});
app.get('/img/rover_red_charlie/rover_red_charlie_6/035.jpg', function(req, res){
    res.sendfile(__dirname + '/img/rover_red_charlie/rover_red_charlie_6/035.jpg');
});
*/