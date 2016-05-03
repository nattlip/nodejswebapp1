export declare module jil {
    var discoveredlocalbridge: any;
    var cache: string;
    function askhueinfo(): void;
    function addusertobridge(br: any, guid: any): void;
    function getdatastore(br: any, gd: any, orgfunc: any): void;
    function sendlightstatecontrol(br: any, guid: any, controldatajson: any): void;
    function sendlightpointscolor(br: any, guid: any, controldatajson: any): void;
    function getlights(br: any, guid: any, jillescallback: any): void;
}
