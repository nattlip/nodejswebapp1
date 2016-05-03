










var http = require('http');
var path = require('path');
var fs = require('fs');
http.createServer(function (request, response) {
    var lookup = path.basename(decodeURI(request.url)) || 'index.html',
  //  f = 'content/' + lookup;
    f = lookup
    fs.exists(f, function (exists) {
        console.log(exists ? lookup + " is there" : lookup + " doesn't exist");

        if (exists) {
fs.readFile(f, function(err, data) {
var headers={'Content-type': mimeTypes[path.extname(lookup)]};
response.writeHead(200, headers);
response.end(data);
});
return;
}














    });
}).listen(8080,'127.0.0.1');
