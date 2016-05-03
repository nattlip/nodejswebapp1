/// <reference path="canvascreatepage.d.ts" />
/// <reference path="jquery.d.ts" />
/// <reference path="jqueryui.d.ts" />
/// <reference path="canvaspoint2.d.ts" />
/// <reference path="canvaswhitemap.d.ts" />
/// <reference path="colorconverter.d.ts" />
/// <reference path="../script2.d.ts" />
declare class colormap {
    constructor(settings: any);
    h: any;
    s: any;
    v: any;
    r: any;
    g: any;
    b: any;
    hex: any;
    xmapvalue: any;
    ymapvalue: any;
    xmapmaxvalue: any;
    ymapmaxvalue: any;
    xmapminvalue: any;
    ymapminvalue: any;
    hexinput: any;
    redinput: any;
    blueinput: any;
    greeninput: any;
    slidervalue: number;
    setmapxyvalues: (x: any, y: any) => void;
    setRgbAndHex: () => void;
    setHsv: (h: any, s: any, v: any) => void;
    hsvToRgb: (hsv: any) => {
        r: number;
        g: number;
        b: number;
    };
    rgbToHex: (rgb: any) => any;
    intToHex: (dec: any) => string;
}
