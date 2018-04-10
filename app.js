var express = require('express');
var app = express();

var PORT = 4321;

app.get('/', function(request, response){
    response.send('this is a test');
})

app.listen(PORT, function(){
    console.log('Listening at port: ' + PORT);
})