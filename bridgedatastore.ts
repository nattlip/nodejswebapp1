// no import  export here


export module datafrombridge
{

    export var guid: any;

    export var bridge : any;

    export var jsonstringdatastore: string;

    export var datastore: any;

    export var jsonstringlights: any;

    export var lights;

    export var makeobject = function (str)
    {
        var obj;

        obj = JSON.parse(str);

        lights = obj.lights;

        return obj; 

    }

    export class Bridgeclass
    {

        config: configclass;
        ipaddress: string;
        netmask: string;
        gateway; string;
        proxyaddress: string;
        proxyport: number;
        UTC: string;
        localtime: string;
        timezone: string;
        modelid: string;
        swverion: string;
        apiversion: string;
        swupdate: swupdateclass;
        //"config": {
        //    "name": "Hue Haamstede",
        //    "zigbeechannel": 25,
        //    "bridgeid": "001788FFFE141B2B",
        //    "mac": "00:17:88:14:1b:2b",
        //    "dhcp": false,
        //"ipaddress": "10.10.10.100",
        //"netmask": "255.255.255.0",
        //"gateway": "10.10.10.1",
        //"proxyaddress": "none",
        //"proxyport": 0,
        //"UTC": "2015-10-24T08:17:32",
        //"localtime": "2015-10-24T10:17:32",
        //"timezone": "Europe/Amsterdam",
        //"modelid": "BSB001",
        //"swversion": "01028090",
        //"apiversion": "1.10.0",
        //"swupdate": {
        //    "updatestate": 0,
        //    "checkforupdate": false,
        //	"devicetypes": {
        //    "bridge": false,
        //		"lights": [],
        //		"sensors": []
        //	},
        //	"url": "",
        //	"text": "",
        //	"notify": false
        //},
        //"linkbutton": false,
        //"portalservices": true,
        //"portalconnection": "connected",
        //"portalstate": {
        //	"signedon": true,
        //	"incoming": true,
        //	"outgoing": true,
        //	"communication": "disconnected"
        //},
        linkbutton: boolean;
        portalservisce: boolean;
        portalconnection:string;
        portalstate: portalstateclass;



    }

    export class configclass
    {
        name: string;
        zigbeechannel: number;
        mac: string;
        dhcp: boolean;


      //  "name": "Hue Haamstede",
        //    "zigbeechannel": 25,
        //    "bridgeid": "001788FFFE141B2B",
        //    "mac": "00:17:88:14:1b:2b",
        //    "dhcp": false,



    }

    export class swupdateclass
    {
        updatestate: number;
        checkforupdate: boolean;
        devicetypes: devicetypesclass;
        url: string;
        text: string;
        notify: boolean;

        //"swupdate": {
        //    "updatestate": 0,
        //    "checkforupdate": false,
		//	"devicetypes": {
        //    "bridge": false,
		//		"lights": [],
		//		"sensors": []
		//	},
        //"url": "",
		//	"text": "",
		//	"notify": false
    }

    export class devicetypesclass
    {
        bridge: boolean
        lights: string[];
        sensors: string[];
    }

   export  class portalstateclass
    {
        signedon: boolean;
        incoming: boolean;
        outgoing: boolean;
        communication: string;
         //"portalstate": {
        //	"signedon": true,
        //	"incoming": true,
        //	"outgoing": true,
        //	"communication": "disconnected"
        //},



    }





}