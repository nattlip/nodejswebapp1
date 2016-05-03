export declare module datafrombridge {
    var guid: any;
    var bridge: any;
    var jsonstringdatastore: string;
    var datastore: any;
    var jsonstringlights: any;
    var lights: any;
    var makeobject: (str: any) => any;
    class Bridgeclass {
        config: configclass;
        ipaddress: string;
        netmask: string;
        gateway: any;
        string: any;
        proxyaddress: string;
        proxyport: number;
        UTC: string;
        localtime: string;
        timezone: string;
        modelid: string;
        swverion: string;
        apiversion: string;
        swupdate: swupdateclass;
        linkbutton: boolean;
        portalservisce: boolean;
        portalconnection: string;
        portalstate: portalstateclass;
    }
    class configclass {
        name: string;
        zigbeechannel: number;
        mac: string;
        dhcp: boolean;
    }
    class swupdateclass {
        updatestate: number;
        checkforupdate: boolean;
        devicetypes: devicetypesclass;
        url: string;
        text: string;
        notify: boolean;
    }
    class devicetypesclass {
        bridge: boolean;
        lights: string[];
        sensors: string[];
    }
    class portalstateclass {
        signedon: boolean;
        incoming: boolean;
        outgoing: boolean;
        communication: string;
    }
}
