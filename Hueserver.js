//// <reference path="../NodejsWebApp1/device.ts"/>
// http://www.cburch.com/cs/340/reading/nodejs/
///// <reference path="jillesrequestfile1.ts"/>
//// <reference path="sqlite.ts"/>
//// <reference path="bridgedatastore.ts"/>
///tese
//import https = require("https");
var http = require('http');
var url = require('url');
var io = require('socket.io');
var path = require('path');
var fs = require('fs');
var req = require("./jillesrequestfile2");
var datastore = require("./bridgedatastore");
var events = require('events');
var sys = require("sys");
var rfxcom = require("./jillesrfxcom");
var device = require("./device");
var createtable = require("./createtableserverside");
var sqdb = require("./sqlite");
var HueServer;
(function (HueServer) {
    //var choosendevice = "chd"
    //createtable.createtableserverside.createjsonclienttable(socketclient, choosendevice);
    device.devicemodule.instantiatedevices();
    var mimeTypes = {
        '.js': 'text/javascript',
        '.html': 'text/html',
        '.css': 'text/css'
    };
    var dummy = function () { };
    process.on('uncaughtException', function (err) {
        console.error(err.stack);
        console.log("Node NOT Exiting...");
    });
    var writehtml = function (response) {
        response.writeHead(1000, { 'Content-Type': 'text/html' });
        response.write('<!DOCTYPE html><html ><head>');
        response.write('<meta charset="utf-8">');
        // response.write('<title>' + 'JillesNodeServer' + '</title>');
        //response.write('<link rel=stylesheet href=../styles/styles.css rel=stylesheet />');
        // response.write('<link rel=stylesheet href=../styles/menustyles.css rel=stylesheet />');
        response.write('<script src=../Scripts/socket.io.js type=text/javascript></script>');
        // response.write('<script src="https://cdn.socket.io/socket.io-1.0.0.js"></script>');
        response.write('<script src=../Scripts/script2.js type=text/javascript></script>');
        response.write('</head><body>');
        // response.write('<h1><tt><div id=yay>' + 'JillesNodeServer' + '</div></tt></h1>');
        //response.write('<script type="text/javascript">createmenu()</script>');
        //  response.write('<script type="text/javascript">window.onload = function () { alert("from html Node server!")}; </script>')
        //response.write("<div id=tableplaceholder></div>");
        //response.write('<script type="text/javascript">createparenttable()</script>')
        //response.write('<input id="FindLocalBridge" type="button" value="FindLocalBridge" onclick="discoverlocalhuebridge2()" />')
        //response.write('<input id="AddUserToBridge" type="button" value="AddUser" onclick="addusertobridge()" />')
        //response.write('<input id="GetDataStore" type="button" value="GetData" onclick="getdatastore()" />')
        //response.write('<input id="clearPage" type="button" value="clear" onclick="clearpage()" />')
        response.write('</body></html>');
        response.end();
    };
    var writehtmlrfxcom = function (response) {
        response.writeHead(1000, { 'Content-Type': 'text/html' });
        response.write('<!DOCTYPE html><html ><head>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('this is the rfxcom page');
        // response.write('<h1><tt><div id=yay>' + 'JillesNodeServer' + '</div></tt></h1>');
        //response.write('<script type="text/javascript">createmenu()</script>');
        //  response.write('<script type="text/javascript">window.onload = function () { alert("from html Node server!")}; </script>')
        //response.write("<div id=tableplaceholder></div>");
        //response.write('<script type="text/javascript">createparenttable()</script>')
        //response.write('<input id="FindLocalBridge" type="button" value="FindLocalBridge" onclick="discoverlocalhuebridge2()" />')
        //response.write('<input id="AddUserToBridge" type="button" value="AddUser" onclick="addusertobridge()" />')
        //response.write('<input id="GetDataStore" type="button" value="GetData" onclick="getdatastore()" />')
        //response.write('<input id="clearPage" type="button" value="clear" onclick="clearpage()" />')
        response.write('</body></html>');
        response.end();
    };
    // start of dbase management
    var bridg;
    sqdb.dbase.checkdbase();
    function processRequest(request, response) {
        "use strict";
        // http://stackoverflow.com/questions/6011984/basic-ajax-send-receive-with-node-js
        var j = request.url;
        var b = request.headers;
        var c = request.connection.remoteAddress;
        response.setTimeout(0);
        if (request.method === 'POST') {
            var data = '';
            request.on('data', function (chunk) {
                data += chunk;
            });
            request.on('end', function () {
                // parse the data
                console.log("posted back data :  " + data);
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write('hello world');
                response.write("nice");
                response.end();
                //response.writeHead(200, { "Content-Type": "text/plain" });
                // response.write('{"trkst" : "request arrived"}');
                //   response.end('{"trkst" : "request arrived"}');
                //https.request(request.options, request.callback).end();
                //console.log("huebridgeinfo:  " + request.data)
            });
        }
        var gh = request.method;
        var pathname = url.parse(request.url).pathname; // url pathname
        console.log('Requested ' + pathname);
        var lookup = path.basename(decodeURI(request.url)); //|| 'index.html',
        var d = path.dirname(decodeURI(request.url));
        var f = lookup;
        var p = "." + pathname; // fs pathname 
        //  var jil = fs.lstat(p);
        //  console.log(String(jil))
        fs.exists(p, function (exists) {
            if (exists && !(f == "")) {
                fs.readFile(p, function (err, data) {
                    if (err) {
                        response.writeHead(500);
                        response.end('Server Error!');
                        return;
                    }
                    var headers = {
                        'Content-type': mimeTypes[path.
                            extname(lookup)]
                    };
                    response.writeHead(200, headers);
                    response.end(data);
                });
            }
            else {
                switch (pathname) {
                    case '/':
                        writehtml(response);
                        HueServer.writetopage = response;
                        break;
                    case '/rfxcompage':
                        writehtml(response);
                        //  writehtmlrfxcom(response);
                        //writetopage = response;
                        break;
                }
            }
        });
    }
    ;
    //sqdb.dbase.getallbridgerowsdbase();
    var server = http.createServer(processRequest); // to get object for io
    //server.listen({host: "10.10.10.4" , port : 8080});
    server.listen(8888, '10.10.10.4');
    //req.jil.askhueinfo();
    console.log("     ");
    console.log(req.jil.cache);
    // http://chrislarson.me/content/chris-larson/beginners-guide-nodejs-socketio-and-express-framework-first-application
    // http://holtcode.blogspot.nl/2012/12/typescript-nodejs-development-part-4.html
    var sio = io.listen(server);
    //http://stackoverflow.com/questions/5636461/socket-io-io-is-not-defined-js-error
    var stdin = process.stdin;
    var serverEmitter = new events.EventEmitter();
    function emitandrecieve() {
        sio.sockets.on('connection', function (socket) {
            HueServer.socketclient = socket;
            createmenu();
            createpage();
            fillrowstable();
            socket.emit('news', { hello: 'world' });
            socket.on('my other event', function (data) {
                console.log(data);
                serverEmitter.on('newPage', function (data) {
                    // this message will be sent to all connected users
                    socket.emit('newPage', data);
                });
                var f = 5;
            });
            socket.on('discoverlocalbridge2', function (data) {
                // this message will be sent to all connected users
                req.jil.askhueinfo();
            });
            socket.on('addusertobridge', function (data) {
                req.jil.addusertobridge(datastore.datafrombridge.bridge, datastore.datafrombridge.guid);
                var g = 5;
            });
            socket.on('getdatastore', function (data) {
                req.jil.getdatastore(datastore.datafrombridge.bridge, datastore.datafrombridge.guid, dummy);
                observelights(datastore.datafrombridge.bridge, datastore.datafrombridge.guid);
                var g = 5;
            });
            socket.on('showlights', function (data) {
                passlightstopage(datastore.datafrombridge.lights);
                var g = 5;
            });
            socket.on('clearpage', function (data) {
                HueServer.writetopage.writeHead(1000, { 'Content-Type': 'text/html' });
                HueServer.writetopage.write('<!DOCTYPE html><html ><head>');
                HueServer.writetopage.write('<meta charset="utf-8">');
                HueServer.writetopage.write('<title>' + 'Hue Node!' + '</title>');
                HueServer.writetopage.write('</head><body>');
                HueServer.writetopage.write('</body></html>');
                HueServer.writetopage.end();
            });
            socket.on('createcanvas', function (data) {
                req.jil.getdatastore(datastore.datafrombridge.bridge, datastore.datafrombridge.guid, dummy);
                var b = datastore.datafrombridge.datastore;
                var bjson = JSON.stringify(b);
                HueServer.socketclient.emit('canvascreatepage', bjson);
            });
            //  to do guid//
            socket.on('lightstatecontrol', function (datajsonstring) {
                req.jil.sendlightstatecontrol(datastore.datafrombridge.bridge, datastore.datafrombridge.guid, datajsonstring);
            });
            socket.on('lightscolorcontrol', function (datajsonstring) {
                req.jil.sendlightpointscolor(datastore.datafrombridge.bridge, datastore.datafrombridge.guid, datajsonstring);
            });
            socket.on('rfxcomport', function (datajsonstring) {
                if (!rfxcom.jillesrfxcom.isinitalised) {
                    var data = JSON.parse(datajsonstring);
                    var com = data.rfxcomport;
                }
                ;
            });
            socket.on('getcomports', function (datajsonstring) {
                var scpjson;
                var serialPort = require("serialport");
                var a = function () {
                    serialPort.list(function (err, ports) {
                        var portseffective = [];
                        ports.forEach(function (port) {
                            if (port.pnpId !== "") {
                                portseffective.push(port.comName);
                            }
                        });
                        scpjson = JSON.stringify(portseffective);
                        var jil = 5;
                        HueServer.socketclient.emit("comports", scpjson);
                    });
                };
                a();
            }); // socket on get comports
            socket.on('getcomports1', function (datajsonstring) {
                var scpjson;
                var serialPort = require("serialport");
                var a = function () {
                    serialPort.list(function (err, ports) {
                        var portseffective = [];
                        ports.forEach(function (port) {
                            if (port.pnpId !== "") {
                                portseffective.push(port.comName);
                            }
                        });
                        scpjson = JSON.stringify(portseffective);
                        var jil = 5;
                        HueServer.socketclient.emit("comports1", scpjson);
                    });
                };
                a();
            }); // socket on get comports
            socket.on('getmasters', function (datajsonstring) {
                var propertymaster = {};
                var propertyio = {};
                var propertytype = {};
                var allproperties = {};
                var tst = JSON.stringify(device.devicemodule.Devicemaster);
                var ndm = device.devicemodule.Devicetype;
                var test = JSON.stringify(ndm);
                //plugin
                for (var propt in device.devicemodule.Devicemaster) {
                    if (isNaN(propt)) {
                        propertymaster[propt] = device.devicemodule.Devicemaster[propt];
                    }
                }
                allproperties['propertymaster'] = propertymaster;
                //io
                for (var propt in device.devicemodule.Devicesubtype) {
                    if (isNaN(propt)) {
                        propertyio[propt] = device.devicemodule.Devicesubtype[propt];
                    }
                }
                allproperties['propertyio'] = propertyio;
                // master or slave
                for (var propt in device.devicemodule.Devicetype) {
                    if (isNaN(propt)) {
                        propertytype[propt] = device.devicemodule.Devicetype[propt];
                    }
                }
                allproperties['propertytype'] = propertytype;
                var json = JSON.stringify(allproperties);
                HueServer.socketclient.emit("masters", json);
            });
            socket.on('devseldone', function (datajsonstring) {
                device.devicemodule.Devicefunctions.selectenddevice(datajsonstring);
                var jil = 5;
                var selectedenddevicenames = {};
                var sednJson;
                for (var i = 0; i < device.devicemodule.devlists.selectedenddevices.length; i++) {
                    selectedenddevicenames[device.devicemodule.devlists.selectedenddevices[i].name] = device.devicemodule.devlists.selectedenddevices[i].name;
                }
                sednJson = JSON.stringify(selectedenddevicenames);
                socket.emit("selecteddevices", sednJson);
                jil = 5;
            });
            socket.on('devicechoosedone', function (datajasonstring) {
                var choosendevicename = JSON.parse(datajasonstring);
                var choosendevice;
                for (var i = 0; i < device.devicemodule.devlists.selectedenddevices.length; i++) {
                    if (device.devicemodule.devlists.selectedenddevices[i].name = choosendevicename) {
                        choosendevice = device.devicemodule.devlists.selectedenddevices[i];
                        var jil = 5;
                        createtable.createtableserverside.createjsonclienttable(HueServer.socketclient, choosendevice);
                    }
                }
            });
            socket.on('test', function (datajsonstring) {
                var data = JSON.parse(datajsonstring);
                var com = data.rfxcomport;
                rfxcom.jillesrfxcom.test(com);
            }); // socket on test
            socket.on('switchwithparameters', function (datajsonstring) {
                rfxcom.jillesrfxcom.routerdevice(datajsonstring);
            });
            socket.on('adddevice', function (datajsonstring) {
                sqdb.dbase.adddevicetodbase(datajsonstring);
            });
            socket.on("createdevicetable", function () {
                createtable.createtableserverside.createdevicetablewithjson(HueServer.socketclient, device.devicemodule.devices);
            });
        }); //sio.sockets.on
    }
    ; // emitandreceive
    emitandrecieve();
    //http://stackoverflow.com/questions/8588895/node-js-socket-io-broadcast-from-server-rather-than-from-a-specific-client
    stdin.addListener("data", function (d) {
        // note:  d is an object, and when converted to a string it will
        // end with a linefeed.  so we (rather crudely) account for that  
        // with toString() and then substring() 
        console.log("you entered: [" +
            d.toString().substring(0, d.length - 1) + "]");
        //serverEmitter.emit('newFeed', req.jil.cache);
        HueServer.socketclient.emit('newPage', req.jil.cache);
    });
    var b = 5;
    var data = { key: "value" };
    function fillrowstable() {
        var callback = function (err, results) {
            var g = results;
            var d = g[0];
            datastore.datafrombridge.bridge = d;
            if (datastore.datafrombridge.bridge[0] !== "{") {
                if (sqdb.dbase.dbaseExists) {
                    HueServer.socketclient.emit('newPage', JSON.stringify(datastore.datafrombridge.bridge));
                }
                ;
            }
            ;
        };
        function findipbridge(callback) {
            if (sqdb.dbase.dbaseExists) {
                var db = sqdb.dbase.db;
                var sqlgetallrows = "SELECT * FROM Bridges ";
                var f = db.all(sqlgetallrows, callback);
                var g = [];
                g[0] = f;
                var d = JSON.stringify(g[0]);
            }
            ;
        }
        ;
        findipbridge(callback);
    }
    ;
    function passlightstopage(lights) {
        HueServer.socketclient.emit('lights', JSON.stringify(lights));
    }
    ;
    function createmenu() {
        var menu = {};
        menu["menuitems"] = {};
        var menuitems = menu["menuitems"];
        for (var i = 1; i < 6; i++) {
            menuitems["menuitem" + i] = { id: "menuitem" + i };
            menuitems["menuitem" + i]["submenu"] = {};
            menuitems["menuitem" + i]["submenu"]["id"] = "submenu" + i;
            for (var j = 1; j < 7; j++) {
                menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j] = { id: "submenuitem" + i + j };
                menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["sub2menu"] = {};
                menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["sub2menu"]["id"] = "subsubmenu" + i + j;
                for (var k = 1; k < 8; k++) {
                    menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["sub2menu"]["sub2menuitem" + i + j + k] = { id: "sub2menuitem" + i + j + k };
                }
            }
        }
        var b = JSON.stringify(menu);
        HueServer.socketclient.emit('topMenu', b);
    }
    function createpage() {
        HueServer.socketclient.emit('createPage');
    }
    function updatelights(data) {
        HueServer.socketclient.emit("UpdateLights", data);
    }
    HueServer.updatelights = updatelights;
    function observelights(br, gu) {
        var torepeat = function (br, gu) {
            req.jil.getlights(br, gu, updatelights);
        };
        setInterval(function () { torepeat(br, gu); }, 15000);
    }
})(HueServer = exports.HueServer || (exports.HueServer = {}));
//# sourceMappingURL=Hueserver.js.map