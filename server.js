var express = require('express'),
    swig    = require('swig'),
    http    = require('http'),
	fs      = require('fs');    

var app = express();
var bodyParser = require("body-parser");
var port = 4000;
var server = app.listen(port);


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


//Templating settings
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/build/views');

//For static asset files
['css', 'img', 'js', 'views', 'api', 'msg'].forEach(function (dir){
    app.use('/'+dir, express.static(__dirname+'/build/'+dir));
});

// Routing
var routeData = {
	"routes" : [{
		"path" : "/",
		"view" : "index",
		"title" : "Homepage"
	},{
		"path" : "/documentation",
		"view" : "documentation",
		"title" : "Documentation"
	},{
		"path" : "/examples",
		"view" : "examples",
		"title" : "Examples"	
	}]
};


routeData.routes.forEach(function (route){

	app.get(route.path, function(req, res) {
		res.sendfile('./build/'+route.view+'.html');
	});

});

app.get('/tickets', function(req, res) {
	res.sendfile('./app/views/tickets.html');
});


app.post('/tickets', function (req, res){

    var topSlice    = '{"tickets":',
        filling     = JSON.stringify(req.body),
        bottomSlice = "}",
        sandwich    = topSlice+filling+bottomSlice,
        response    = {};
 

    fs.writeFile("./build/api/tickets.json", sandwich, function(err) {

        if(err) {

            response.data = req.body;
            response.status = "ERROR file not saved";

            res.send(response);

            return console.log(err);

        } else {

            response.data = req.body;
            response.status = "derp File saved successfully!!!";

            res.send(response);
        }

    });

});

console.log("Express server listening on port ",port);