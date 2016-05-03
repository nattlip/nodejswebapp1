export import device = require("./device");
export import sqdb = require("./sqlite");
export import doma = require("./Domation");
export declare module jillesrfxcom {
    var serialcomarray: any;
    var rfxcom: any;
    var rfxtrx: any;
    var isinitalised: boolean;
    var dumpHex: (buffer: any) => any;
    var test: (com: any) => void;
    var kar: any[];
    var startrfxcom: (com: any) => void;
    var listserialports: (err: any, ports: any) => void;
    var switchon: () => void;
    var switchoff2: () => void;
    var switchdevice: (json: any) => void;
    var routerdevice: (json: any) => void;
    var getunit: (x10char: any, x10number: any) => any;
    var xlatunit: (x10char: any) => number;
    var getdevice: (x10number: any) => any;
    var send: (sendbuffer: any) => void;
}
