// http://www.cburch.com/cs/340/reading/nodejs/

import http = require('http');
import url = require('url');

import path = require('path');
import fs = require('fs');
import sqlite3 = require('sqlite3')
//import express = require('express');

var mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css'
};


var writehtml = function (response)
{

    response.writeHead(1000, { 'Content-Type': 'text/html' });
    response.write('<!DOCTYPE html><html ><head>');
    response.write('<meta charset="utf-8">');
    response.write('<title>' + 'Yay Node!' + '</title>');
    response.write('<link rel=stylesheet href=../styles/styles.css rel=stylesheet />');
    response.write('<script src=../oldscripts/script.js type=text/javascript></script>');
    response.write('</head><body>');

    response.write('<h1><tt><div id=yay>' + 'jan' + '</div></tt></h1>');
    response.write('<script type="text/javascript">test()</script>')
          response.write('<script type="text/javascript">window.onload = function () { alert("from html Node!")}; </script>')
            response.write('<input id="clickMe" type="button" value="clickme" onclick="test()" />')
            response.write('</body></html>');
    response.end();
}



 



function processRequest(request, response) {
    "use strict";

    var pathname = url.parse(request.url).pathname;  // url pathname
    console.log('Requested ' + pathname);

    var lookup = path.basename(decodeURI(request.url)); //|| 'index.html',

   var  d = path.dirname(decodeURI(request.url));
    var     f = lookup;
    var p = "." + pathname;   // fs pathname 






  //  var jil = fs.lstat(p);
     
      //  console.log(String(jil))


        fs.exists(p, function (exists ) {
            if (exists && !(f == "")) {



                fs.readFile(p, function (err, data) {
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

              

                writehtml(response)




            }

       
    });















};

http.createServer(processRequest).listen(8888);


//  C:\Users\jan\documenten\visual studio 2013\Projects\NodejsWebApp1\NodejsWebApp1\old scripts

// cd documenten\visual studio 2013\Projects\NodejsWebApp1\NodejsWebApp1\old scr