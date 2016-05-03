export import sqdb = require("./sqlite");
export import rfxcom = require("./jillesrfxcom");
export declare module devicemodule {
    var devlists: devicelists;
    var devices: any;
    function instantiatedevices(): void;
    function instantiateIOdevices(devs: any): void;
    interface Device {
        devicemaster: Devicemaster;
        devicetype: Devicetype;
        devicesubtype: Devicesubtype;
        iotype: Iotype;
        commands: any;
        buttons: any;
        id: any;
        deviceid: any;
        model: any;
        comport: string;
    }
    class button {
    }
    enum Devicemaster {
        RFXCOM = 0,
        HUE = 1,
    }
    enum Devicetype {
        MASTERDEVICE = 0,
        SLAVEDEVICE = 1,
    }
    enum Devicesubtype {
        IODEVICE = 0,
        NOIODEVICE = 1,
    }
    enum Iotype {
        comport = 0,
        net = 1,
        none = 2,
    }
    class EndDevice implements Device {
        name: any;
        devicemaster: Devicemaster;
        devicetype: Devicetype;
        devicesubtype: Devicesubtype;
        iotype: Iotype;
        commands: any;
        buttons: any;
        id: any;
        deviceid: any;
        model: any;
        comport: string;
        constructor(name: any, devicemaster?: any, devicetype?: any, devicesubtype?: any, iotype?: any, commands?: any, buttons?: any, id?: any, deviceid?: any, model?: any, comport?: any);
    }
    class devicelists {
        enddevices: Array<EndDevice>;
        selectedenddevices: Array<EndDevice>;
        selectedenddevice: EndDevice;
        constructor();
    }
    class Devicefunctions {
        static selectenddevice: (json: any) => void;
    }
}
