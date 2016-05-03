/// <reference path="canvascreatepage.ts" />
/// <reference path="jquery.d.ts" />
/// <reference path="jqueryui.d.ts" />
/// <reference path="canvaspoint2.ts" />
/// <reference path="canvaswhitemap.ts" />
/// <reference path="colorconverter.ts" />
/// <reference path="../script2.ts" />
class colormap  {

    // hue is x, if s =100 b 100 then y is 0



    constructor(settings)
    {

        this.hexinput = settings.hexinput;
        this.redinput = settings.redinput;
        this.greeninput = settings.greeninput;
        this.blueinput = settings.blueinput;
        this.h = 0;
        this.s = 100;
        this.v = 100;

        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.hex = 0;

        this.xmapvalue = 0;
        this.ymapvalue = 0;

        this.xmapmaxvalue = 359;
        this.ymapmaxvalue = 100;
        this.xmapminvalue = 1;
        this.ymapminvalue = 1;

        this.slidervalue = 0;


    }





    h;
    s;
    v;

    r;
    g;
    b;
    hex;

    xmapvalue;
    ymapvalue;

    xmapmaxvalue;
    ymapmaxvalue;
    xmapminvalue;
    ymapminvalue;

    hexinput;
    redinput;
    blueinput;
    greeninput;

    slidervalue = 0;
    // mapcoordinanes to colorcoordinates h = x 
   setmapxyvalues=  function (x, y)
    {



        this.xmapvalue = Math.round(x * 359 / 512);
        this.ymapvalue = Math.round(y * 100 / 256);


    };


    setRgbAndHex=  function ()
    {
        this.h = this.xmapvalue;
       // this.s = 100 - this.ymapvalue;
        this.s = this.ymapvalue;
        this.setHsv(this.h, this.s, this.v);

        this.hexinput.value = this.hex;
        this.redinput.value = this.r;
        this.greeninput.value = this.g;
        this.blueinput.value = this.b;










    };


     setHsv=  function (h, s, v)
    {
        this.h = h;
        this.s = s;
        this.v = v;



        var newRgb = this.hsvToRgb(this);
        this.r = newRgb.r;
        this.g = newRgb.g;
        this.b = newRgb.b;

        this.hex = this.rgbToHex(newRgb);
    };


     hsvToRgb=  function (hsv)
    {

      var   rgb = { r: 0, g: 0, b: 0 };

        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;

        if (s == 0)
        {
            if (v == 0)
            {
                rgb.r = rgb.g = rgb.b = 0;
            } else
            {
                rgb.r = rgb.g = rgb.b = Math.round(v * 255 / 100);
            }
        } else
        {
            if (h == 360)
            {
                h = 0;
            }
            h /= 60;

            // 100 scale
            s = s / 100;
            v = v / 100;

            var i = parseInt(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - (s * f));
            var t = v * (1 - (s * (1 - f)));
            switch (i)
            {
                case 0:
                    rgb.r = v;
                    rgb.g = t;
                    rgb.b = p;
                    break;
                case 1:
                    rgb.r = q;
                    rgb.g = v;
                    rgb.b = p;
                    break;
                case 2:
                    rgb.r = p;
                    rgb.g = v;
                    rgb.b = t;
                    break;
                case 3:
                    rgb.r = p;
                    rgb.g = q;
                    rgb.b = v;
                    break;
                case 4:
                    rgb.r = t;
                    rgb.g = p;
                    rgb.b = v;
                    break;
                case 5:
                    rgb.r = v;
                    rgb.g = p;
                    rgb.b = q;
                    break;
            }

            rgb.r = rgb.r * 255;
            rgb.g = rgb.g * 255;
            rgb.b = rgb.b * 255;
        }

        return rgb;
    };

      rgbToHex=  function (rgb)
    {
        return this.intToHex(rgb.r) + this.intToHex(rgb.g) + this.intToHex(rgb.b);
    };

   intToHex=  function (dec)
    {
        var result = (parseInt(dec).toString(16));
        if (result.length == 1)
            result = ("0" + result);
        return result.toUpperCase();
    }





}