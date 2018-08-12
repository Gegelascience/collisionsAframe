//définition des dépendances et création d'un serveur express
var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('*', function(req, res){
    console.log('erreur 404');
    res.status(404).send('erreur 404');
  });
 
//on lance le serveur sur le port 8081
app.listen(8081);
//On affiche dans la console que le serveur tourne
console.log('Serveur lancé sur le port 8081');