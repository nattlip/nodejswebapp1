import sqlite3 = require('sqlite3');
export declare module dbase {
    var db: sqlite3.Database;
    var guid: any;
    var dbaseExists: boolean;
    function checkdbase(): void;
    function adddevicetodbase(devicestring: any): void;
    /** to be done check if bridge is in dbase */
    function checkbridge(id: string, ip: string, mac: string, name: string): void;
    function getallbridgerowsdbase(): sqlite3.Database;
    function getallalldevicesdbase(cback?: any): void;
    function getalltablesdbase(db: any): any;
    function getguid(db: any): void;
    function addTableIfNotExistsInDb(db: any, alltables: any, tbl: any): void;
    /** */
    /**bridge is discovered but missing proprties should be retrieved with get datastore properties are finf in datstore*/
    function findmissingpropertiestobridge(): void;
}
