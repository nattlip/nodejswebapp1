// start
/// <reference path="jquery.d.ts" />
/// <reference path="jqueryui.d.ts" />
/// <reference path="canvascolormap.ts" />
/// <reference path="canvaspoint2.ts" />
/// <reference path="canvaswhitemap.ts" />
/// <reference path="colorconverter.ts" />
/// <reference path="../script2.ts" />
var canvascreatepage = (function () {
    function canvascreatepage(DatastoreString, ipandportstring) {
        //  ipandportjsstring "{"sref":"229","bridgename":"Hue Bridge","bridgeip":"192.168.10.14","hsip":"10.10.10.6","hsport":"82"}"
        // this is instantiated by calling new in webpage
        this.test = 5;
        this.colorcanvasplaceholderdiv = undefined;
        this.whitecanvasplaceholderdiv = undefined;
        this.slidercanvasplaceholderdiv = undefined;
        this.id = "PhilipsHueColorPicker2";
        this.canvaspoints = [];
        this.huelights = {};
        this.AppColorLights = [];
        this.colorlightcount = null;
        this.AppWhiteLights = [];
        this.spannamelengths = [];
        this.spanindexlengths = [];
        this.maxspanindexlength = null;
        this.maxspannamelength = null;
        this.CalculateSliderElementsLenghts = function () {
            for (var property in this.huelights) {
                var spanindex = document.createElement("span");
                spanindex.innerHTML = property + ".&nbsp&nbsp";
                document.body.appendChild(spanindex);
                this.spanindexlengths.push(spanindex.offsetWidth);
                document.body.removeChild(spanindex);
                var naam = this.huelights[property].name;
                var spanname = document.createElement("span");
                spanname.innerHTML = naam;
                document.body.appendChild(spanname);
                this.spannamelengths.push(spanname.offsetWidth);
                document.body.removeChild(spanname);
            }
            ;
            // for sliders to determine the length of the longest name
            this.maxspanindexlength = Math.max.apply(Math, this.spanindexlengths);
            this.maxspannamelength = Math.max.apply(Math, this.spannamelengths);
        };
        // start creating page
        // make intial table with divs
        this.createparenttable = function () {
            var parenttablediv = document.createElement("div");
            var divid = "parenttable";
            parenttablediv.id = divid;
            parenttablediv.style.display = "table";
            //   top right bottom left
            //  row for map and slider
            for (var property = 1; property < 3; property++) {
                var parentrowdiv = document.createElement("div");
                var divid = "parentrow" + property;
                parentrowdiv.id = divid;
                parentrowdiv.style.display = "table-row";
                for (var j = 1; j < 3; j++) {
                    var parentcelldiv = document.createElement("div");
                    var divid = "parentcell" + property + j;
                    parentcelldiv.id = divid;
                    parentcelldiv.style.display = "table-cell";
                    parentrowdiv.appendChild(parentcelldiv);
                }
                parenttablediv.appendChild(parentrowdiv);
            }
            var pluginpagediv = document.getElementById("canvaspage");
            pluginpagediv.appendChild(parenttablediv);
        };
        this.creatercanvasses = function () {
            var cell = document.getElementById("parentcell11");
            this.colorcanvasplaceholderdiv = document.createElement("div");
            var divid = "colorcanvasplaceholderdiv";
            this.colorcanvasplaceholderdiv.id = divid;
            var canvas1 = document.createElement("canvas");
            var canvas1id = "colormap1'";
            //img.setAttribute('src', "/js/philipshue/images/map-saturation.png");
            canvas1.id = canvas1id;
            canvas1.style.zIndex = "1";
            canvas1.style.position = "absolute";
            canvas1.style.left = this.colorMapXoffset + "px";
            canvas1.style.top = this.colorMapYoffset + "px";
            canvas1.setAttribute('height', this.colorMapCanvasHeight + 'px');
            canvas1.setAttribute('width', this.colorMapCanvasWidth + 'px');
            canvas1.height = this.colorMapCanvasHeight;
            canvas1.width = this.colorMapCanvasWidth;
            var ctx = canvas1.getContext("2d");
            var img = new Image(this.colorMapCanvasHeight, this.colorMapCanvasWidth);
            // img.setAttribute('src', 'js/philipshue/images/colormapjil.png');
            // img.setAttribute('src', 'js/philipshue/images/colormapjil.png');
            img.setAttribute('src', '../Scripts/hue/images/colormapjil.png');
            //img.setAttribute('src', "/js/philipshue/images/map-saturation.png");
            img.onload = function () {
                ctx.drawImage(img, 0, 0);
            };
            this.colorcanvasplaceholderdiv.appendChild(canvas1);
            cell.appendChild(this.colorcanvasplaceholderdiv);
            var cell2 = document.getElementById("parentcell12");
            this.whitecanvasplaceholderdiv = document.createElement("div");
            var divid2 = "whitecanvasplaceholderdiv";
            this.whitecanvasplaceholderdiv.id = divid2;
            var canvas2 = document.createElement("canvas");
            var canvas2id = "whitemap1'";
            //img.setAttribute('src', "/js/philipshue/images/map-saturation.png");
            canvas2.id = canvas2id;
            canvas2.style.zIndex = "1";
            canvas2.style.position = "absolute";
            canvas2.style.left = this.colorMapXoffset + this.colorMapCanvasWidth + "px";
            canvas2.style.top = this.colorMapYoffset + "px";
            canvas2.height = this.colorMapCanvasHeight;
            canvas2.width = this.colorMapCanvasWidth;
            var ctx2 = canvas2.getContext("2d");
            var img2 = new Image(this.colorMapCanvasWidth, this.colorMapCanvasHeight);
            img2.setAttribute('src', '../Scripts/hue/images/whitemapjil.png');
            img2.onload = function () {
                ctx2.drawImage(img2, 0, 0);
            };
            this.whitecanvasplaceholderdiv.appendChild(canvas2);
            cell2.appendChild(this.whitecanvasplaceholderdiv);
        };
        this.createsliderplaceholder = function () {
            var cell = document.getElementById("parentcell21");
            this.slidercanvasplaceholderdiv = document.createElement("div");
            var divid = "slidercanvasplaceholderdiv";
            this.slidercanvasplaceholderdiv.id = divid;
            this.slidercanvasplaceholderdiv.style.position = "absolute";
            this.slidercanvasplaceholderdiv.style.left = "50px";
            this.slidercanvasplaceholderdiv.style.top = "356px";
            cell.appendChild(this.slidercanvasplaceholderdiv);
            var status1 = document.createElement("h4");
            var h4id = "status1";
            status1.id = h4id;
            status1.style.position = "absolute";
            status1.style.left = "50px";
            status1.style.top = "300px";
            status1.innerHTML = "0,0";
            cell.appendChild(status1);
        };
        this.createchildtable = function () {
            var parentcell22 = document.getElementById("parentcell22");
            var childtablediv = document.createElement("div");
            var divid = "childtable";
            childtablediv.id = divid;
            childtablediv.style.display = "table";
            //   top right bottom left
            //  row for preview
            var childrow1div = document.createElement("div");
            var dividcr1 = "childrow1";
            childrow1div.id = dividcr1;
            childrow1div.style.display = "table-row";
            childrow1div.style.position = "absolute";
            childrow1div.style.top = "356px";
            childrow1div.style.left = this.colorMapXoffset + this.maxspanindexlength + this.maxspannamelength + 50 + 300 + 16 + 50 + 100 + "px";
            var childcell11div = document.createElement("div");
            var dividcc11 = "childcell11";
            childcell11div.id = dividcc11;
            childcell11div.style.display = "table-cell";
            this.previewdiv = document.createElement("div");
            var dividpv = "preview";
            this.previewdiv.id = dividpv;
            this.previewdiv.style.backgroundColor = "#fff";
            this.previewdiv.style.border = "solid";
            this.previewdiv.style.borderWidth = "1px";
            this.previewdiv.style.borderColor = "#000";
            this.previewdiv.style.width = "50px";
            this.previewdiv.style.height = "50px";
            childcell11div.appendChild(this.previewdiv);
            childrow1div.appendChild(childcell11div);
            childtablediv.appendChild(childrow1div);
            // row for hue 
            var childrow2div = document.createElement("div");
            var dividcr2 = "childrow2";
            childrow2div.id = dividcr2;
            childrow2div.style.display = "table-row";
            childrow2div.style.position = "absolute";
            childrow2div.style.top = "356px";
            var offSetchildrow2cell1 = this.colorMapXoffset + this.maxspanindexlength + this.maxspannamelength + 50 + 300 + 16 + 50 + 100 + 100 + "px";
            childrow2div.style.left = offSetchildrow2cell1;
            var childcell21div = document.createElement("div");
            var dividcc21 = "childcell21";
            childcell21div.id = dividcc21;
            childcell21div.style.display = "table-cell";
            this.radioinputhue = document.createElement("input");
            this.radioinputhue.type = "radio";
            this.radioinputhue.name = "Mode";
            this.radioinputhue.id = "radiohue";
            this.radioinputhue.value = "0";
            this.radioinputhue.style.width = "20px";
            childcell21div.appendChild(this.radioinputhue);
            childrow2div.appendChild(childcell21div);
            var childcell22div = document.createElement("div");
            var dividcc22 = "childcell22";
            childcell22div.id = dividcc22;
            childcell22div.style.display = "table-cell";
            var labelhue = document.createElement("div");
            labelhue.innerHTML = "H:";
            labelhue.style.width = "40px";
            childcell22div.appendChild(labelhue);
            childrow2div.appendChild(childcell22div);
            var childcell23div = document.createElement("div");
            var dividcc23 = "childcell23";
            childcell23div.id = dividcc23;
            childcell23div.style.display = "table-cell";
            this.textinputhue = document.createElement("input");
            this.textinputhue.type = "text";
            this.textinputhue.id = "inputhue";
            this.textinputhue.value = "0";
            childcell23div.appendChild(this.textinputhue);
            childrow2div.appendChild(childcell23div);
            childtablediv.appendChild(childrow2div);
            // row for saturation
            var childrow3div = document.createElement("div");
            var dividcr3 = "childrow3";
            childrow3div.id = dividcr3;
            childrow3div.style.display = "table-row";
            childrow3div.style.position = "absolute";
            childrow3div.style.top = "376px";
            childrow3div.style.left = offSetchildrow2cell1;
            var childcell31div = document.createElement("div");
            var dividcc31 = "childcell31";
            childcell31div.id = dividcc31;
            childcell31div.style.display = "table-cell";
            var radioinputsaturation = document.createElement("input");
            radioinputsaturation.type = "radio";
            radioinputsaturation.name = "Mode";
            radioinputsaturation.id = "radiosaturation";
            radioinputsaturation.value = "0";
            radioinputsaturation.style.width = "20px";
            childcell31div.appendChild(radioinputsaturation);
            childrow3div.appendChild(childcell31div);
            var childcell32div = document.createElement("div");
            var dividcc32 = "childcell32";
            childcell32div.id = dividcc32;
            childcell32div.style.display = "table-cell";
            var labelsaturation = document.createElement("div");
            labelsaturation.innerHTML = "S:";
            labelsaturation.style.width = "40px";
            childcell32div.appendChild(labelsaturation);
            childrow3div.appendChild(childcell32div);
            var childcell33div = document.createElement("div");
            var dividcc33 = "childcell33";
            childcell33div.id = dividcc33;
            childcell33div.style.display = "table-cell";
            this.textinputsaturation = document.createElement("input");
            this.textinputsaturation.type = "text";
            this.textinputsaturation.id = "inputsaturation";
            this.textinputsaturation.value = "0";
            childcell33div.appendChild(this.textinputsaturation);
            childrow3div.appendChild(childcell33div);
            childtablediv.appendChild(childrow3div);
            // row for value = brightness
            var childrow4div = document.createElement("div");
            var dividcr4 = "childrow4";
            childrow4div.id = dividcr4;
            childrow4div.style.display = "table-row";
            childrow4div.style.position = "absolute";
            childrow4div.style.top = "396px";
            childrow4div.style.left = offSetchildrow2cell1;
            var childcell41div = document.createElement("div");
            var dividcc41 = "childcell41";
            childcell41div.id = dividcc41;
            childcell41div.style.display = "table-cell";
            var radioinputbrightness = document.createElement("input");
            radioinputbrightness.type = "radio";
            radioinputbrightness.name = "Mode";
            radioinputbrightness.id = "radiobrightness";
            radioinputbrightness.value = "0";
            radioinputbrightness.style.width = "20px";
            childcell41div.appendChild(radioinputbrightness);
            childrow4div.appendChild(childcell41div);
            var childcell42div = document.createElement("div");
            var dividcc42 = "childcell42";
            childcell42div.id = dividcc42;
            childcell42div.style.display = "table-cell";
            var labelbrightness = document.createElement("div");
            labelbrightness.innerHTML = "B:";
            labelbrightness.style.width = "40px";
            childcell42div.appendChild(labelbrightness);
            childrow4div.appendChild(childcell42div);
            var childcell43div = document.createElement("div");
            var dividcc43 = "childcell43";
            childcell43div.id = dividcc43;
            childcell43div.style.display = "table-cell";
            var textinputbrightness = document.createElement("input");
            textinputbrightness.type = "text";
            textinputbrightness.id = "inputbrightness";
            textinputbrightness.value = "0";
            childcell43div.appendChild(textinputbrightness);
            childrow4div.appendChild(childcell43div);
            childtablediv.appendChild(childrow4div);
            // rows for rgb 
            var rowrgb;
            var colorletter;
            for (var k = 1; k < 6; k++) {
                switch (k) {
                    case 1:
                        rowrgb = "red";
                        colorletter = "R";
                        break;
                    case 2:
                        rowrgb = "green";
                        colorletter = "G";
                        break;
                    case 3:
                        rowrgb = "blue";
                        colorletter = "B";
                        break;
                    case 4:
                        rowrgb = "hex";
                        colorletter = "Hex";
                        break;
                    case 5:
                        rowrgb = "slider";
                        colorletter = "Slider";
                        break;
                }
                ;
                var childrowrgbdiv = document.createElement("div");
                var dividcrrgb = "childrow" + (k + 4);
                childrowrgbdiv.id = dividcrrgb + colorletter;
                childrowrgbdiv.style.display = "table-row";
                childrowrgbdiv.style.position = "absolute";
                childrowrgbdiv.style.top = 396 + k * 20 + "px";
                childrowrgbdiv.style.left = offSetchildrow2cell1;
                var childcellrgb1div = document.createElement("div");
                var dividccrgb1 = "childcellrgb" + colorletter + k;
                childcellrgb1div.id = dividccrgb1;
                childcellrgb1div.style.display = "table-cell";
                var radioinputrgb = document.createElement("input");
                radioinputrgb.type = "radio";
                radioinputrgb.name = "Mode";
                radioinputrgb.id = "radio" + rowrgb;
                radioinputrgb.value = "0";
                radioinputrgb.style.width = "20px";
                childcellrgb1div.appendChild(radioinputrgb);
                childrowrgbdiv.appendChild(childcellrgb1div);
                var childcellrgb2div = document.createElement("div");
                var dividccrgb2 = "childcellrgb" + colorletter + k;
                childcellrgb2div.id = dividccrgb2;
                childcellrgb2div.style.display = "table-cell";
                var labelrgb = document.createElement("div");
                labelrgb.innerHTML = colorletter + ":";
                labelrgb.style.width = "40px";
                childcellrgb2div.appendChild(labelrgb);
                childrowrgbdiv.appendChild(childcellrgb2div);
                var childcellrgb3div = document.createElement("div");
                var dividccrgb3 = "childcellrgb" + colorletter + k;
                childcellrgb3div.id = dividccrgb3;
                childcellrgb3div.style.display = "table-cell";
                this.textinputrgb = document.createElement("input");
                this.textinputrgb.type = "text";
                this.textinputrgb.id = "text" + colorletter;
                if (k == 1) {
                    this.redinput = this.textinputrgb;
                    this.textinputrgb.value = "255";
                }
                else if (k == 2) {
                    this.greeninput = this.textinputrgb;
                    this.textinputrgb.value = "0";
                }
                else if (k == 3) {
                    this.blueinput = this.textinputrgb;
                    this.textinputrgb.value = "0";
                }
                else if (k == 4) {
                    this.hexinput = this.textinputrgb;
                    this.textinputrgb.value = "FF0000";
                }
                else if (k == 5) {
                    this.sliderinput = this.textinputrgb;
                    this.textinputrgb.value = "1";
                }
                ;
                childcellrgb3div.appendChild(this.textinputrgb);
                childrowrgbdiv.appendChild(childcellrgb3div);
                childtablediv.appendChild(childrowrgbdiv);
                parentcell22.appendChild(childtablediv);
            }
            // row for ct
            var childrow11div = document.createElement("div");
            var dividcr11 = "childrow11";
            childrow11div.id = dividcr11;
            childrow11div.style.display = "table-row";
            childrow11div.style.position = "absolute";
            childrow11div.style.top = 396 + 6 * 20 + "px";
            childrow11div.style.left = offSetchildrow2cell1;
            var childcell111div = document.createElement("div");
            var dividcc111 = "childcell111";
            childcell111div.id = dividcc111;
            childcell111div.style.display = "table-cell";
            var radioinputcolortemperature = document.createElement("input");
            radioinputcolortemperature.type = "radio";
            radioinputcolortemperature.name = "Mode";
            radioinputcolortemperature.id = "radioct";
            radioinputcolortemperature.value = "0";
            radioinputcolortemperature.style.width = "20px";
            childcell111div.appendChild(radioinputcolortemperature);
            childrow11div.appendChild(childcell111div);
            var childcell112div = document.createElement("div");
            var dividcc112 = "childcell112";
            childcell112div.id = dividcc112;
            childcell112div.style.display = "table-cell";
            var labelcolortemperature = document.createElement("div");
            labelcolortemperature.innerHTML = "CT:";
            labelcolortemperature.style.width = "40px";
            childcell112div.appendChild(labelcolortemperature);
            childrow11div.appendChild(childcell112div);
            var childcell113div = document.createElement("div");
            var dividcc113 = "childcell113";
            childcell113div.id = dividcc113;
            childcell113div.style.display = "table-cell";
            this.textinputcolortemperature = document.createElement("input");
            this.textinputcolortemperature.type = "text";
            this.textinputcolortemperature.id = "inputcolortemperature";
            this.textinputcolortemperature.value = "0";
            childcell113div.appendChild(this.textinputcolortemperature);
            childrow11div.appendChild(childcell113div);
            childtablediv.appendChild(childrow11div);
        };
        this.createbridgeidandbackbutton = function () {
            var pluginpagediv = document.getElementById("canvaspage");
            var buttonnode = document.createElement('input');
            buttonnode.setAttribute('type', 'button');
            buttonnode.setAttribute('name', 'backtopreviouspage');
            buttonnode.setAttribute('value', 'back');
            buttonnode.addEventListener("click", this.Hi, false); //('OnClick', Hi());
            var bridgeid = document.createElement("div");
            bridgeid.innerHTML = "Bridgename: " + this.bridgename + "  BridgeIp: " + this.bridgeip;
            //  bridgeid.style.width = "40px";
            bridgeid.appendChild(buttonnode);
            pluginpagediv.appendChild(bridgeid);
        };
        this.Hi = function () {
            var c = "id=back";
            var b = JSON.stringify(c);
            var ajax1 = new XMLHttpRequest();
            ajax1.open("Post", this.httpaddress, true);
            ajax1.setRequestHeader("Content-Type", "application/json");
            ajax1.send(b);
        };
        // end creating page
        //  create points = applight 
        this.CreateLights = function () {
            for (var key in this.huelights) {
                console.log(key);
            }
            ;
            var b = Object.keys(this.huelights);
            //  for (var property = 0; property < this.huelightcount; property++)
            for (var property in this.huelights) {
                if (this.huelights.hasOwnProperty(property)) {
                    var colormode = null; // a colorlamp has a color and white mode
                    var colorlight = null;
                    if (this.huelights[property].state.colormode !== undefined) {
                        colorlight = true;
                        if (this.huelights[property].state.colormode !== "ct") {
                            colormode = true;
                        }
                        else {
                            colormode = false;
                        }
                    }
                    else {
                        colorlight = false;
                        colormode = false;
                    }
                    ;
                    // make reference
                    // go with property from property name of light to index of points
                    //this.canvaspoints[Object.keys(this.huelights)[property]] = new point(Object.keys(this.huelights)[property], {
                    this.canvaspoints[property] = new point(property, {
                        create: {
                            xmap: this.xmap + Number(property) * 20,
                            ymap: this.ymap,
                            radius: this.radius,
                            circleMap: this.circleMap,
                            maxspanindexlength: this.maxspanindexlength,
                            maxspannamelength: this.maxspannamelength,
                            colorcanvasplaceholderdiv: this.colorcanvasplaceholderdiv,
                            slidercanvasplaceholderdiv: this.slidercanvasplaceholderdiv,
                            cm: this.cm
                        },
                        update: {
                            light: this.huelights[property],
                            colorlight: colorlight,
                            colormode: colormode
                        }
                    });
                }
                ;
            }
            ;
        };
        // datastorestring(create) is same as datastoreupdatesring(update) but different values different in time
        this.UpdateLightVariables = function (LightsUpdate) {
            this.huelights = LightsUpdate;
            // get number of lights
            this.huelightcount = Object.keys(this.huelights).length;
            for (var property in this.huelights) {
                if (this.huelights.hasOwnProperty(property)) {
                    var colormode = null; // a colorlamp has a color and white mode
                    var colorlight = null;
                    if (this.huelights[property].state.colormode !== undefined) {
                        colorlight = true;
                        if (this.huelights[property].state.colormode !== "ct") {
                            colormode = true;
                        }
                        else {
                            colormode = false;
                        }
                    }
                    else {
                        colorlight = false;
                        colormode = false;
                    }
                    ;
                    this.canvaspoints[property].UpdatePoint({
                        update: {
                            light: this.huelights[property],
                            colorlight: colorlight,
                            colormode: colormode
                        }
                    });
                }
                ;
            }
            ;
        };
        this.Point = function (x, y) {
            this.x = x;
            this.y = y;
            return this;
        };
        this.SendPointState = function (idpoint, key, value) {
            var state = {};
            var id = {};
            var property = {};
            var statejson;
            property[key] = value;
            id[idpoint] = property;
            state["state"] = id;
            statejson = JSON.stringify(state);
            var ajax1 = new XMLHttpRequest();
            ajax1.open("POST", this.http, true);
            ajax1.setRequestHeader("Content-Type", "application/json");
            ajax1.send(statejson);
        };
        // start new 
        //http://stackoverflow.com/questions/15566597/mouseup-and-doubleclick-both-attached-to-seperate-event-handling-functions-using
        //http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
        //http://stackoverflow.com/questions/1067464/need-to-cancel-click-mouseup-events-when-double-click-event-detected/1067484#1067484  working
        this.updatePreview = function () {
            try {
                this.previewdiv.style.backgroundColor = '#' + this.cm.hex;
            }
            catch (e) { }
        };
        //initialize values and preview
        //  $("a").css("background", "black");
        // http://api.jqueryui.com/slider/#option-value
        this.onmousedown = function (e) {
            var absx = e.clientX - this.circleMapXoffset;
            var absy = e.clientY - this.circleMapYoffset;
            this.xmap = absx - this.deltax;
            this.ymap = absy - this.deltay;
            $('#status1').html("( e.xmap, e.ymap ) : " + this.xmap + ',  ' + this.ymap);
            //http://stackoverflow.com/questions/24923772/raphael-with-typescript-call-signatures-used-in-a-new-expression-must-have-a
            var mousepoint = this.Point(absx, absy);
            //   for (var property = 0; property < this.canvaspoints.length; property++)
            for (var property in this.canvaspoints) {
                if (this.canvaspoints.hasOwnProperty(property)) {
                    if (this.canvaspoints[property].circle.isInside(mousepoint)) {
                        this.canvaspoints[property].drag = true;
                    }
                    ;
                }
                ;
            }
            ;
        };
        this.onmousemove = function (e) {
            var absx = e.clientX - this.circleMapXoffset; //absolute on circlemap  // xmap is absolute on colrwhitemap 
            var absy = e.clientY - this.circleMapYoffset;
            // for (var property = 0; property < this.canvaspoints.length; property++)
            for (var property in this.canvaspoints) {
                if (this.canvaspoints.hasOwnProperty(property)) {
                    if (this.canvaspoints[property].drag) {
                        if (absx < this.deltax) {
                            absx = this.deltax;
                        }
                        ;
                        if (absx > ((this.colorMapCanvasWidth * 2) + this.deltax)) {
                            absx = ((this.colorMapCanvasWidth * 2) + this.deltax);
                        }
                        ;
                        if (absy < this.deltay) {
                            absy = this.deltay;
                        }
                        ;
                        if (absy > (this.colorMapCanvasHeight + this.deltay)) {
                            absy = this.colorMapCanvasHeight + this.deltay;
                        }
                        ;
                        if (this.canvaspoints[property].settings.update.colorlight) {
                            this.canvaspoints[property].settings.create.xmap = absx - this.deltax;
                            this.canvaspoints[property].settings.create.ymap = absy - this.deltay;
                            $('#status1').html("( e.xmap, e.ymap ) : " + this.canvaspoints[property].settings.create.xmap + ',  ' + this.canvaspoints[property].settings.create.ymap);
                            if (this.canvaspoints[property].settings.update.colormode) {
                                if (absx > (this.colorMapCanvasWidth + this.deltax)) {
                                    this.canvaspoints[property].settings.update.colormode = false;
                                }
                                else {
                                    this.cm.setmapxyvalues(this.canvaspoints[property].settings.create.xmap, this.canvaspoints[property].settings.create.ymap);
                                    this.textinputhue.value = this.cm.xmapvalue.toString();
                                    this.textinputsaturation.value = this.cm.ymapvalue.toString();
                                    this.cm.setRgbAndHex();
                                    this.updatePreview();
                                }
                            }
                            else {
                                if (absx < (this.colorMapCanvasWidth + this.deltax)) {
                                    this.canvaspoints[property].settings.update.colormode = true;
                                }
                                else {
                                    // correct for clormapwidth  xmap  = absolute on colorwhotemap
                                    whitemap.setmapxyvalues(this.canvaspoints[property].settings.create.xmap - this.colorMapCanvasWidth, this.canvaspoints[property].settings.create.ymap);
                                    this.textinputcolortemperature.value = whitemap.ct.toString();
                                    this.canvaspoints[property].ct = whitemap.ct;
                                }
                            }
                            ;
                        }
                        else if (!this.canvaspoints[property].settings.update.colorlight) {
                            if (absx < (this.colorMapCanvasWidth + this.deltax)) {
                                absx = (this.colorMapCanvasWidth + this.deltax);
                            }
                            ;
                            this.canvaspoints[property].settings.create.xmap = absx - this.deltax;
                            this.canvaspoints[property].settings.create.ymap = absy - this.deltay;
                        }
                        ;
                        $('#status1').html("( e.xmap, e.ymap ) : " + this.canvaspoints[property].settings.create.xmap + ',  ' + this.canvaspoints[property].settings.create.ymap);
                        this.canvaspoints[property].ctx3.clearRect(0, 0, this.circleMapCanvasWidth, this.circleMapCanvasHeight);
                        this.canvaspoints[property].circle = new this.canvaspoints[property].Circle(new this.canvaspoints[property].Point(absx, absy), 10, "black");
                        this.canvaspoints[property].drawCircle(this.canvaspoints[property].circle);
                    }
                    ;
                }
                ;
            }
            ;
        }; // end mousmove
        this.onmouseup = function (e) {
            var point = {};
            for (var property in this.canvaspoints) {
                if (this.canvaspoints.hasOwnProperty(property)) {
                    if (this.canvaspoints[property].drag) {
                        if (this.canvaspoints[property].settings.update.colorlight) {
                            if (this.canvaspoints[property].settings.update.colormode) {
                                var propv = {
                                    ct: this.canvaspoints[property].ct,
                                    slidervalue: this.canvaspoints[property].getSliderValue(),
                                    rgb: this.canvaspoints[property].SetPointRgbValue(),
                                    onoff: this.canvaspoints[property].onoff
                                };
                                var istring = String(this.canvaspoints[property].id);
                                point[istring] = propv; // point[istring] is created by declaring it
                            }
                            else {
                                var propv = {
                                    ct: this.canvaspoints[property].ct,
                                    slidervalue: this.canvaspoints[property].getSliderValue(),
                                    rgb: this.canvaspoints[property].SetPointRgbValue(),
                                    onoff: this.canvaspoints[property].onoff
                                };
                                var istring = String(this.canvaspoints[property].id);
                                point[istring] = propv; // point[istring] is created by declaring it
                            }
                        }
                    }
                    ;
                }
                ;
            }
            ;
            var points = {};
            points.points = point;
            points.bridgehref = this.sref;
            var jsonpoints = JSON.stringify(points);
            socket.emit("lightscolorcontrol", jsonpoints);
            for (var property in this.canvaspoints) {
                if (this.canvaspoints.hasOwnProperty(property)) {
                    this.canvaspoints[property].drag = false;
                }
                ;
            }
            ;
        }; //end mouse up
        this.DatastoreString = JSON.parse(DatastoreString);
        this.ipandportstring = JSON.parse(ipandportstring);
        this.huelights = this.DatastoreString.lights;
        this.ip = this.ipandportstring.hsip;
        this.port = this.ipandportstring.hsport;
        this.bridgename = this.ipandportstring.bridgename;
        this.bridgeip = this.ipandportstring.bridgeip;
        this.sref = this.ipandportstring.sRef;
        this.deltax = 10; // 10 pixels padding of circleMap in return to colormap
        this.deltay = 10;
        this.xmap = 10; //   x coordinate  of centre circle  0,0 on colormap 10,10 on circleMap          if var then not global
        this.ymap = 10; //   y of centre circle
        this.radius = 10; //   radius of circle
        this.colorMapCanvasWidth = 512;
        this.colorMapCanvasHeight = 256;
        this.circleMapCanvasWidth = 2 * this.colorMapCanvasWidth + 2 * this.deltax;
        this.circleMapCanvasHeight = this.colorMapCanvasHeight + 2 * this.deltay;
        this.colorMapXoffset = 50;
        this.colorMapYoffset = 50;
        this.circleMapXoffset = this.colorMapXoffset - this.deltax;
        this.circleMapYoffset = this.colorMapYoffset - this.deltay;
        this.circleMap =
            {
                circleMapCanvasWidth: this.circleMapCanvasWidth,
                circleMapCanvasHeight: this.circleMapCanvasHeight,
                circleMapXoffset: this.circleMapXoffset,
                circleMapYoffset: this.circleMapYoffset
            };
        this.spannamelengths = [];
        this.spanindexlengths = [];
        this.maxspanindexlength = null;
        this.maxspannamelength = null;
        if (this.port == "80") {
            this.httpaddress = "http://" + this.ip + "/PhilipsHueColorPicter2?Bridgeid=" + this.sref;
        }
        else {
            this.httpaddress = "http://" + this.ip + ":" + this.port + "/PhilipsHueColorPicter2?Bridgeid=" + this.sref;
        }
        ;
        this.huelightcount = Object.keys(this.huelights).length;
        this.createbridgeidandbackbutton();
        this.CalculateSliderElementsLenghts();
        this.createparenttable();
        this.creatercanvasses();
        this.createsliderplaceholder();
        this.createchildtable();
        this.cm = new colormap({ hexinput: this.hexinput, redinput: this.redinput, greeninput: this.greeninput, blueinput: this.blueinput });
        this.size = function (obj) { var size = 0, key; for (key in obj) {
            if (obj.hasOwnProperty(key))
                size++;
        } return size; };
        this.CreateLights();
        this.mapid = "#mapC" + (this.canvaspoints[this.canvaspoints.length - 1].id); // the id of last light even if there are missing in between
        $(this.mapid).mousedown($.proxy(this.onmousedown, this));
        $(this.mapid).mousemove($.proxy(this.onmousemove, this));
        $(this.mapid).mouseup($.proxy(this.onmouseup, this));
        this.cm.setRgbAndHex();
        this.updatePreview();
    } // end constructor
    return canvascreatepage;
})(); // end class
var SendPointState = function (idpoint, key, value) {
    var state = {};
    var id = {};
    var property = {};
    var statejson;
    property[key] = value;
    id[idpoint] = property;
    state.state = id;
    //state.bridgeref = this.sref;
    state.bridgeref = "209";
    statejson = JSON.stringify(state);
    var ajax1 = new XMLHttpRequest();
    ajax1.open("POST", this.httpaddress, true);
    ajax1.setRequestHeader("Content-Type", "application/json");
    ajax1.send(statejson);
};
//# sourceMappingURL=canvascreatepage.js.map