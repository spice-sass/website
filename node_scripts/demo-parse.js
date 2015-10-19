var fs = require('fs'),
    demoPath = './app/demos/',
    dest = './demos/' ,
    demos = fs.readdirSync(demoPath),
    obj   = {};

obj.demos = new Array();

demos.forEach(function(demo, index){

  // Create static html files --
  var indexFile = demoPath+demo+"/index.html",
      destFile  = dest + demo + "/index.html";

  var head = '<!DOCTYPE html>'  + "\n" +
             '<html ng-app="includes">'  + "\n" +
             '<head>' + "\n" +
              	'<meta charset="UTF-8">' + "\n" +
              	'<meta name="viewport" content="width=device-width">' + "\n" +
                '<meta name="viewport" content="width=device-width">' + "\n" +
              	'<link rel="stylesheet" type="text/css" media="all" href="../../css/'+demo+'.demo.css">' + "\n" +
             '</head>' + "\n" +
             '<body>' + "\n" ;

  var footer = "\n" + '</body>'  + "\n" +
               '</html>';

  fs.readFile(indexFile, function (err, data) {
    if (err) throw err;

    fs.writeFile(destFile, head+data+footer, function (err) {
      if (err) throw err;
      console.log(demo +' demo index file saved');
    });

  });

  // Create json api for demos
  var jsonFile = demoPath+demo+"/navdata.json";

  fs.readFile(jsonFile, function (err, data) {
      if (err) throw err;

      var desc = JSON.parse(data).description;

      var newObj = {
        "title" : demo,
        "desc" : desc
      }

      obj.demos.push(newObj);


      if(index === (demos.length-1)){

        var data = JSON.stringify(obj);
        
        fs.writeFile('./app/api/demos.json', data, function (err) {
          if (err) throw err;
          console.log('demo api file saved');
        });
      }

  });

});
