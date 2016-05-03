/// <reference path="hue/canvascreatepage.d.ts" />
declare var cp1: any;
declare var masterpagediv: HTMLDivElement;
declare var io: any;
declare var socket: any;
declare var allproperties: any;
declare var selectedpropertiesdevice: any;
declare var selecteddevice: {};
declare var tobeselecteddevices: any;
declare var choosendevice: any;
declare var fillpropertiesadddevice: (data?: any) => void;
declare var fillpropertieselecteddevice: (data?: any) => void;
declare var discoverlocalhuebridge2: () => void;
declare var addusertobridge: () => void;
declare var getdatastore: () => void;
declare var showlights: () => void;
declare var colorpicker: () => void;
declare var redirect: () => void;
declare var rfxcom: () => void;
declare var simplestrings: (data: any) => void;
declare var adddevice: () => void;
declare var DeviceTable: () => void;
declare var devicet: () => void;
declare var savedplaceholderdivs: {};
declare var createpage: () => void;
/**
 *creates button withoutparams


 */
declare var createbutton: (buttonid: string, buttonval: string, buttonfunction: any) => any;
/**
 *creates button with params
* no appendchild is formed
* returns var button
 */
declare var createbutton2: (buttonid: string, buttonval: string, buttonfunction: any) => any;
declare var createbutton3: (id: any, buttonid: string, buttonval: string, buttonfunction: any) => any;
declare var createbutton4: (id: any, buttonid: string, buttonval: string, lightstatefunction: any, lightstatevalue: any, buttonfunction: any) => any;
declare var createbutton5: (buttonid: string, buttonval: string, buttonfunction: any, devicecode: any, devicefunction: any) => any;
declare var createbutton6: (buttonid: string, buttonval: string, buttonfunction: any, a: any, b: any, c: any, d: any, devicefunction: any) => any;
declare var clearpage: () => void;
declare var createmenu: (menuJson: string) => void;
declare var createparenttableelements: (count: any) => void;
declare var fillrowparenttable: (datastring: any) => void;
/**
         * Does stuff
         *
         * @param blah stuff needing done
         */
declare var createlighttable: (lightsjson: any) => void;
declare var fillrowslighttable: (lightsjson: any) => void;
declare var createmastertable: () => void;
declare var selectbridge: (i: any) => void;
declare var lightstatecontrol: (idpoint: any, lightstatevariable: any, lightstatevalue: any) => void;
declare var menuitem: HTMLElement;
declare var menuitem: HTMLElement;
declare var RfxcomTable: () => void;
declare var simplestringscount: number;
declare var SimpleStringsTable: (sendstrings: any) => void;
declare var fillrowslighttable: (lightsjson: any) => void;
declare var createmastertable: () => void;
declare var selectbridge: (i: any) => void;
declare var lightstatecontrol: (idpoint: any, lightstatevariable: any, lightstatevalue: any) => void;
declare var menuitem: HTMLElement;
declare var menuitem: HTMLElement;
declare var selectcomport: () => void;
declare var getcomports: () => void;
declare var test: () => void;
declare var makeObjectJson: (key: any, value: any) => String;
declare var switchWithParameters: (dev: any, fct: any) => void;
declare var switchWithParameters2: (a: any, b: any, c: any, d: any, fct: any) => void;
declare var getmaster: () => void;
declare var AddDeviceTable: () => void;
declare var saveAndClearTable: (tableplaceholderdiv: any) => void;
declare var ReturnSavedTable: (tbl: any) => void;
declare var CreateorShowTable: (fn: any) => void;
