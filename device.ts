 export import  sqdb = require("./sqlite");
export import rfxcom = require("./jillesrfxcom");

export module devicemodule
{
    export var devlists: devicelists;     // list to choose from

    export var devices                     // real devices 

  export function instantiatedevices()
   {
       var RFXtrx433E = new EndDevice("RFXtrx433E",Devicemaster.RFXCOM,Devicetype.MASTERDEVICE,Devicesubtype.IODEVICE,Iotype.comport)
       devlists  = new devicelists()
       devlists.enddevices.push(RFXtrx433E);
      sqdb.dbase.getallalldevicesdbase();
      

   }

    export function instantiateIOdevices(devs)
    {
        var devicecount = devs.length;

        

        var propertyconut = Object.keys(devs[0]).length;


        for (var i = 1; i < devicecount + 1; i++)
        {

            if (devs[i - 1]['subtype'] == stringofenum(Devicesubtype,0))
              //  device[(Object.keys(device))[i - 1]]

            {
                if (devs[i - 1]['master'] == stringofenum(Devicemaster, 0))
                {
                    var params = devs[i - 1]['params']

                    var param = JSON.parse(params);

                    var com = param['comport'];

                    rfxcom.jillesrfxcom.startrfxcom(com);
                }
            }
        }
    }

    function stringofenum(enu,value) 
    {
  for (var k in enu) if (enu[k] == value) return k;
        return null;
    }


export interface Device 
{

    devicemaster: Devicemaster;  //rfxcom hue 
    devicetype: Devicetype;        // io master or slave io = master
    devicesubtype: Devicesubtype;     // subtypes of rfxcom hue etc 
    iotype: Iotype;
    commands;
    buttons;
    id;
    deviceid;            // unique id in dbase 
    model;
    comport: string;
   

    
}


  
    export class button
    {


    }

  export enum Devicemaster 
    {
     RFXCOM  = 0,
    HUE = 1 
       };

export enum Devicetype 
{
   MASTERDEVICE,
   SLAVEDEVICE

};

export enum Devicesubtype
{
  IODEVICE,
   NOIODEVICE


    };

  export   enum Iotype
    {
     comport,
      net,
        none
    };




    export class EndDevice implements Device
    {
         name  ;
         devicemaster: Devicemaster ; //rfxcom hue 
         devicetype: Devicetype ;        // io master or slave io = master
         devicesubtype: Devicesubtype ;     // subtypes of rfxcom hue etc 
         iotype: Iotype ;
         commands;
         buttons;
         id;
         deviceid;            // unique id in dbase 
         model;
         comport: string;
     

      
        constructor(name, devicemaster?, devicetype?, devicesubtype?, iotype?, commands?, buttons?, id?, deviceid?, model?,comport?)
            {
                this.name = name;
                this.devicemaster = devicemaster;
                this.devicetype = devicetype;
                this.devicesubtype = devicesubtype;
                this.iotype = iotype
                this.id = id;
                this.deviceid = deviceid;
                this.model = model;
                this.comport = comport;
                this.commands = commands;
                this.buttons = buttons;

            }
     
    };

  

    enum Devices
    {
      "RFXtrx433E"
    };

    export class devicelists
    {
     enddevices: Array<EndDevice> 
     selectedenddevices: Array<EndDevice>;
        selectedenddevice: EndDevice;

        constructor()
        {
            this.enddevices = []
            this.selectedenddevices = [];
            
        }

    }

    export class Devicefunctions
    {
       static  selectenddevice = function (json)
        {
            //"{"selectedmaster":"RFXCOM","selectedio":"IODEVICE","selectedtype":"MASTERDEVICE"}"
           //https://blog.oio.de/2014/02/28/typescript-accessing-enum-values-via-a-string/
          

            var obj = JSON.parse(json);
            var selectedmaster = obj.selectedmaster;
            var selectedio = obj.selectedio;
           var selectedtype = obj.selectedtype;

           devlists.selectedenddevices = [];

            for (var i = 0; i < devlists.enddevices.length; i++)
            {
              
                if (devlists.enddevices[i].devicemaster == <any>Devicemaster[selectedmaster] && devlists.enddevices[i].devicesubtype == <any>Devicesubtype[selectedio] && devlists.enddevices[i].devicetype == <any>Devicetype[selectedtype])
                {
                    devlists.selectedenddevices.push(devlists.enddevices[i]);

                }
            }

            var jil = 5;
        }
        }

};
