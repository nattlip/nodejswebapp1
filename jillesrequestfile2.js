var https = require("https");
var sqdb = require("./sqlite");
var http = require('http');
var datastore = require("./bridgedatastore");
var cc2 = require("./colorconverter2");
var HueS = require("./Hueserver");
var jil;
(function (jil_1) {
    //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
    var options = {
        host: 'www.meethue.com',
        path: '/api/nupnp',
    };
    var callback = function (response) {
        var str = '';
        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });
        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            console.log("end" + str);
            jil_1.cache = str;
            var brobjarr = [];
            brobjarr = JSON.parse(str);
            jil_1.discoveredlocalbridge = brobjarr[brobjarr.length - 1];
            sqdb.dbase.checkbridge(jil_1.discoveredlocalbridge.id, jil_1.discoveredlocalbridge.internalipaddress, jil_1.discoveredlocalbridge.macaddress, jil_1.discoveredlocalbridge.name);
            var sendstring = "";
            writesimplestringonscreen(jil_1.discoveredlocalbridge.id + "   " + jil_1.discoveredlocalbridge.internalipaddress);
            var jil = 5;
        });
        var jil = 5;
    };
    // 
    //  askhueinfo(): void { https.request(this.options, this.callback).end(); }
    //http://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request
    function askhueinfo() {
        https.request(options, callback).end();
    }
    jil_1.askhueinfo = askhueinfo;
    var jil = 5;
    // http://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request
    function addusertobridge(br, guid) {
        //  TODO:  check if bridge is in dabse , if not add, add other paramters(name and mac to dbase)
        // functinalise bridge on local netword after add user and when proram starts.
        var callback2 = function (response) {
            var str = '';
            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });
            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                console.log("end" + str);
                var cache2 = str;
                //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
                // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
                // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil = 5;
                //  /api/1234567890 / config / whitelist / ffffffff9b36c4b97dce8ed17dce8ed1
            });
            var jil = 5;
        };
        var options2 = {
            host: br.internalipaddress,
            path: '/api',
            method: 'POST'
        };
        // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"
        var sendstring = { "devicetype": "hue#iphone peter", "username": "1234567890" };
        var sendstring2 = '{"devicetype":   "NodeJilles" , "username" : "' + guid + '"}';
        var req = http.request(options2, callback2);
        req.write(sendstring2);
        req.end();
    }
    jil_1.addusertobridge = addusertobridge;
    function getdatastore(br, gd, orgfunc) {
        var callback2 = function (response) {
            var str = '';
            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });
            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                console.log("data datastore retrieve completed");
                datastore.datafrombridge.jsonstringdatastore = str;
                datastore.datafrombridge.datastore = datastore.datafrombridge.makeobject(str);
                var b = datastore.datafrombridge.lights;
                var length = Object.keys(b).length;
                //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
                // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
                // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil = 5;
                orgfunc();
            });
            var jil = 5;
        };
        var options2 = {
            host: br.internalipaddress,
            path: '/api/' + gd + '/',
            method: 'GET'
        };
        // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"
        var req = http.request(options2, callback2);
        req.end();
    }
    jil_1.getdatastore = getdatastore;
    function sendlightstatecontrol(br, guid, controldatajson) {
        var callback2 = function (response) {
            var str = '';
            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });
            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                console.log("end" + str);
                //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
                // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
                // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil = 5;
            });
            var jil = 5;
        };
        var controldata = JSON.parse(controldatajson);
        // "{"state":{"1":{"bri":196}}}"
        var id = Object.keys(controldata.state)[0];
        var statevariable = Object.keys(controldata.state[id])[0];
        var statevalue = controldata.state[id][statevariable];
        var options2 = {
            host: br.internalipaddress,
            path: '/api/' + guid + '/lights/' + id + '/state',
            method: 'PUT'
        };
        // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"
        // /api/ < username > /lights/ < id >/state
        //    {
        //	"hue": 50000,
        //	"on": true,
        //	"bri": 200
        //}
        var sendstring = '{  "' + statevariable + '" : ' + statevalue + '}';
        var req = http.request(options2, callback2);
        req.write(sendstring);
        req.end();
    }
    jil_1.sendlightstatecontrol = sendlightstatecontrol;
    function sendlightpointscolor(br, guid, controldatajson) {
        var callback2 = function (response) {
            var str = '';
            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });
            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                console.log("end" + str);
                //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
                // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
                // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil = 5;
            });
            var jil = 5;
        };
        var controldata = JSON.parse(controldatajson);
        //{"config" :{"swupdate":{"checkforupdate":true } } }
        // "{"points":{"4":{"slidervalue":0,"rgb":{"r":170.85,"g":255,"b":180.66750000000002},"onoff":false},"5":{"slidervalue":0,"rgb":{"r":170.85,"g":255,"b":180.66750000000002},"onoff":false}},"bridgehref":"229"}"
        // "{"state":{"1":{"bri":196}}}"
        for (var point in controldata.points) {
            console.log(point);
            console.log(controldata.points[point]);
            console.log("r:   " + controldata.points[point].rgb.r);
            console.log("g:   " + controldata.points[point].rgb.g);
            console.log("b:   " + controldata.points[point].rgb.b);
            var rgb = cc2.colorConverter2.MakeRgbSmallerThenOne(controldata.points[point].rgb);
            var xybri = cc2.colorConverter2.rgbToXyBri(rgb);
            //var id = Object.keys(controldata.state)[0]
            //var statevariable = Object.keys(controldata.state[id])[0];
            //var statevalue = controldata.state[id][statevariable];
            var options2 = {
                host: br.internalipaddress,
                path: '/api/' + guid + '/lights/' + point + '/state',
                method: 'PUT'
            };
            // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"
            //// /api/ < username > /lights/ < id >/state
            ////    {
            ////	"hue": 50000,
            ////	"on": true,
            ////	"bri": 200
            ////}
            // "{""xy"":[" & dblstr(0) & "," & dblstr(1) & "]}"
            var sendstring = '{  "' + 'xy' + '" :[ ' + xybri.x + ',' + xybri.y + ']}';
            var jil = 5;
            var req = http.request(options2, callback2);
            req.write(sendstring);
            req.end();
        }
    }
    jil_1.sendlightpointscolor = sendlightpointscolor;
    function getlights(br, guid, jillescallback) {
        var callback2 = function (response) {
            var str = '';
            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });
            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                console.log("lights retrieve completed");
                var timestamp = new Date;
                console.log(timestamp);
                datastore.datafrombridge.jsonstringlights = str;
                datastore.datafrombridge.lights = datastore.datafrombridge.makeobject(str);
                //  HueS.HueServer.updatelights(datastore.datafrombridge.lights);
                jillescallback(datastore.datafrombridge.lights);
                //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
                // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
                // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil = 5;
            });
            var jil = 5;
        };
        var options2 = {
            host: br.internalipaddress,
            path: '/api/' + guid + '/lights',
            method: 'GET'
        };
        // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"
        var req = http.request(options2, callback2);
        req.end();
    }
    jil_1.getlights = getlights;
    var sendstrings = [];
    function writesimplestringonscreen(sendstring) {
        sendstrings.push(sendstring);
        var jsonsendstrings = JSON.stringify(sendstrings);
        HueS.HueServer.socketclient.emit('simplestringonscreen', jsonsendstrings);
    }
})(jil = exports.jil || (exports.jil = {}));
//# sourceMappingURL=jillesrequestfile2.js.map