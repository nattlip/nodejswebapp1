import http = require('http');






export module homey
{

  function  speak() {
    //  TODO:  check if bridge is in dabse , if not add, add other paramters(name and mac to dbase)
    // functinalise bridge on local netword after add user and when proram starts.

    var callback2: any = function (response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
            var jil = 5;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            console.log("end" + str);
            var cache2 = str;

            //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
            // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
            // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
            var jil: any = 5;

            //  /api/1234567890 / config / whitelist / ffffffff9b36c4b97dce8ed17dce8ed1
        });

        var jil: any = 5;
        }

    //POST / api / managers / speech - output / HTTP / 1.1
    //Authorization: Bearer 3d80d516- 82b9- 4587 - 8140 - 4fefb383fec8
    //Content - Type: application / json
    //Host: homey.local:8000
    //Connection: close
    //Content - Length: 26
    //http://192.168.10.17:80/?bearer_token=9eea96aee4fe7fa2ed51333c54e12ef94be7263a
    //{
    //    "text": "Hello world"
    //}
          //       192.168.10.17/api/managers/speech - output/{ "text": "Hello world" }'
   // https://github.com/request/request


    var sendstring2 = '{ "text" : "hello" }'

    var options2: any = {
        host: "192.168.10.17",
        port: 80,
        path: '/api/manager/speech-output/',
        method: 'POST',
       //Connection: "close",
        headers: {
            'Content-Type': 'application/json',
         
          
               'Authorization' : "Bearer 9eea96aee4fe7fa2ed51333c54e12ef94be7263a",
          
            
            
            
            
               'Content-Length': sendstring2.length
        }



    };

    // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"

    var sendstring = { "devicetype": "hue#iphone peter", "username": "1234567890" }

    

   

    var req = http.request(options2, callback2);
    req.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
         var jil = 5;
    });
    req.write(sendstring2);
    req.end();

    
}

    function getspeak() {
        //  TODO:  check if bridge is in dabse , if not add, add other paramters(name and mac to dbase)
        // functinalise bridge on local netword after add user and when proram starts.

        var callback2: any = function (response) {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
                var jil = 5;
            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                console.log("end" + str);
                var cache2 = str;

                //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
                // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
                // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil: any = 5;

                //  /api/1234567890 / config / whitelist / ffffffff9b36c4b97dce8ed17dce8ed1
            });

            var jil: any = 5;
        }

        //POST / api / managers / speech - output / HTTP / 1.1
        //Authorization: Bearer 3d80d516- 82b9- 4587 - 8140 - 4fefb383fec8
        //Content - Type: application / json
        //Host: homey.local:8000
        //Connection: close
        //Content - Length: 26
        //http://192.168.10.17:80/?bearer_token=9eea96aee4fe7fa2ed51333c54e12ef94be7263a
        //{
        //    "text": "Hello world"
        //}
        //       192.168.10.17/api/managers/speech - output/{ "text": "Hello world" }'
        // https://github.com/request/request


        var options2: any = {
            host: "192.168.10.17",
            port: 80,
            path: '/api/manager/speech-input/agents',
            method: 'GET',
            // Connection: "close",
            headers: {
                'Content-Type': 'application/json',


                'Authorization': "Bearer 9eea96aee4fe7fa2ed51333c54e12ef94be7263a",





              //  'Content-Length': 27
            }



        };

        // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"

        var sendstring = { "devicetype": "hue#iphone peter", "username": "1234567890" }

        var sendstring2 = '{ "text" : "Hello Jeroen" }'

        var req = http.request(options2, callback2);
        req.on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
            var jil = 5;
        });
       
        req.end();


    }


    function ledring() {
        //  TODO:  check if bridge is in dabse , if not add, add other paramters(name and mac to dbase)
        // functinalise bridge on local netword after add user and when proram starts.

        var callback2: any = function (response) {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
                var jil = 5;
            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                console.log("end" + str);
                var cache2 = str;

                //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
                // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
                // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil: any = 5;

                //  /api/1234567890 / config / whitelist / ffffffff9b36c4b97dce8ed17dce8ed1
            });

            var jil: any = 5;
        }

        //POST / api / managers / speech - output / HTTP / 1.1
        //Authorization: Bearer 3d80d516- 82b9- 4587 - 8140 - 4fefb383fec8
        //Content - Type: application / json
        //Host: homey.local:8000
        //Connection: close
        //Content - Length: 26
        //http://192.168.10.17:80/?bearer_token=9eea96aee4fe7fa2ed51333c54e12ef94be7263a
        //{
        //    "text": "Hello world"
        //}
        //       192.168.10.17/api/managers/speech - output/{ "text": "Hello world" }'
        // https://github.com/request/request

    //    var animation = new Animation({
    //        options: {
    //            fps: 1, 	// real frames per second
    //            tfps: 60, 	// target frames per second. this means that every frame will be interpolated 60 times
    //            rpm: 0,	// rotations per minute
    //        },
    //        frames: [],
    //        priority: 'CRITICAL' // or FEEDBACK, or INFORMATIVE
    //duration: 3000 // duration in ms, or keep empty for infinite
    //    })

        var animation = {

                  options: {
                fps: 1, 	// real frames per second
                tfps: 60, 	// target frames per second. this means that every frame will be interpolated 60 times
                rpm: 0,	// rotations per minute
            },

                  frames: [],
            priority: 'CRITICAL',
            duration: 3000



        }

        var animation2 = {






        }




        var sendstring2 = "";
        
        var frame = [];
        var frames = [];

        for (var j = 0; j < 24; j++) {

           

            var pixel = { r: 0, g: 0, b : 0};          
               pixel.r = 0, // 0 - 255
               pixel.g = 255 ,// 0 - 255
               pixel.b = 0  // 0 - 255
          
            //var pixel = [];
            //pixel.push(0);
            //pixel.push(255);
            //pixel.push(0);

            frame.push(pixel)

        }

        for (var i = 0; i < 10; i++) {



            frames.push(frame);
        }

        animation.frames = frames;

        var sendobject = {
        
            // animation name (choose from loading, pulse, progress, solid)
            name: 'solid',
    
            // optional animation-specific options
            options: {

                color: 'green',
                rpm: 300 // change rotations per minute
            },
    
            // priority
            priorety: 'INFORMATIVE',
    
            // duration
            duration: 5000   // Duration in miliseconds, so 5000 is 5 seconds
    
            // callback
           
        }

        sendstring2 = JSON.stringify(sendobject)

       // sendstring2 = JSON.stringify(animation);

        var jil = 5;

        var options2: any = {
            host: "192.168.10.17",
            port: 80,
            path: '/api/manager/ledring/',
            method: 'POST',
            // Connection: "close",
            headers: {
                'Content-Type': 'application/json',


                'Authorization': "Bearer 9eea96aee4fe7fa2ed51333c54e12ef94be7263a",





                'Content-Length': sendstring2.length
            }



        };

        // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"

        var sendstring = { "devicetype": "hue#iphone peter", "username": "1234567890" }





        var req = http.request(options2, callback2);
        req.on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
            var jil = 5;
        });
        req.write(sendstring2);
        req.end();


    }



    function voice() {
        //  TODO:  check if bridge is in dabse , if not add, add other paramters(name and mac to dbase)
        // functinalise bridge on local netword after add user and when proram starts.

        var callback2: any = function (response) {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
                var jil = 5;
            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                console.log("end" + str);
                var cache2 = str;

                //  "[{"error":{"type":101,"address":"","description":"link button not pressed"}}]"
                // "[{"error":{"type":2,"address":"","description":"body contains invalid json"}}]"
                // "[{"success":{"username":"abd7825e - aa9d - c301 - 8e4a - 3e6de64a8aaf"}}]"
                var jil: any = 5;

                //  /api/1234567890 / config / whitelist / ffffffff9b36c4b97dce8ed17dce8ed1
            });

            var jil: any = 5;
        }

        //POST / api / managers / speech - output / HTTP / 1.1
        //Authorization: Bearer 3d80d516- 82b9- 4587 - 8140 - 4fefb383fec8
        //Content - Type: application / json
        //Host: homey.local:8000
        //Connection: close
        //Content - Length: 26
        //http://192.168.10.17:80/?bearer_token=9eea96aee4fe7fa2ed51333c54e12ef94be7263a
        //{
        //    "text": "Hello world"
        //}
        //       192.168.10.17/api/managers/speech - output/{ "text": "Hello world" }'
        // https://github.com/request/request


        var sendstring2 = ' { "volume" :  1 } '

        var options2: any = {
            host: "192.168.10.17",
            port: 80,
            path: '/api/manager/speaker/',
            method: 'PUT',
            // Connection: "close",
            headers: {
               'Content-Type': 'application/json',


                'Authorization': "Bearer 9eea96aee4fe7fa2ed51333c54e12ef94be7263a",





              'Content-Length': sendstring2.length
            }



        };

        // "abd7825e-aa9d-c301-8e4a-3e6de64a8aaf"

        





        var req = http.request(options2, callback2);
        req.on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
            var jil = 5;
        });
        req.write(sendstring2);
        req.end();


    }











  speak();
   // ledring();

  // voice();




}