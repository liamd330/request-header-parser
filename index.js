
var express = require("express");
var app = express();


var port = process.env.PORT || 8000;


app.get('/', function (request, response) {
    
    var ip = request.headers['x-forwarded-for'];
    var language = JSON.stringify(request.headers["accept-language"]);
    var os = JSON.stringify(request.headers["user-agent"]);
    
    finalObj = {
        "ip" : ip,
        "language" : language.slice(1, 6),
        "operating system" : os.slice(os.indexOf("(") + 1, os.indexOf(")"))
    }

        response.end(JSON.stringify(finalObj));
        });
        
app.listen(port);