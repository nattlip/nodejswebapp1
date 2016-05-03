import http = require('http');



var port = process.env.port || 1337
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<!DOCTYPE html>\
        < html >\
        <head>\
        <title>Yay Node!< / title >\
    <link rel = stylesheet href = styles.css type = text / css >\
    <script src = script.js type = text / javascript >< / script >\
< / head >\
        <body>\
    <span id = yay > Yay!< / span >\
< / body >\
< / html >');
}).listen(port);