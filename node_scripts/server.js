var express = require('express');
var http    = require('http');
var fs      = require('fs');
var app     = express();
var server  = app.listen(3000);

var allowCrossDomain = function(req, res, next) {
  /**
     * Response settings
     * @type {Object}
     */
    var responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    /**
     * Headers
     */
    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }

};

app.configure(function(){
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/build'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.errorHandler());
  app.use(allowCrossDomain);
  app.use(app.router);
});

var routes = ['/','/documentation', '/examples', '/tickets', '/test', '/demo/:demoName'];

routes.forEach(function (route){

  app.get(route, function(req, res) {
      res.sendfile('./build/index.html');
  });

});

app.get('/editor',function(req,res){
    res.sendfile('./app/views/editor/index.html');
});

app.post('/tickets', function (req, res){

    var topSlice    = '{"tickets":',
        filling     = JSON.stringify(req.body),
        bottomSlice = "}",
        sandwich    = topSlice+filling+bottomSlice,
        response    = {};

    fs.writeFile("build/api/tickets.json", sandwich, function(err) {

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

console.log("Express server listening on port 3000");
