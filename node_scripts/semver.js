var fs      = require('fs');
var file    = 'app/api/version.json';
var obj     = JSON.parse(fs.readFileSync(file, 'utf8'));
var version = obj.version;


var data =  "// @includes" + "\n" +
            "// Version " + version + "\n" +
            "// =============" + "\n" +
            "// A library of sass mixins for awesome modern interfaces. If you need it... @include it!" + "\n" +
            "// Website : http://dannyoz.github.io/" + "\n" +
            "// Repository : https://github.com/dannyoz/includes/" + "\n" +
            "// ------------------------------------------------------------------------" + "\n" +
            "// Released under the MIT license" + "\n" +
            "// https://github.com/dannyoz/includes/blob/master/MIT-LICENSE.txt" + "\n" +
            "// ------------------------------------------------------------------------"


fs.writeFile("app/_app-version.scss", data, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log('updated to version ' + version);
});
