var fs = require('fs');
var sqlite3 = require('sqlite3');
var req = require("./jillesrequestfile2");
var device = require("./device");
var datastore = require("./bridgedatastore");
//import HueS = require("./Hueserver");
//http://www.w3.org/TR/XMLHttpRequest/#states
var dbase;
(function (dbase) {
    datastore.datafrombridge;
    dbase.db = new sqlite3.Database(':memory:');
    dbase.guid = { ip: 'test' };
    var guid2;
    var bridgelocal;
    dbase.dbaseExists = fs.existsSync('database');
    var dummy = function () { };
    var createguid = (function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return function () {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };
    })();
    var sqlcreatebridgetable = "CREATE TABLE Bridges (id TEXT, internalipaddress TEXT, macaddress TEXT, name TEXT)";
    var sqlcreateguidtable = "CREATE TABLE Guid (guid TEXT)";
    var sqlcreatelighttable = "CREATE TABLE lights (bridgeindex INTEGER , lightindex INTEGER,\
        type TEXT,\
        name TEXT,\
        modelid TEXT,\
        swversion TEXT\
        )";
    var sqlcreatestatelighttable = "CREATE TABLE state (parentindex INTEGER,\
        hue INTEGER,\
        on1 INTEGER,\
        effect TEXT,\
        alert TEXT,\
        bri INTEGER,\
        sat INTEGER,\
        ct INTEGER,\
        reachable INTEGER,\
        colormode TEXT\
         )";
    var sqlcreatexylighttable = "CREATE TABLE xy (\
        lightindex INTEGER,\
        x TEXT,\
        y TEXT\
         )";
    var sqlcreatepointsymboltable = "CREATE TABLE pointsynbol (\
        lightindex INTEGER,\
        one TEXT,\
        two TEXT,\
        three TEXT,\
        four TEXT,\
        five TEXT,\
        six TEXT,\
        seven TEXT,\
        eight TEXT\
         )";
    var sqlcreatedevicetable = "CREATE TABLE Devices (id INTEGER PRIMARY KEY AUTOINCREMENT , deviceid INTEGER, plugin TEXT,master TEXT, io BOOLEAN, type TEXT, subtype TEXT, name TXT, params TEXT ,commands Text,buttons Text)";
    var sqldeletedevicetable = "DROP TABLE IF EXISTS Devices";
    // dbase 01
    // checks id dbase is there
    // makes dbase file if not
    // creates guid if new dbase
    function checkdbase() {
        if (dbase.dbaseExists) {
            dbase.db = sqlite3.cached.Database('database');
            getguid(dbase.db);
            var jil = 5;
            var alltables = getalltablesdbase(dbase.db);
            jil = 6;
        }
        if (!dbase.dbaseExists) {
            dbase.db = sqlite3.cached.Database('database');
            console.info('Creating database. This may take a while...');
            dbase.db.exec(sqlcreatebridgetable);
            dbase.db.exec(sqlcreateguidtable);
            dbase.db.exec(sqlcreatelighttable);
            dbase.db.exec(sqlcreatestatelighttable);
            dbase.db.exec(sqlcreatexylighttable);
            dbase.db.exec(sqlcreatepointsymboltable);
            datastore.datafrombridge.bridge.guid = createguid();
            guid2 = datastore.datafrombridge.bridge.guid;
            dbase.db.exec("insert into guid(GUID) values('" + datastore.datafrombridge.bridge.guid.toString() + "')");
        }
    }
    dbase.checkdbase = checkdbase;
    ;
    function addbridgetodbase(db, id, ip, mac, name) {
        var sqlinsert = "insert into Bridges (id, internalipaddress,macaddress,name) values ('" + id + "','" + ip + "','" + mac + "','" + name + "')";
        db.exec(sqlinsert);
    }
    function adddevicetodbase(devicestring) {
        var thisdevice = JSON.parse(devicestring);
        var devicemaster = device.devicemodule.Devicemaster[thisdevice.devicemaster];
        var devicetype = device.devicemodule.Devicetype[thisdevice.devicetype];
        var devicesubtype = device.devicemodule.Devicesubtype[thisdevice.devicesubtype];
        var iotype = device.devicemodule.Iotype[thisdevice.iotype];
        var name = thisdevice.name;
        thisdevice.name = name;
        thisdevice.devicemaster = devicemaster;
        thisdevice.devicetype = devicetype;
        thisdevice.devicesubtype = devicesubtype;
        thisdevice.iotype = iotype;
        thisdevice.deviceid = 0;
        thisdevice.model = "";
        thisdevice.commands = "";
        thisdevice.buttons = "";
        var comportstring = JSON.stringify({ "comport": thisdevice.comport });
        thisdevice.params = comportstring;
        var id;
        var cursor = dbase.db.exec("SELECT count(*) FROM  Devices");
        var callback = function (err, rows) {
            var d = rows[0];
            var e = d["count(*)"];
            thisdevice.id = e + 1;
            var sqlinsert = "insert into Devices (id, deviceid, plugin,\
             master,io,type,subtype,name,params,commands,buttons) values('" +
                thisdevice.id + "', '" +
                thisdevice.deviceid + "', '" +
                thisdevice.plugin + "', '" +
                thisdevice.devicemaster + "', '" +
                thisdevice.iotype + "', '" +
                thisdevice.devicetype + "', '" +
                thisdevice.devicesubtype + "', '" +
                thisdevice.name + "', '" +
                thisdevice.params + "', '" +
                thisdevice.commands + "', '" +
                thisdevice.buttons + "')";
            dbase.db.exec(sqlinsert);
        };
        dbase.db.all("SELECT count(*) FROM  Devices", callback);
        device.devicemodule.devices.push(thisdevice);
    }
    dbase.adddevicetodbase = adddevicetodbase;
    /** to be done check if bridge is in dbase */
    function checkbridge(id, ip, mac, name) {
        var a;
        /**to check if row contains the bridge , if so he becomes true */
        var bridgeindbase = false;
        //    var sqlcheckifbridgeexists = "SELECT EXISTS( SELECT 1 FROM Bridges WHERE ID = '" + id + "')";
        var sqlcheckifbridgeexists = "SELECT 1 FROM Bridges WHERE ID = '" + id + "'";
        bridgelocal = {};
        bridgelocal['internalipaddress'] = ip;
        var callback = function (err, rows) {
            // if rows doesnt exot ith as no length gives error . 
            if (rows.length == 0) {
                //   mac = datastore.datafrombridge.datastore.config.mac;
                //   name = datastore.datafrombridge.datastore.config.name;
                //you come here if bridge doesnt exists
                // now fuction to add missing properties
                req.jil.getdatastore(bridgelocal, guid2, findmissingpropertiestobridge);
            }
            else {
                var setbridge = function () {
                    var res = datastore.datafrombridge.datastore;
                    var bridgeid = res.config.bridgeid;
                    var ipaddress = res.config.ipaddress;
                    var mac = res.config.mac;
                    var name = res.config.name;
                    bridgelocal = {};
                    bridgelocal['internalipaddress'] = ipaddress;
                    bridgelocal['macaddress'] = mac;
                    bridgelocal['id'] = bridgeid;
                    bridgelocal['name'] = name;
                    req.jil.discoveredlocalbridge = bridgelocal;
                    datastore.datafrombridge.bridge = bridgelocal;
                    var c;
                };
                req.jil.getdatastore(bridgelocal, guid2, setbridge);
            }
            if (err) {
                var vg = 0;
            }
        };
        // var e =     db.exec(sqlcheckifbridgeexists)
        //  var db = new sqlite3.Database('database');
        dbase.db.all(sqlcheckifbridgeexists, callback);
    }
    dbase.checkbridge = checkbridge;
    function getallbridgerowsdbase() {
        var allbridgerows;
        //  var db = new sqlite3.Database('database');
        var sqlgetallrows = "SELECT * FROM Bridges ";
        var callback = function (err, rows) {
            allbridgerows = rows;
            return allbridgerows;
        };
        //  http://stackoverflow.com/questions/21243327/how-to-return-results-of-nodes-sqlite3-in-a-function
        // http://stackoverflow.com/questions/21243327/how-to-return-results-of-nodes-sqlite3-in-a-function
        //   db.all(sqlgetallrows, callback);
        return dbase.db.exec(sqlgetallrows);
    }
    dbase.getallbridgerowsdbase = getallbridgerowsdbase;
    function getallalldevicesdbase(cback) {
        var alldevicerows;
        //  var db = new sqlite3.Database('database');
        var sqlgetallrows = "SELECT * FROM Devices ";
        var callback = function (err, rows) {
            device.devicemodule.devices = rows;
            if (rows) {
                if (rows.length > 0) {
                    device.devicemodule.instantiateIOdevices(rows);
                    var test = 5;
                }
            }
        };
        //  http://stackoverflow.com/questions/21243327/how-to-return-results-of-nodes-sqlite3-in-a-function
        // http://stackoverflow.com/questions/21243327/how-to-return-results-of-nodes-sqlite3-in-a-function
        dbase.db.all(sqlgetallrows, callback);
    }
    dbase.getallalldevicesdbase = getallalldevicesdbase;
    function getalltablesdbase(db) {
        var alltables;
        var sqlgetalltables = "SELECT tbl_name FROM sqlite_master WHERE type='table'";
        //  FROM sqlite_master
        var dosomething = function (err, tables) {
            alltables = tables;
            console.log('db error getalltable  ' + err);
            addTableIfNotExistsInDb(db, alltables, "Devices");
            return alltables;
        };
        //  http://stackoverflow.com/questions/21243327/how-to-return-results-of-nodes-sqlite3-in-a-function
        // http://stackoverflow.com/questions/21243327/how-to-return-results-of-nodes-sqlite3-in-a-function
        //   db.all(sqlgetallrows, callback);
        return db.all(sqlgetalltables, dosomething);
    }
    dbase.getalltablesdbase = getalltablesdbase;
    function getguid(db) {
        var guidfromdb;
        var sqlgetguid = "SELECT * FROM GUID ";
        var callback = function (err, rows, guidfromdb) {
            guidfromdb = rows[0];
            datastore.datafrombridge.guid = guidfromdb.guid;
            guid2 = datastore.datafrombridge.guid;
            var b = err;
            var jil = 5;
        };
        db.all(sqlgetguid, callback);
    }
    dbase.getguid = getguid;
    function addTableIfNotExistsInDb(db, alltables, tbl) {
        function contains(a, obj) {
            for (var i = 0; i < a.length; i++) {
                if (a[i].tbl_name === obj) {
                    return true;
                }
            }
            return false;
        }
        //   db.exec(sqldeletedevicetable);
        if (!contains(alltables, tbl)) {
            db.exec(sqlcreatedevicetable);
        }
    }
    dbase.addTableIfNotExistsInDb = addTableIfNotExistsInDb;
    /** */
    /**bridge is discovered but missing proprties should be retrieved with get datastore properties are finf in datstore*/
    function findmissingpropertiestobridge() {
        var res = datastore.datafrombridge.datastore;
        var bridgeid = res.config.bridgeid;
        var ipaddress = res.config.ipaddress;
        var mac = res.config.mac;
        var name = res.config.name;
        addbridgetodbase(dbase.db, bridgelocal.id, bridgelocal.internalipaddress, res.config.mac, res.config.name);
        bridgelocal['internalipaddress'] = ipaddress;
        bridgelocal['macaddress'] = mac;
        bridgelocal['id'] = bridgeid;
        bridgelocal['name'] = name;
        req.jil.discoveredlocalbridge = bridgelocal;
        datastore.datafrombridge.bridge = bridgelocal;
    }
    dbase.findmissingpropertiestobridge = findmissingpropertiestobridge;
    ;
})(dbase = exports.dbase || (exports.dbase = {}));
//# sourceMappingURL=sqlite.js.map