
var request = require('request');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

var PORT = process.env.PORT || 4321;
var flickrEndPoint = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&nojsoncallback=1&format=json';

app.get('/', function(req, res){
    request(flickrEndPoint, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("mainpage", {data: data});
        }
    } );
})

app.listen(PORT, function(){
    console.log('Listening at port: ' + PORT);
});
