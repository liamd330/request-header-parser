
var express = require("express");
var app = express();


var port = process.env.PORT || 8000;


app.get('/', function (request, response) {
    
    var ip = request.connection.remoteAddress;
    var language = JSON.stringify(request.headers["accept-language"]);
    var os = JSON.stringify(request.headers["user-agent"]);
    
    finalObj = {
        "ip" : ip,
        "language" : language,
        "operating system" : os
    }

        response.end(JSON.stringify(finalObj));
        });
        
app.listen(port);