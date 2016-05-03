//https://github.com/voodootikigod/node-serialport
export import device = require("./device");
 export import sqdb = require("./sqlite");
 export import doma = require("./Domation");


export module jillesrfxcom
{
    var buffer : Array<any> = [];
    export var serialcomarray;
   export var rfxcom = require('rfxcom');
    export var rfxtrx;
   export  var isinitalised: boolean = false;





    export var dumpHex = function (buffer)
    {
      //  prefix = prefix || "";


        var jil = 5;

        console.log("type of buffer is " + (buffer[0]).constructor);
        if (buffer instanceof Array)
        { console.log("buffer is array") }
        else
        {console.log("bufferv is not array") }

       var jil = 5;

        function dec2hex(value)
        {
            var hexDigits = "0123456789ABCDEF";
            return  (hexDigits[value >> 4] + hexDigits[value & 15]);
        }
        return buffer.map(dec2hex);
    };







export var test = function (com)

{
     rfxtrx = new rfxcom.RfxCom(com, { debug: true });
   

    //var jil = 5;

    //var newdoma = new doma.jillesdomation(com);

    //newdoma.open();

//    //rfxtrx.reset = function (callback)
//    //{
//    //    var self = this;
//    //    return self.sendMessage(0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0], callback);

//    //    self.delay(50x00);
//    //    self.flush(function ()
//    //    {
//    //        self.getStatus(callback);
//    //    });


    var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort(com, {
    baudrate: 384000,
    parser: rfxtrx.rfxtrxParser()
});

    serialPort.open(function (error)
    {
        if (error)
        {
            console.log('failed to open: ' + error);
        }
        else
        {
            console.log('open');
            serialPort.on('data', function (data)
            {
                console.log("Received: %s", dumpHex(data));
                console.log("recieved:  " + dumpHex(data));
            });
            buffer = [0x0D, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
            serialPort.write(buffer, function (err, results)
            {
                console.log("Sent    : %s", dumpHex(buffer));
                rfxtrx.delay(500);
                serialPort.flush(function ()
                {
                    buffer = [0x0D, 0x00, 0x00, 0x01, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
                    serialPort.write(buffer, function (err, results)
                    {
                        console.log("Sent    : %s", dumpHex(buffer));
                    }
                        );



                    console.log('err ' + err);
                    console.log('results ' + results);

                    var jil = 5;
                });
            })
        }


    } );





    
//  //rfxtrx.initialise();
    //     jil = 5;
}

//end test

export var kar = [];


  export  var startrfxcom = function(com){
     


    console.log('Hello world');



   // var rfxcom = require('rfxcom');


   
  rfxtrx = new rfxcom.RfxCom(com, { debug: true });
   

    rfxtrx.initialise(function ()
    {
        console.log("Device initialised");
        isinitalised = true;
    });

    rfxtrx.on("ready", function (evt)
    {
        console.log("ready")

   // rollershutterup();

    //for (var i = 0; i < 5; i++)
    //{
      //  switchoff2();
        //}
    }
        )

rfxtrx.on("th1", function (evt)
    {
        console.log('th1');
    });

    rfxtrx.on("th2", function (evt)
    {
        console.log('th2');
    });

    rfxtrx.on("th3", function (evt)
    {
        console.log('th3');
    });

    rfxtrx.on("th4", function (evt)
    {
        console.log('th4');
    });

    rfxtrx.on("th5", function (evt)
    {
        console.log('th5');
        console.log("temp:   " + evt.temperature)

});


    rfxtrx.on("th6", function (evt)
    {
        console.log('th6');
        console.log("id  " + evt.id)
    console.log("temp:   " + evt.temperature);
        console.log("subtype " + evt.subtype);
        console.log("seqnbr " + evt.seqnbr);
        console.log("humidity " + evt.humidity);
        console.log("humidityStatus  " + evt.humidityStatus);
        console.log("batteryLevel  " + evt.batteryLevel);
        console.log("rssi  " + evt.rssi);







    });


    rfxtrx.on("th7", function (evt)
    {
        console.log('th7');
    });


    rfxtrx.on("th8", function (evt)
    {
        console.log('th8');
    });


    rfxtrx.on("th9", function (evt)
    {
        console.log('th9');
    });


    rfxtrx.on("thb1", function (evt)
    {
        console.log('thb1');
        console.log("id  " + evt.id)
    console.log("temp:   " + evt.temperature);
        console.log("subtype " + evt.subtype);
        console.log("seqnbr " + evt.seqnbr);
        console.log("humidity " + evt.humidity);
        console.log("humidityStatus  " + evt.humidityStatus);
        console.log("batteryLevel  " + evt.batteryLevel);
        console.log("rssi  " + evt.rssi);







    });

    rfxtrx.on("thb2", function (evt)
    {
        console.log('thb2');
        console.log("id  " + evt.id)
    console.log("temp:   " + evt.temperature);
        console.log("subtype " + evt.subtype);
        console.log("seqnbr " + evt.seqnbr);
        console.log("humidity " + evt.humidity);
        console.log("humidityStatus  " + evt.humidityStatus);
        console.log("batteryLevel  " + evt.batteryLevel);
        console.log("rssi  " + evt.rssi);
        console.log("baro  " + evt.barometer);
        console.log("forecast" + evt.forecast);


      //  checkifidexists(evt, "thb2")



    });




    rfxtrx.on('status', function (evt)
    {
        console.log('status % s % s detected.', evt.subtype, evt.id);

    });

    rfxtrx.on("temp1", function (evt)
    {
        console.log('temp1');
    });

    rfxtrx.on("temp2", function (evt)
    {
        console.log('temp2');
    });

    rfxtrx.on("temp3", function (evt)
    {
        console.log('temp3');
    });


    rfxtrx.on("temp4", function (evt)
    {
        console.log('temp4');
    });


    rfxtrx.on("temp5", function (evt)
    {
        console.log('temp5');
    });

    rfxtrx.on("temp6", function (evt)
    {
        console.log('temp6');
    });

    rfxtrx.on("temp7", function (evt)
    {
        console.log('temp7');
    });

    rfxtrx.on("temp8", function (evt)
    {
        console.log('temp8');
    });

    rfxtrx.on("temp9", function (evt)
    {
        console.log('temp9');
    });


    // buffer = buffer = [byteCount, type, subtype, cmdId, cmd];
    // example buffer with reset

    var seqnbr = 0x0;

   




 

 

      

     



  };

    var serialPort = require("serialport");

    export var listserialports = function (err,ports)
    {
        var c;
        serialPort.list(function (err, ports)
        {
            // serialcomarray = ports;
            var jil = 5;
            serialcomarray = ports;
          c = ports;
            ports.forEach(function (port)
            {
                console.log(port.comName);
                console.log(port.pnpId);
                console.log(port.manufacturer);


            });
          
        });
     
       
    };

   export var switchon = function ()
    {


        kar[0] = 0x20

        var currentdevice = getdevice("4");
        var currentunit = getunit("A", "4");

        kar[1] = currentunit;
        kar[2] = 0xFF - kar[1];
        kar[3] = currentdevice;
        kar[4] = 0xFF - kar[3];


      //  send(kar);
        var sw2buffer = [0x07, 0x10, 0x00, 0x01,
            "A".charCodeAt(0), 0x04, 0x01, 0];


        send(sw2buffer);



    }

  export var switchoff2 = function ()
   {
       // defines.LIGHTING1 = 0x10
       //self.subtype 
       //cmdId = 0 = off

       //buffer = [0x07, defines.LIGHTING1, self.subtype, cmdId,
       //    device.houseCode, device.unitCode, command, 0];
       // x 10 subtype = 0

       //subtypes = {
       //    0: "X10",
       //    1: "ARC",
       //    2: "ELRO AB40x00D",
       //    3: "Waveman",
       //    4: "EMW20x00",
       //    5: "Impuls",
       //    6: "RisingSun",
       //    7: "Philips SBC"
       //},


       //   commands = {
       //0: "Off",
       //1: "On",
       //5: "All Off",
       //6: "All On",
       //7: "Chime"



       var sw2buffer = [0x07, 0x10, 0x00, 0x01,
           "A".charCodeAt(0), 0x04, 0x00, 0];


       send(sw2buffer);

   }

  export var switchdevice = function (json)
  {
     var jbuffer : Array<number> = []
      var jil = JSON.parse(json);
      var devicecode  = JSON.parse(json).devicecommand.devicecode
      var funct = JSON.parse(json).devicecommand.command


      
      var hc = devicecode.charAt(0);
      var dc = devicecode.charAt(1);
      var dc1 = devicecode.substring(1, 1);

      var currentdevice = getdevice(dc);
      var currentunit = getunit(hc, dc);

      var charcodeD  = hc.charCodeAt(0);

      jbuffer[0] = 0x07;
      jbuffer[1] = 0x10;
      jbuffer[2] = 0x00;
      jbuffer[3] = 0x01;
      jbuffer[4] = hc.charCodeAt(0);
      jbuffer[5] = Number(dc);
      if (funct == "On")
      {
          jbuffer[6] =0x01 }
      if (funct == "Off")
      {
          jbuffer[6] = 0x00
      }
      jbuffer[7] = 0
       jil = 5;

      //var swbuffer = [0x07, 0x10, 0x00, 0x01,
      //    0x41, 0x04, 0x00, 0];

    //  send(jbuffer);

      

     //  var stekkerbuffer2 = [0x0b, defines.LIGHTING2, self.subtype, cmdId, device.idBytes[0],
      //from lightning2 sendcommand
      // 0x0b = length
           // defines.LIGHTING2 = 0x11
           // subtype see index.js = 1 hmeeasy_eu
           // commandid = sequence number
           // unit code 14 = 0E
        //   device.idBytes[1], device.idBytes[2], device.idBytes[3],
         //  device.unitCode, command, level, 0];

      var stekkerbuffer = [0x0b, 0x11, 0x01, 0x04,
           0x01, 0x0A, 0x0A, 0x0A, 0x0E, 0x00, 0x00, 0x00];

// var rgbledbuffer
//http://rfxcom.readthedocs.org/en/latest/ref/protocol/lighting5.html
   //   0x0a = length 
   // defines.lightning5 = 0x14
   // subtype = 0x06 (rgbled)
      //commandid = sequence 0x0a
      //dveciid1 = 06 deviceid2 = 03 deviceid 01 = 01
      // unitcode 01
      //off command 01 
      // level and filler 00


      var rgbledbuffer = [0x0a,0x014,0x06,0x0a,0x06,0x03,0x01,0x01,0x00,0x00,0x00]

      
      send(rgbledbuffer);

       
   // lighting2.switchOff("0xF09AC8AA/1");


     

  }

  export var routerdevice = function (json)
  {
      var jil = JSON.parse(json);
      var devicetype = JSON.parse(json).devicecommand.devicetype
     
      if (devicetype == "X10switch")
      {
          switchdevice(json);
      }
      else if (devicetype == "rollershutter")
      {
          switchrollershutter(json);
      }


  }

  var switchrollershutter = function (json)
  {  
   
      var obj = JSON.parse(json).devicecommand;
      var command ;

      if (obj.command == "Up")
      {
          command = 0x01;
      }
      else if (obj.command == "Down")
      {
          command = 0x03;
      }

     var  seqnbr = 0;

      var shutterbuffer = [];

      shutterbuffer[0] = 0x0C;    //  packetlength:Packet length(this byte not included) = 0c = 13 
      shutterbuffer[1] = 0x1A;         //   0x1A = RFY
      shutterbuffer[2] = 0x0;  //subtype:0x0x00 = RFY
      shutterbuffer[3] = seqnbr;// sequencenumber
      shutterbuffer[4] = obj.idcode1;  //  id 1
      shutterbuffer[5] = obj.idcode2; // id 2
      shutterbuffer[6] = obj.idcode3; // id 3
      shutterbuffer[7] = obj.devicecode;  // unitcode = devicecode
      shutterbuffer[8] = command;// up
      shutterbuffer[9] = 0x00;// rfu1
      shutterbuffer[10] = 0x00;// rfu2
      shutterbuffer[11] = 0x00;// rfu3
      shutterbuffer[12] = 0x00;/// filler
      shutterbuffer[13] = 0x00; /// rsi cmd 0


      send(shutterbuffer);
  }

 export   var getunit = function (x10char, x10number)
    {
        var gu;

        gu = xlatunit(x10char)

        if (parseInt(x10number) > 8)
        {
            gu = gu || 0x04
        }

        return gu;
    }

  export  var xlatunit = function (x10char)
    {
        switch (x10char)
        {
            case "A":
                return 0x60;
                break;

            case "B":
                return 0x70;
                break;

            case "C":
                return 0x40;
                break;

            case "D":
                return 0x50;
                break;

            case "E":
                return 0x80;
                break;

            case "F":
                return 0x90;
                break;

            case "G":
                return 0xA0;
                break;

            case "H":
                return 0xB0;
                break;

            case "I":
                return 0xE0;
                break;

            case "J":
                return 0xF0;
                break;

            case "K":
                return 0xC0;
                break;


            case "M":
                return 0x00;
                break;

            case "N":
                return 0x10;
                break;

            case "O":
                return 0x20;
                break;

            case "P":
                return 0x30;
                break;


            default:
                return 0x60;


        }

    }


 export   var getdevice = function (x10number)
    {

        var temp;
        var dev;
        dev = parseInt(x10number);

        if (dev > 8)
        {
            dev = dev - 8
        }

        switch (dev)
        {
            case 1:
                temp = 0;
                break;

            case 2:
                temp = 0x10;
                break

            case 3:
                temp = 0x08;
                break

            case 4:
                temp = 0x18;
                break

            case 5:
                temp = 0x40
                break

            case 6:
                temp = 0x50
                break

            case 7:
                temp = 0x48
                break

            case 8:
                temp = 0x58
                break




        }


        return temp





    };


 export var send = function (sendbuffer)
 {
    
     
     rfxtrx.serialport.write(sendbuffer, function (err, response, callback)
     {
         if (rfxtrx.options.debug)
         {
             console.log("Sent    : %s", rfxtrx.dumpHex(sendbuffer));
         }

         if (callback)
         {
             return callback(err, response);
         }
     });
 }


    function checkifidexists(even, str)
    {
        // check  devices in dbase
        var devs = device.devicemodule.devices


        for (var dev in devs)
        {
            if (parseInt(even.id, 16) !== dev.deviceid  )
            {
                for (var propt in even)
                {
                    //alert(propt + ': ' + obj[propt]);


                    if (propt == "temperature"  || propt == "humidity" || propt == "barometer")
                    {
                        var thisdevice = {};
                        thisdevice['name'] = str + " " + propt;
                        thisdevice['devicemaster'] = 0;
                        thisdevice['devicetype'] = 0;
                        thisdevice['devicesubtype'] = 0;
                        thisdevice['iotype'] = 1;
                        thisdevice['deviceid'] = parseInt(even.id, 16);
                        thisdevice['model'] = propt ;
                        thisdevice['commands'] = "";
                        thisdevice['buttons'] = "";

                        var thisdevicejson = JSON.stringify(thisdevice);


                        sqdb.dbase.adddevicetodbase(thisdevicejson);
                    }
                }
            }


        }







    }






};