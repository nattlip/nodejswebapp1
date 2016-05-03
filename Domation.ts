var serialport = require("serialport")


//http://stackoverflow.com/questions/22128262/unable-to-instantiate-object-from-an-imported-module-using-node-typescript
// ie dont use internal modules only classes


export class jillesdomation

{
    serialport;
    comport = "";

    constructor(comport)
    {
        this.comport = comport;


    }


   open = function () {
       var self = this;

       serialport = new serialport.SerialPort(self.comport, {
           baudrate: 57600
           //parser: self.rfxtrxParser()
       });




        //if (typeof serialport === "undefined") {
        //    serialport = new serialport.SerialPort(self.comport, {
        //        baudrate: 57600
        //        //parser: self.rfxtrxParser()
        //    });
        //}
        //serialport.on("open", function () {
        //   console.log(" port open");
       // });

      var  kar = [];

      kar[0] = 0x01;
      kar[1] = 0x00; //name// number of lightcindex
      kar[2] = 0x00;
      kar[3] = 0x03;
      // color // off
      kar[4] = 0x00;
      kar[5] = 0x00;
      kar[6] = 0x00;

      
      serialport.open();
      var hjk = serialport.isOpen();
      serialport.write(kar)

      //serialport.open(
      //    function (error) {
      //        if (error) {
      //            console.log('failed to open: ' + error);
      //        }
      //        else {
      //            serialport.write(kar)
      //        };

      //    })


    };

}