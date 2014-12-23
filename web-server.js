var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path')
var fs = require('fs')
var url = require('url')
var events = require('events')
// app.use(bodyParser.urlencoded());


app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
  response.render('index')
});

app.get('/newEvent', function(request, response){
  response.render('newEvent')
});

app.get('/editProfile', function(request, response){
  response.render('editProfile')
});

app.post('public/data/event', function(request, response){
    var requestBody = req.body
})

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;