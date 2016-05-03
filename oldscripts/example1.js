var http = require('http');
http.createServer(function (req, res)
{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World from jilles\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

// C:\Users\jan\documenten\visual studio 2013\Projects\nodejs1\example.js

// cd documenten\visual studio 2013\Projects\nodejs1

// .\Program\s\Files\nodejs\jilles\example1.js