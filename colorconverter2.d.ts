export declare module colorConverter2 {
    interface xyBri {
        x: number;
        y: number;
        bri: number;
    }
    interface Rgb {
        r: number;
        g: number;
        b: number;
    }
    function MakeRgbSmallerThenOne(rgb: Rgb): Rgb;
    function xyBriToRgb(xyb: xyBri): Rgb;
    function rgbToXyBri(rgb: Rgb): xyBri;
    function rgbToHexString(rgb: Rgb): string;
    function hexStringToRgb(s: string): Rgb;
    function hexStringToXyBri(s: string): xyBri;
    interface Point {
        x: number;
        y: number;
    }
    function xyForModel(xy: Point, model: string): Point;
    function xyBriForModel(xyb: xyBri, model: string): xyBri;
}
