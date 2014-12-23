var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path')
var fs = require('fs')
var url = require('url')
var events = require('events')
var bodyParser = require('body-parser')



app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(request, response){
  response.render('index')
});

app.get('/newEvent', function(request, response){
  response.render('newEvent')
});

app.get('/editProfile', function(request, response){
  response.render('editProfile')
});

app.post('/data/event/:id.json', function(request, response){
    var event = request.body.event
    console.log(event)
  // response.render('index', {name: request.body.id});
});



server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;