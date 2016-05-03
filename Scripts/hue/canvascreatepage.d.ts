/// <reference path="jquery.d.ts" />
/// <reference path="jqueryui.d.ts" />
/// <reference path="canvascolormap.d.ts" />
/// <reference path="canvaspoint2.d.ts" />
/// <reference path="canvaswhitemap.d.ts" />
/// <reference path="colorconverter.d.ts" />
/// <reference path="../script2.d.ts" />
declare class canvascreatepage {
    constructor(DatastoreString: any, ipandportstring: any);
    test: number;
    cm: colormap;
    hexinput: HTMLInputElement;
    textinputrgb: HTMLInputElement;
    redinput: HTMLInputElement;
    greeninput: HTMLInputElement;
    blueinput: HTMLInputElement;
    sliderinput: HTMLInputElement;
    textinputhue: HTMLInputElement;
    radioinputbrightness: HTMLInputElement;
    radioinputhue: HTMLInputElement;
    radioinputsaturation: HTMLInputElement;
    textinputsaturation: HTMLInputElement;
    textinputcolortemperature: HTMLInputElement;
    previewdiv: HTMLDivElement;
    size: any;
    colorcanvasplaceholderdiv: HTMLDivElement;
    whitecanvasplaceholderdiv: HTMLDivElement;
    slidercanvasplaceholderdiv: HTMLDivElement;
    id: string;
    DatastoreString: any;
    ipandportstring: any;
    ip: any;
    port: any;
    bridgename: any;
    bridgeip: any;
    sref: any;
    httpaddress: any;
    canvaspoints: any[];
    huelights: {};
    mapid: string;
    huelightcount: any;
    AppColorLights: any[];
    colorlightcount: any;
    AppWhiteLights: any[];
    deltax: any;
    deltay: any;
    xmap: any;
    ymap: any;
    radius: any;
    colorMapCanvasWidth: any;
    colorMapCanvasHeight: any;
    circleMapCanvasWidth: any;
    circleMapCanvasHeight: any;
    colorMapXoffset: any;
    colorMapYoffset: any;
    circleMapXoffset: any;
    circleMapYoffset: any;
    spannamelengths: any[];
    spanindexlengths: any[];
    maxspanindexlength: any;
    maxspannamelength: any;
    circleMap: any;
    CalculateSliderElementsLenghts: () => void;
    createparenttable: () => void;
    creatercanvasses: () => void;
    createsliderplaceholder: () => void;
    createchildtable: () => void;
    createbridgeidandbackbutton: () => void;
    Hi: () => void;
    CreateLights: () => void;
    UpdateLightVariables: (LightsUpdate: any) => void;
    Point: (x: any, y: any) => any;
    SendPointState: (idpoint: any, key: any, value: any) => void;
    updatePreview: () => void;
    onmousedown: (e: any) => void;
    onmousemove: (e: any) => void;
    onmouseup: (e: any) => void;
}
declare var SendPointState: (idpoint: any, key: any, value: any) => void;
