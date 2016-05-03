/// <reference path="../script2.ts" />
/// <reference path="canvascreatepage.ts" />
/// <reference path="jquery.d.ts" />
/// <reference path="jqueryui.d.ts" />
/// <reference path="canvascolormap.ts" />
/// <reference path="canvaswhitemap.ts" />
/// <reference path="colorconverter.ts" />




var point = function (id , settings)
{

    this.id = id;

    var me = this;

   // var ad = window.cp1.colorMapCanvasWidth;

    this.settings = {};
  

    this.settings.create =
        {
            xmap: settings.create.xmap,
            ymap: settings.create.ymap,
            radius: settings.create.radius,          
            circleMap: settings.create.circleMap,
            maxspanindexlength: settings.create.maxspanindexlength,
            maxspannamelength: settings.create.maxspannamelength,
            colorcanvasplaceholderdiv: settings.create.colorcanvasplaceholderdiv,
            slidercanvasplaceholderdiv: settings.create.slidercanvasplaceholderdiv,
            cm: settings.create.cm
        }

    this.settings.update =
    {
        light: settings.update.light,
        colorlight: settings.update.colorlight,
        colormode: settings.update.colormode 
            }



  

    this.slidervalue = this.settings.update.light.state.bri;

    this.drag = false;

    // if xy object exist it is a colorlamp otherwise white or plug
    //if (this.settings.update.light.state.xy !== undefined)
    //{ this.colormode = true }
    //else
    //{ this.colormode = false }

  
    // this.xyb only exists as object in canvaspoint if it is a colorlamp
   
    this.SetLightColorValues = function ()
    {
        if (this.settings.update.colorlight)
        {
            if (this.settings.update.colormode) // colorlight in colormode
            {
                this.xyb =
                    {
                        x: this.settings.update.light.state.xy[0],
                        y: this.settings.update.light.state.xy[1],
                        bri: (parseInt(this.settings.update.light.state.bri)) / 256
                    }

                // h = hue s = saturation v = bri = value 
                this.hsv =
                    {
                        h: this.settings.update.light.state.hue,
                        s: this.settings.update.light.state.sat,
                        v: this.xyb.bri
                    }

            var     hue360 = this.hsv.h / (182);

                // h in map x from 0 to 359 hue in philips from 0 to 65535 where 0 and 65535 are the same color red
                // sat in map from 0 to 255 is the same in philips hue 
                // point canvas is 10 bigger each side = 276 pix to get centre of circle on canvas colormap 0,0  it is 10,10 on point canvas 
                // this sets x,y coordinates in point canvas
                // this.xfromhsv = 532 - (10 + parseInt((this.hsv.h / 65535) * 512));
                this.xfromhsv = 10 + Math.round(hue360 * (512 / 360));
                //  this.yfromhsv = 276 - (10 + parseInt(this.hs)v.s));
                this.yfromhsv = 10 + parseInt(this.hsv.s);
                //     this.testrgb = colorConverter.xyBriToRgb(this.xyb);



            }
            else
            {
                if (!this.settings.update.colormode) // if colorlight in whitemode
                {
                    this.ct = this.settings.update.light.state.ct;
                    // this.ct = 500;
                    //maxx = 1034 minx 524 maxct = 500 
                    //mirek (warm) 500 to 153 (cold)  deltact = 347   deltawidth = 512   circlecanvas512 = 0  512 1024 20
                    //this.xfromct = 1044-10
                    //this.xfromct =1034 - 
                    this.xfromct = (this.settings.create.circleMap.circleMapCanvasWidth - 10) - (512 / 347) * (this.ct - 153);
                    this.yfromct = 10 + Math.round(id - 1) * 20;
                };







            };

        };


    };







    if (me.id == 1)
    {

        //this.hsv.h = 0;

        //this.xfromhsv = 532 - (10 + parseInt((this.hsv.h / 65535) * 512));
        //this.yfromhsv = 276 - (10 + parseInt(this.hsv.s));


        $('#status1').html("( e.xmap, e.ymap ) : " + me.xfromhsv + ',  ' + me.yfromhsv);
        var jil = 5;

    }

    this.calculateRgb = function () {
        if (this.testrgb != undefined) {
         var    r = this.testrgb.r * 255;
         var    g = this.testrgb.g * 255;
   var          b = this.testrgb.b * 255;

            var jil = 5;

        }
        else {
            r = 255;
            g = 0;
            b = 0;

            var jil = 5;

        }

        return {
            red: Math.round(r),
            green: Math.round(g),
            blue: Math.round(b)
        }

    }
    this.rgb =
    {

        r: this.calculateRgb().red,
        g: this.calculateRgb().green,
        b: this.calculateRgb().blue
    }



   
   







   


    this.Point = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };

    this.Circle = function (point, radius, color) {
        this.point = point;
        this.radius = radius;
        this.color = color;
        this.isInside = function (pt) {
            return Math.pow(pt.x - point.x, 2) + Math.pow(pt.y - point.y, 2) <
                                                 Math.pow(radius, 2);

        };

    };

    this.drawCircle = function (circle)
    {

        this.ctx3.msImageSmoothingEnabled = false;
        this.ctx3.clearRect(0, 0, this.c3.width, this.c3.height);
        this.ctx3.fillStyle = circle.color;
        this.ctx3.beginPath();
        this.ctx3.arc(circle.point.x, circle.point.y, circle.radius, 0, Math.PI * 2, true);
        this.ctx3.lineWidth = 2;
        this.ctx3.stroke();
        this.ctx3.font = "14px Arial";
        var textlenght = this.ctx3.measureText(id).width;
        this.ctx3.fillText(id, circle.point.x - textlenght / 2, circle.point.y + 7);

        this.ctx3.closePath();



    };














    // this.circle = new this.Circle(new this.Point(this.settings.create.xmap, this.settings.create.ymap), this.settings.create.radius, "black");

    this.CreateLightCanvas = function ()
    {
        this.c3 = document.createElement("canvas");
        this.canvasid = "mapC" + this.id;
        this.c3.id = this.canvasid;
        this.c3.setAttribute('width', this.settings.create.circleMap.circleMapCanvasWidth + 'px');
        this.c3.setAttribute('height', this.settings.create.circleMap.circleMapCanvasHeight + 'px');
        this.c3.style.width = this.settings.create.circleMap.circleMapCanvasWidth + 'px';
        this.c3.style.height = this.settings.create.circleMap.circleMapCanvasHeight + 'px';
        this.c3.style.position = "absolute";
        this.c3.style.top = this.settings.create.circleMap.circleMapYoffset + 'px';
        this.c3.style.left = this.settings.create.circleMap.circleMapXoffset + 'px';
        this.c3.style.zIndex = 3 + this.id;
        this.settings.create.colorcanvasplaceholderdiv.appendChild(this.c3);  
        this.ctx3 = this.c3.getContext("2d");
        var canpx0 = this.c3.offsetLeft;
        var canpy0 = this.c3.offsetTop;

        //http://www.dummies.com/how-to/content/using-the-div-tag-to-create-tables.html

    };

    this.CalculateCircle = function ()
    {

        if (this.settings.update.colorlight)
        {
            if (this.settings.update.colormode)
            {


                this.circle = new this.Circle(new this.Point(this.xfromhsv, this.yfromhsv), this.settings.create.radius, "black");

            }
            else
            {
                this.circle = new this.Circle(new this.Point(this.xfromct, this.yfromct), this.settings.create.radius, "black");

            }
            this.drawCircle(this.circle);
        }
        else
        {
            this.yfromct = parseInt(id) * 20;
            this.xfromct = (this.settings.create.circleMap.circleMapCanvasWidth - 512) + parseInt(id) * 20;
            this.circle = new this.Circle(new this.Point(this.xfromct, this.yfromct), this.settings.create.radius, "black");
            this.drawCircle(this.circle);


        }

    };

    // execute next functions

    this.SetLightColorValues();
    this.CreateLightCanvas();
    this.CalculateCircle();
   
    // function which is called with updatepoint from canvascreatepage 

    this.UpdatePoint = function (updatesettings)
    {

        me.settings.update =
   {
       light: updatesettings.update.light,
       colorlight: updatesettings.update.colorlight,
       colormode: updatesettings.update.colormode
   }

        this.SetLightColorValues();
        this.CalculateCircle();

        if (me.id == 1)
        { var test = 5 };

        this.slidervalue = updatesettings.update.light.state.bri;
        "slider" + me.id
        $("#" + "slider" + me.id).slider("option", "value", this.slidervalue);

        if (me.id == 1)
        { var test = 5 };

    };



    var createslider;

    (  createslider = function (light)
    {
        // first make a row
        var rowdiv = document.createElement("div");
        var rowdivid = "row" + me.id;
        rowdiv.id = rowdivid
        rowdiv.style.display = "table - row";
        // top right bottom left
        rowdiv.style.margin = "0px 0px 10px 0px";

        var indexcontainerdiv = document.createElement("div");
        indexcontainerdiv.style.display = "table-cell";

        var indexdiv = document.createElement("div");
        indexdiv.style.display = "table-cell";
        var indexdivid = "index" + me.id;
        indexdiv.id = indexdivid;
        indexdiv.style.margin = "0px 20px 0px 0px";
        indexdiv.innerHTML = me.id.toString() + ".";
        indexdiv.style.width = me.settings.create.maxspanindexlength + "px";
        var htmlL = indexdiv.innerHTML.length;
        indexcontainerdiv.appendChild(indexdiv);
        rowdiv.appendChild(indexcontainerdiv);

        var namecontainerdiv = document.createElement("div");
        namecontainerdiv.style.display = "table-cell";

        var namediv = document.createElement("div");
        var namedivid = "name" + me.id;
        namediv.id = namedivid;
        namediv.style.margin = "0px 20px 0px 0px";

        var naam = light.name;

        //var sp = "";
        //if (me.id < 10)
        //{ sp = "&nbsp&nbsp&nbsp" }
        //else
        //{ sp = "&nbsp" }



        namediv.innerHTML = naam;
        namediv.style.width = me.settings.create.maxspannamelength + "px";
        var htmlL = namediv.innerHTML.length;





        namecontainerdiv.appendChild(namediv);
        rowdiv.appendChild(namecontainerdiv)



        me.onoff = light.state.on;


        // container div because tablecell elements dont have right margins
        var buttoncontainerdiv = document.createElement("div");
        buttoncontainerdiv.style.display = "table-cell";

        var button = document.createElement("button");
        var buttondivid = "button" + me.id;
        button.id = buttondivid;
        button.style.height = "20px";
        button.style.width = "50px";

        if (me.onoff == true)
        {
            button.innerHTML = "On"
        }
        else
        {
            button.innerHTML = "Off"
        };

        button.style.margin = "0px 20px 0px 0px";








        buttoncontainerdiv.appendChild(button);

        rowdiv.appendChild(buttoncontainerdiv);





        var slidercontainerdiv = document.createElement("div");
        slidercontainerdiv.style.display = "table-cell";

       var sliderdiv = document.createElement("div");
      var   sliderdivid = "slider" + me.id;
        sliderdiv.id = sliderdivid;
        sliderdiv.style.height = "20px";
        sliderdiv.style.width = 300 + "px";
        sliderdiv.style.margin = "0px 20px 0px 0px";
        slidercontainerdiv.appendChild(sliderdiv);


        rowdiv.appendChild(slidercontainerdiv)



        me.reachable = light.state.reachable;


        // add reachable icon to slider placeholder

        var reachablediv = document.createElement("div");
        var divid1 = "reachable" + me.id;
        reachablediv.id = divid1;
        reachablediv.style.height = "16px";
        reachablediv.style.width = 16 + "px";
        reachablediv.style.display = "table-cell";
        reachablediv.style.margin = "0px 0px 0px 20px";

        var reachablegif = document.createElement("img");

        reachablegif.setAttribute("src", '../Scripts/hue/images/notreachable.gif');
        reachablegif.setAttribute("height", "16");
        reachablegif.setAttribute("width", "16");
        reachablegif.setAttribute("alt", "Flower");


        if (me.reachable == true)
        { reachablegif.style.visibility = "hidden" }
        else
        { reachablegif.style.visibility = "visible" }





        reachablediv.appendChild(reachablegif);






        rowdiv.appendChild(reachablediv);


      me.settings.create.slidercanvasplaceholderdiv.appendChild(rowdiv);


        $("#" + buttondivid).click(function (e)
        {



            if (me.onoff == true)
            {
                me.onoff = false
                button.innerHTML = "Off"
            }
            else
            {
                me.onoff = true
                button.innerHTML = "On"
            };


            lightstatecontrol(me.id, "on", me.onoff);



        });


        $("#" + sliderdivid).slider({

            orientation: "horizontal",

            min: 0,

            max: 255,

            value: me.slidervalue

            //slide: refreshSwatch,

            //change: refreshSwatch

        });




      


    


     me.getSliderValue = function ()
        {
            var slidervalue = $("#slider" + id).slider("option", "value");

         cp1.sliderinput.value = slidervalue;

           me.slidervalue = slidervalue;

            return me.slidervalue
        };


        $("#" + sliderdivid).on("slidechange", function (e, ui) { lightstatecontrol(me.id, "bri", me.getSliderValue()) });



    })(this.settings.update.light);


       


    this.SetPointRgbValue = function ()
    {

        var rgb = {};

        

        

        rgb["r"] =me.settings.create.cm.r;
        rgb["g"] = me.settings.create.cm.g;
        rgb["b"] = me.settings.create.cm.b;

        return rgb
    }






}