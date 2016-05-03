// no import  export here
var datafrombridge;
(function (datafrombridge) {
    datafrombridge.makeobject = function (str) {
        var obj;
        obj = JSON.parse(str);
        datafrombridge.lights = obj.lights;
        return obj;
    };
    var Bridgeclass = (function () {
        function Bridgeclass() {
        }
        return Bridgeclass;
    })();
    datafrombridge.Bridgeclass = Bridgeclass;
    var configclass = (function () {
        function configclass() {
        }
        return configclass;
    })();
    datafrombridge.configclass = configclass;
    var swupdateclass = (function () {
        function swupdateclass() {
        }
        return swupdateclass;
    })();
    datafrombridge.swupdateclass = swupdateclass;
    var devicetypesclass = (function () {
        function devicetypesclass() {
        }
        return devicetypesclass;
    })();
    datafrombridge.devicetypesclass = devicetypesclass;
    var portalstateclass = (function () {
        function portalstateclass() {
        }
        return portalstateclass;
    })();
    datafrombridge.portalstateclass = portalstateclass;
})(datafrombridge = exports.datafrombridge || (exports.datafrombridge = {}));
//# sourceMappingURL=bridgedatastore.js.map