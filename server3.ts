// http://www.cburch.com/cs/340/reading/nodejs/

import http = require('http');
import url = require('url');

import path = require('path');
import fs = require('fs');
import express = require('express');

var app = express()

var mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css'
};


var writehtml1 = function (response) {

    var html = [];
    html.push(
        '<!DOCTYPE html > ','<html >','<head>',
       '<meta charset="utf-8">',
        '<title>' ,'Yay Node!' , '</title>',
        '<link rel=stylesheet href=/styles/styles.css rel=stylesheet />',
        '<script src=/oldscripts/script.js type=text/javascript></script>',
        '</head>',
        '<body>',
        '<h1>jan</h1>',
        '<script type="text/javascript">document.onload = function () { alert("from html Node!")}; </script>',
        '<script type="text/javascript">test()</script>',
        '<input id="clickMe" type="button" value="clickme" onclick="test()" />',
        '</body>',
        '</html>')

    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(html.join(""));

    return response


}

var writehtml = function (response) {

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<!DOCTYPE html><html ><head>');
    response.write('<meta charset="utf-8">');
    response.write('<title>' + 'Yay Node!' + '</title>');
    response.write('<link rel=stylesheet href=styles/styles.css rel=stylesheet />');
    response.write('<script src=oldscripts/script.js type=text/javascript></script>');
    response.write('</head><body>');
    response.write('<h1><tt>' + 'jan' + '</tt></h1>');
    response.write('<script type="text/javascript">test()</script>');
   response.write('<script type="text/javascript">document.onload = function () { alert("from html Node!")}; </script>')
    response.write('<input id="clickMe" type="button" value="clickme" onclick="test()" />');
            response.write('</body></html>');
    response.end();
}



var server = require('http').createServer(app);

app.use('/', express.static(__dirname + '/oldscripts'));
app.use('/', express.static(__dirname + '/styles'));



app.all('/index.html', function (request, response) {
    writehtml1(response);
});



server.listen(8888);





//  C:\Users\jan\documenten\visual studio 2013\Projects\NodejsWebApp1\NodejsWebApp1\old scripts

// cd documenten\visual studio 2013\Projects\NodejsWebApp1\NodejsWebApp1\old scr