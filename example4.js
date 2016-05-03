// http://www.cburch.com/cs/340/reading/nodejs/

var http = require('http');
var url = require('url');

var path = require('path');
var fs = require('fs');

var mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css'
};

function processRequest(request, response) {
    "use strict";
    
    var pathname = url.parse(request.url).pathname;
    console.log('Requested ' + pathname);
    
    var lookup = path.basename(decodeURI(request.url)), //|| 'index.html',
        f = lookup;
    

    fs.exists(f, function (exists) {
        if (exists) {
            fs.readFile(f, function (err, data) {
                if (err) {
                    response.writeHead(500);
                    response.end('Server Error!'); return;
                }
                var headers = {
                    'Content-type': mimeTypes[path.
                extname(lookup)]
                };
                response.writeHead(200, headers);
                response.end(data);
            });
         // return;
        }

        else {
        
            response.writeHead(1000, { 'Content-Type': 'text/html' });
            response.write('<!DOCTYPE html><html ><head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>' + 'Yay Node!' + '</title>');
            response.write('<link rel=stylesheet href=/styles/styles.css rel=stylesheet />');
            response.write('<script src=/oldscripts/script.js type=text/javascript></script>');
            response.write('</head><body>');
            
            response.write('<h1><tt>' + 'jan' + '</tt></h1>');
            response.write('<script type="text/javascript">test()</script>')
            //response.write('<script type="text/javascript">script.onload = function () { alert("from html Node!")}; </script>')
            response.write('<input id="clickMe" type="button" value="clickme" onclick="test()" />')
            response.write('</body></html>');
            response.end();
        
        
        
        
        
        
        }


        });
    

    
    
    
    
    
    
    
    
    
    

    
  
};

   http.createServer(processRequest).listen(8888);


//  C:\Users\jan\documenten\visual studio 2013\Projects\NodejsWebApp1\NodejsWebApp1\old scripts

// cd documenten\visual studio 2013\Projects\NodejsWebApp1\NodejsWebApp1\old scripts