exports.sqdb = require("./sqlite");
exports.rfxcom = require("./jillesrfxcom");
var devicemodule;
(function (devicemodule) {
    function instantiatedevices() {
        var RFXtrx433E = new EndDevice("RFXtrx433E", Devicemaster.RFXCOM, Devicetype.MASTERDEVICE, Devicesubtype.IODEVICE, Iotype.comport);
        devicemodule.devlists = new devicelists();
        devicemodule.devlists.enddevices.push(RFXtrx433E);
        exports.sqdb.dbase.getallalldevicesdbase();
    }
    devicemodule.instantiatedevices = instantiatedevices;
    function instantiateIOdevices(devs) {
        var devicecount = devs.length;
        var propertyconut = Object.keys(devs[0]).length;
        for (var i = 1; i < devicecount + 1; i++) {
            if (devs[i - 1]['subtype'] == stringofenum(Devicesubtype, 0)) 
            //  device[(Object.keys(device))[i - 1]]
            {
                if (devs[i - 1]['master'] == stringofenum(Devicemaster, 0)) {
                    var params = devs[i - 1]['params'];
                    var param = JSON.parse(params);
                    var com = param['comport'];
                    exports.rfxcom.jillesrfxcom.startrfxcom(com);
                }
            }
        }
    }
    devicemodule.instantiateIOdevices = instantiateIOdevices;
    function stringofenum(enu, value) {
        for (var k in enu)
            if (enu[k] == value)
                return k;
        return null;
    }
    var button = (function () {
        function button() {
        }
        return button;
    })();
    devicemodule.button = button;
    (function (Devicemaster) {
        Devicemaster[Devicemaster["RFXCOM"] = 0] = "RFXCOM";
        Devicemaster[Devicemaster["HUE"] = 1] = "HUE";
    })(devicemodule.Devicemaster || (devicemodule.Devicemaster = {}));
    var Devicemaster = devicemodule.Devicemaster;
    ;
    (function (Devicetype) {
        Devicetype[Devicetype["MASTERDEVICE"] = 0] = "MASTERDEVICE";
        Devicetype[Devicetype["SLAVEDEVICE"] = 1] = "SLAVEDEVICE";
    })(devicemodule.Devicetype || (devicemodule.Devicetype = {}));
    var Devicetype = devicemodule.Devicetype;
    ;
    (function (Devicesubtype) {
        Devicesubtype[Devicesubtype["IODEVICE"] = 0] = "IODEVICE";
        Devicesubtype[Devicesubtype["NOIODEVICE"] = 1] = "NOIODEVICE";
    })(devicemodule.Devicesubtype || (devicemodule.Devicesubtype = {}));
    var Devicesubtype = devicemodule.Devicesubtype;
    ;
    (function (Iotype) {
        Iotype[Iotype["comport"] = 0] = "comport";
        Iotype[Iotype["net"] = 1] = "net";
        Iotype[Iotype["none"] = 2] = "none";
    })(devicemodule.Iotype || (devicemodule.Iotype = {}));
    var Iotype = devicemodule.Iotype;
    ;
    var EndDevice = (function () {
        function EndDevice(name, devicemaster, devicetype, devicesubtype, iotype, commands, buttons, id, deviceid, model, comport) {
            this.name = name;
            this.devicemaster = devicemaster;
            this.devicetype = devicetype;
            this.devicesubtype = devicesubtype;
            this.iotype = iotype;
            this.id = id;
            this.deviceid = deviceid;
            this.model = model;
            this.comport = comport;
            this.commands = commands;
            this.buttons = buttons;
        }
        return EndDevice;
    })();
    devicemodule.EndDevice = EndDevice;
    ;
    var Devices;
    (function (Devices) {
        Devices[Devices["RFXtrx433E"] = 0] = "RFXtrx433E";
    })(Devices || (Devices = {}));
    ;
    var devicelists = (function () {
        function devicelists() {
            this.enddevices = [];
            this.selectedenddevices = [];
        }
        return devicelists;
    })();
    devicemodule.devicelists = devicelists;
    var Devicefunctions = (function () {
        function Devicefunctions() {
        }
        Devicefunctions.selectenddevice = function (json) {
            //"{"selectedmaster":"RFXCOM","selectedio":"IODEVICE","selectedtype":"MASTERDEVICE"}"
            //https://blog.oio.de/2014/02/28/typescript-accessing-enum-values-via-a-string/
            var obj = JSON.parse(json);
            var selectedmaster = obj.selectedmaster;
            var selectedio = obj.selectedio;
            var selectedtype = obj.selectedtype;
            devicemodule.devlists.selectedenddevices = [];
            for (var i = 0; i < devicemodule.devlists.enddevices.length; i++) {
                if (devicemodule.devlists.enddevices[i].devicemaster == Devicemaster[selectedmaster] && devicemodule.devlists.enddevices[i].devicesubtype == Devicesubtype[selectedio] && devicemodule.devlists.enddevices[i].devicetype == Devicetype[selectedtype]) {
                    devicemodule.devlists.selectedenddevices.push(devicemodule.devlists.enddevices[i]);
                }
            }
            var jil = 5;
        };
        return Devicefunctions;
    })();
    devicemodule.Devicefunctions = Devicefunctions;
})(devicemodule = exports.devicemodule || (exports.devicemodule = {}));
;
//# sourceMappingURL=device.js.map