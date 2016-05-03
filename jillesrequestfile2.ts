import https = require("https");
import sqdb = require("./sqlite");
import http = require('http');
import datastore = require("./bridgedatastore");
import cc2 = require("./colorconverter2");
import HueS = require("./Hueserver");

export module jil {


  export var discoveredlocalbridge;

    export  var  cache: string;

        //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
      var  options: any = {
            host: 'www.meethue.com',
            path: '/api/nupnp',
            //method: 'GET'
        };


       var  callback: any = function (response) {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;

            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                console.log("end" + str);
                cache = str;
                var brobjarr = [];
                 brobjarr = JSON.parse(str);

                discoveredlocalbridge = brobjarr[brobjarr.length - 1];



                sqdb.dbase.checkbridge(discoveredlocalbridge.id, discoveredlocalbridge.internalipaddress, discoveredlocalbridge.macaddress, discoveredlocalbridge.name)
             
                var sendstring = "";

                writesimplestringonscreen(discoveredlocalbridge.id + "   " + discoveredlocalbridge.internalipaddress)



                


                var jil: any = 5;


            });

            var jil: any = 5;
        }


  // 

      //  askhueinfo(): void { https.request(this.options, this.callback).end(); }
   //http://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request
    export function askhueinfo()
    {    



        https.request(options, callback).end();
       
        }

       var jil = 5;









   // http://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request

    export function addusertobridge(br,guid)
{
  //  TODO:  check if bridge is in dabse , if not add, add other paramters(name and mac to dbase)
        // functinalise bridge on local netword after add user and when proram starts.

        var callback2: any = function (response)
        {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk)
            {
                str += chunk;

            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function ()
            {
                console.log("end" + str);
            var    cache2 = str;

             //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
               // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
               // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil: any = 5;

              //  /api/1234567890 / config / whitelist / ffffffff9b36c4b97dce8ed17dce8ed1
            });

            var jil: any = 5;
        }

        var options2: any = {
            host: br.internalipaddress,
            path: '/api',
            method: 'POST'
        };

     // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"

        var sendstring = { "devicetype": "hue#iphone peter", "username": "1234567890" }

        var sendstring2 = '{"devicetype":   "NodeJilles" , "username" : "' + guid +'"}'

       var req = http.request(options2, callback2);
        req.write(sendstring2);
          req.end();


}

    export function getdatastore(br,gd,orgfunc)
    {
        var callback2: any = function (response)
        {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk)
            {
                str += chunk;

            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function ()
            {
                console.log("data datastore retrieve completed" );
                datastore.datafrombridge.jsonstringdatastore = str;

                datastore.datafrombridge.datastore = datastore.datafrombridge.makeobject(str);

                var b = datastore.datafrombridge.lights

                var length = Object.keys(b).length


                //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
                // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
                // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil: any = 5;

                orgfunc();


            });

            var jil: any = 5;
        }
                
var options2: any = {
            host: br.internalipaddress,
            path: '/api/'+gd+'/',
            method: 'GET'
        };
        // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"

    

       var req = http.request(options2, callback2);
        req.end();



    }

    



    export function sendlightstatecontrol(br, guid, controldatajson)
    {


        var callback2: any = function (response)
        {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk)
            {
                str += chunk;

            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function ()
            {
                console.log("end" + str);
              



                //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
                // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
                // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil: any = 5;




            });

            var jil: any = 5;
        }


        var controldata = JSON.parse(controldatajson);

       // "{"state":{"1":{"bri":196}}}"


        var id = Object.keys(controldata.state)[0]
        var statevariable = Object.keys(controldata.state[id])[0];
        var statevalue = controldata.state[id][statevariable];

        var options2: any = {
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

        

        var sendstring: string = '{  "' + statevariable + '" : ' + statevalue + '}';

        

        var req = http.request(options2, callback2);
        req.write(sendstring);
        req.end();






    }


    export function sendlightpointscolor(br, guid, controldatajson)
    {


        var callback2: any = function (response)
        {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk)
            {
                str += chunk;

            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function ()
            {
                console.log("end" + str);
                



                //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
                // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
                // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil: any = 5;




            });

            var jil: any = 5;
        }


        var controldata = JSON.parse(controldatajson);

    //{"config" :{"swupdate":{"checkforupdate":true } } }
        // "{"points":{"4":{"slidervalue":0,"rgb":{"r":170.85,"g":255,"b":180.66750000000002},"onoff":false},"5":{"slidervalue":0,"rgb":{"r":170.85,"g":255,"b":180.66750000000002},"onoff":false}},"bridgehref":"229"}"

        // "{"state":{"1":{"bri":196}}}"

        for (var point in controldata.points)
        {

            console.log(point);
            console.log(controldata.points[point]);
            console.log("r:   " + controldata.points[point].rgb.r);
            console.log("g:   " + controldata.points[point].rgb.g);
            console.log("b:   " + controldata.points[point].rgb.b);

            var rgb: cc2.colorConverter2.Rgb = cc2.colorConverter2.MakeRgbSmallerThenOne(controldata.points[point].rgb);

            var xybri: cc2.colorConverter2.xyBri = cc2.colorConverter2.rgbToXyBri(rgb);

            



            //var id = Object.keys(controldata.state)[0]
            //var statevariable = Object.keys(controldata.state[id])[0];
            //var statevalue = controldata.state[id][statevariable];

            var options2: any = {
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

            var sendstring: string = '{  "' + 'xy' + '" :[ ' + xybri.x  + ',' + xybri.y +']}';

            var jil = 5;

            var req = http.request(options2, callback2);
            req.write(sendstring);
            req.end();
           

        }



    }


    export function getlights(br, guid,jillescallback)
    {
        var callback2: any = function (response)
        {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk)
            {
                str += chunk;

            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function ()
            {
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
                var jil: any = 5;




            });

            var jil: any = 5;
        }

var options2: any = {
            host: br.internalipaddress,
            path: '/api/' + guid + '/lights',
            method: 'GET'
        };
        // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"



        var req = http.request(options2, callback2);
        req.end();



    }


    var sendstrings = [];
   
    function writesimplestringonscreen(sendstring)
    {
        sendstrings.push(sendstring);

       var jsonsendstrings = JSON.stringify(sendstrings);

        HueS.HueServer.socketclient.emit('simplestringonscreen', jsonsendstrings);

    }








}



