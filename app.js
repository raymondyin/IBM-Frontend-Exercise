
var request = require('request');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var PORT = 4321;

app.get('/', function(req, res){
    console.log('request hitting root page...');
    
    request(flickrEndPoint, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            // res.send(body);
            res.render('mainpage')
        }
    } );
})

var flickrEndPoint = 'https://api.flickr.com/services/rest/?format=json&method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07';



app.listen(PORT, function(){
    console.log('Listening at port: ' + PORT);
});
