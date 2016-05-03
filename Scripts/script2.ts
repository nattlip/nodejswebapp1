/// <reference path="./hue/canvascreatepage.ts" />


//http://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript
//interface Window { cp1 : any; };

//window.cp1 = window.cp1 || {};

var cp1;

var masterpagediv: HTMLDivElement;

var io;
var socket = io('ws://10.10.10.4:8888')

//var cp1: any;

socket.on("topMenu", function (data)
{
    createmenu(data);
});

socket.on("createPage", function ()
{
    createpage();
});


socket.on('BridgeTable', function (data)
{


    var brobj;

    var brobjarr = JSON.parse(data);

    brobj = brobjarr[0];

    var count = Object.keys(brobj).length;

    createparenttableelements(count);

    fillrowparenttable(data);

    var g = 5;
});

socket.on("lights", function (data)
{

    var g = 5;

    createlighttable(data);

});


socket.on("canvascreatepage", function (data)
{

    //  masterpagediv.style.display = "none";

    document.body.innerHTML = '';

    var parentcanvasdiv = document.createElement("div");
    var divid = "canvaspage";
    parentcanvasdiv.id = divid;
    document.body.appendChild(parentcanvasdiv);




    var ip = {
        sRef: "229",
        bridgename: "Hue Bridge",
        bridgeip: "192.168.10.14",
        hsip: "10.10.10.4",
        hsport: "8888"
    }

    var ipstring = JSON.stringify(ip);

    //var ipstring = '{"sref":' + String.fromCharCode(34)
    //    + sRef + String.fromCharCode(34) + ',"bridgename":' + bridgename + ',"bridgeip"":'
    //    + bridgeipstringwith34 + ',"hsip":' + hsipstring + ',"hsport":' + hsportstring + '}'

    //  ipandportjsstring "{"sref":"229","bridgename":"Hue Bridge","bridgeip":"192.168.10.14","hsip":"10.10.10.6","hsport":"82"}"
    // this is instantiated by calling new in webpage

    // canvascreatepage(data, ipstring);







    window['cp1'] = new canvascreatepage(data, ipstring);

    var jil = 5;

});

socket.on("UpdateLights", function (data)
{

    var g = 5;

    if (typeof !(cp1 === "undefined"))
    {

        cp1.UpdateLightVariables(data);
    };
});


socket.on("comports", function (data)
{
    var ports = JSON.parse(data);
    var select = <HTMLSelectElement>document.getElementById("selectcom")
   select.onclick = function () { jil(select, this.selectedIndex) }
    while (select.firstChild)
    {
        select.removeChild(select.firstChild);

    }





    ports.forEach(function (port)
    {
        var opt = <HTMLOptionElement>document.createElement('OPTION');
        opt.value = port;
        opt.innerHTML = port;
        //  opt.onclick = function () { jil(12) };
        select.appendChild(opt);
    });


    var jil = function (select, si)
    {
        var com = select.options[select.selectedIndex].value
        var div = document.getElementById("selectedcom")
        div.innerHTML = com;

        var j =
            {
                rfxcomport: com

            }

    var json = JSON.stringify(j)

    socket.emit('rfxcomport', json);






    };
}
    );

socket.on('simplestringonscreen', function (data)
{
    simplestrings(data);

});

socket.on('masters', function (data)
{

    fillpropertiesadddevice(data)

});

socket.on("selecteddevices", function (data)
{

    fillpropertieselecteddevice(data)

});

socket.on("createtablewithjson", function (data)
{
    // in file createtable.ts
    CreateTableFromServer(data);

});

socket.on("createdevicetablewithjson", function (data)
{

    (CreateDeviceTableFromServer(data));

});


var allproperties;
var selectedpropertiesdevice;
var selecteddevice = {};
var tobeselecteddevices;
var choosendevice;

var fillpropertiesadddevice = function (data?)
{

    if (data)
    {
        allproperties = JSON.parse(data);
    };


    var select = <HTMLSelectElement>document.getElementById("SelectMaster");

    var selectio = <HTMLSelectElement>document.getElementById("SelectIfIo");

    var selecttype = <HTMLSelectElement>document.getElementById("Selecttype");

    select.onchange = function () { jil(select, this.selectedIndex) };


    selectio.onchange = function () { jil(selectio, this.selectedIndex) };


    selecttype.onchange = function () { jil(selecttype, this.selectedIndex) };




    var masters = allproperties.propertymaster



    var opt = <HTMLOptionElement>document.createElement('OPTION');
    opt.value = '';
    opt.disabled = true;
    opt.style.display = "none";
    select.appendChild(opt);



    for (var propt in masters)
    {
        opt = <HTMLOptionElement>document.createElement('OPTION');
        opt.value = propt;
        opt.innerHTML = propt;
        //  opt.onclick = function () { jil(12) };
        select.appendChild(opt);
    };
    select.value = '';

    var io = allproperties.propertyio

    opt = <HTMLOptionElement>document.createElement('OPTION');
    opt.value = '';
    opt.disabled = true;
    opt.style.display = "none";
    selectio.appendChild(opt);


    for (var propt in io)
    {
        opt = <HTMLOptionElement>document.createElement('OPTION');
        opt.value = propt;
        opt.innerHTML = propt;
        //  opt.onclick = function () { jil(12) };
        selectio.appendChild(opt);


    };
    selectio.value = '';

    var type = allproperties.propertytype


    opt = <HTMLOptionElement>(document.createElement('OPTION'));
    opt.value = '';
    opt.disabled = true;
    opt.style.display = "none";
    selecttype.appendChild(opt);





    for (var propt in type)
    {
        var opt = <HTMLOptionElement>document.createElement('OPTION');
        opt.value = propt;
        opt.innerHTML = propt;
        //  opt.onclick = function () { jil(12) };
        selecttype.appendChild(opt);


    };

    selecttype.value = ''



 var jil = function (selelem, si)
    {

        var makeobject = function (value, key)
        {


            selecteddevice[key] = value;

        }



        var choosen = selelem.options[selelem.selectedIndex].value
        var div;
        if (selelem == select)
        {
            var id = "selectedmaster";
            div = document.getElementById(id);
            makeobject(choosen, id);
        };
        if (selelem == selectio)
        {
            id = "selectedio";
            div = document.getElementById(id);
            makeobject(choosen, id);
        }
        if (selelem == selecttype)
        {
            id = "selectedtype";
            div = document.getElementById(id);
            makeobject(choosen, id);
        };
        div.innerHTML = choosen;











    };





}

var fillpropertieselecteddevice = function (data?)
{


    if (data)
    {
        tobeselecteddevices = JSON.parse(data);
    };


    var selected = <HTMLSelectElement>document.getElementById("Selectdevice");



    selected.onchange = function () { jil(selected, this.selectedIndex) };



    var opt = <HTMLOptionElement>document.createElement('OPTION');
    opt.value = '';
    opt.disabled = true;
    opt.style.display = "none";
    selected.appendChild(opt);



    for (var propt in tobeselecteddevices)
    {
        opt = <HTMLOptionElement>document.createElement('OPTION');
        opt.value = propt;
        opt.innerHTML = propt;
        //  opt.onclick = function () { jil(12) };
        selected.appendChild(opt);
    };
    selected.value = '';

    var jil = function (selelem, si)
    {

        var makeobject = function (value, key)
        {
            choosendevice = value;
        }

        var choosen = selelem.options[selelem.selectedIndex].value
        var div;

        var id = "selecteddevice";
        div = document.getElementById(id);
        makeobject(choosen, id);

        div.innerHTML = choosen;











    };







}



var discoverlocalhuebridge2 = function ()
{

    socket.emit('discoverlocalbridge2', { my: 'function' });

}


var addusertobridge = function ()
{

    socket.emit('addusertobridge', { my: 'function' });




};


var getdatastore = function ()
{

    socket.emit('getdatastore', { my: 'function' });


}

var showlights = function ()
{

    socket.emit('showlights', { my: 'function' });


}

var colorpicker = function ()
{

    socket.emit('createcanvas', { my: 'function' });

}
//http://stackoverflow.com/questions/136458/change-the-url-in-the-browser-without-loading-the-new-page-using-javascript
// http://stackoverflow.com/questions/1655065/redirecting-to-a-relative-url-in-javascript
//http://stackoverflow.com/questions/503093/how-can-i-make-a-redirect-page-in-jquery-javascript?lq=1
var redirect = function ()
{
    window.location.replace('/path');

}

var rfxcom = function ()
{

    // window.history.replaceState("object or string", "Title", "/rfxcompage");
    //   parent.location.hash = '/rfxcompage'
    //   window.location.assign('/rfxcompage');

   


    CreateorShowTable(RfxcomTable);

}


var simplestrings = function (data)
{
    
    var dataArray = [];
     dataArray =   JSON.parse(data);




   
    

        CreateorShowTable(function () {return SimpleStringsTable(dataArray) });
       // CreateorShowTable(function () { return SimpleStringsTable(dataArray); })
  
}




var adddevice = function ()
{



    CreateorShowTable(AddDeviceTable);





}

var DeviceTable = function () 
{

    socket.emit('createdevicetable');

}





var devicet = function ()
{


    CreateorShowTable(DeviceTable);


}











// array of saved placeholderdivs
var savedplaceholderdivs = {};

var createpage = function ()
{
    masterpagediv.style
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../Scripts/hue/jquery-ui-1.11.2.custom/jquery-ui.min.css';
    document.head.appendChild(link);

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../Scripts/hue/jquery-ui-1.11.2.custom/jquery-ui.theme.min.css';
    document.head.appendChild(link);

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../styles/styles.css';
    document.head.appendChild(link);





    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../Scripts/hue/canvascreatepage.js ';

    document.head.appendChild(script);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../Scripts/hue/canvaspoint2.js ';

    document.head.appendChild(script);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../Scripts/hue/canvascolormap.js ';

    document.head.appendChild(script);


    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../Scripts/hue/canvaswhitemap.js ';

    document.head.appendChild(script);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../Scripts/hue/colorconverter.js ';

    document.head.appendChild(script);







    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../Scripts/hue/jquery-1.11.1.min.js ';

    document.head.appendChild(script);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../Scripts/hue/jquery-ui-1.11.2.custom/jquery-ui.min.js';

    document.head.appendChild(script);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../Scripts/createtable.js';

    document.head.appendChild(script);

    var title = document.createElement("title")
    title.innerHTML = "JillesNodeServer";

    document.head.appendChild(title);


    var div = document.createElement('div')
   div.innerHTML = "JillesNodeServer";
    div.style.fontSize = "1.5em";
    div.style.color = "yellow";
    div.style.backgroundColor = "blue";
    div.style.padding = "0.5em";
    masterpagediv.appendChild(div);



    createbutton("FindLocalBridge", "FindLocalBridge", discoverlocalhuebridge2);
    createbutton("AddUserToBridge", "AddUser", addusertobridge);
    createbutton("GetDataStore", "GetData", getdatastore);
    createbutton("ShowLights", "ShowLights", showlights);
    createbutton("clearPage", "clear", clearpage);
    createbutton("ColorPicker", "colorpicker", colorpicker);
    createbutton("redirect", "redirect", redirect);
    createbutton("rfxcom", "rfxcom", rfxcom);
    createbutton("adddevice", 'AddDevice', adddevice);
    createbutton("devicetable", "DeviceTable", devicet);

    div = document.createElement('div');
    div.id = "tableplaceholder"
    masterpagediv.appendChild(div);

    createmastertable();

}

//this._image.onload = function (event) {
//    self.onImageLoad(event);


/**
 *creates button withoutparams


 */
var createbutton = function (buttonid: string, buttonval: string, buttonfunction: any): any
{
    var button = document.createElement("input")
    button.id = buttonid;
    button.value = buttonval;
    button.type = "button";
    // button.onclick = function () { buttonfunction + "()"; };
    button.addEventListener("click", function () { execute(buttonfunction) });

    masterpagediv.appendChild(button);

    var execute = function (fct)
    {
        fct();
    }

}
/**
 *creates button with params
* no appendchild is formed
* returns var button
 */
var createbutton2 = function (buttonid: string, buttonval: string, buttonfunction: any): any
{
    var button = document.createElement("input")
    button.id = buttonid;
    button.value = buttonval;
    button.type = "button";
    // button.onclick = function () { buttonfunction + "()"; };
    button.addEventListener("click", function () { execute(buttonfunction) });



    var execute = function (fct)
    {
        fct();
    }

    return button;
}

var createbutton3 = function (id, buttonid: string, buttonval: string, buttonfunction: any): any
{
    var button = document.createElement("input")
    button.id = buttonid;
    button.value = buttonval;
    button.type = "button";
    // button.onclick = function () { buttonfunction + "()"; };
    button.addEventListener("click", function () { execute(buttonfunction, id) });



    var execute = function (fct, i)
    {
        fct(i);
    }

    return button;
}

var createbutton4 = function (id, buttonid: string, buttonval: string, lightstatefunction: any, lightstatevalue: any, buttonfunction: any): any
{
    var button = document.createElement("input")
    button.id = buttonid;
    button.value = buttonval;
    button.type = "button";
    // button.onclick = function () { buttonfunction + "()"; };
    button.addEventListener("click", function () { execute(buttonfunction, id, lightstatefunction, lightstatevalue) });



    var execute = function (fct, i, lightstatefunction, lightstatevalue)
    {
        fct(i, lightstatefunction, lightstatevalue);
    }

    return button;
}

var createbutton5 = function (buttonid: string, buttonval: string, buttonfunction: any, devicecode: any, devicefunction: any): any
{
    var button = document.createElement("input")
    button.id = buttonid;
    button.value = buttonval;
    button.type = "button";
    // button.onclick = function () { buttonfunction + "()"; };
    button.addEventListener("click", function () { execute(buttonfunction, devicecode, devicefunction) });



    var execute = function (fct, devicecode, devicefunction)
    {
        fct(devicecode, devicefunction);
    }

    return button;
}

// butten for rollershutter wit a= id b,c,d devicecode
var createbutton6 = function (buttonid: string, buttonval: string, buttonfunction: any, a: any, b: any, c: any, d: any, devicefunction: any): any
{
    var button = document.createElement("input")
    button.id = buttonid;
    button.value = buttonval;
    button.type = "button";
    // button.onclick = function () { buttonfunction + "()"; };
    button.addEventListener("click", function () { execute(buttonfunction, a, b, c, d, devicefunction) });



    var execute = function (fct, a, b, c, d, devicefunction)
    {
        fct(a, b, c, d, devicefunction);
    }

    return button;
}




var clearpage = function ()
{
    var b;
    var c;

    //socket.emit('clearpage', { my: 'function' });
    // document.body.innerHTML = '';
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function ()
    {

        if (this.readyState == 4 && this.status == 200)
        {
            b = this.responseText
        } else
        {
            alert(this.status);
            c = this.responseText;
        }
    }

    xmlhttp.open("POST", "http://" + "10.10.10.4:8888/", true);
    xmlhttp.setRequestHeader("Content-type", "text/plain");
    xmlhttp.send("this is my message");







}







var createmenu = function (menuJson: string)
{
    // first clear the page menu is created before page because it must be on top

    document.body.innerHTML = '';

    masterpagediv = document.createElement("div");
    var divid = "masterpagediv";
    masterpagediv.id = divid;

    document.body.appendChild(masterpagediv);


    var colorcharacter = "red"
    var colorback = "yellow"
    var coloronmouseover = "gold"

    var body = document.body;

    var menuobject = menuJson ? JSON.parse(menuJson) : [];
    var menuobjectitemslength = menuJson ? Object.keys(menuobject.menuitems).length : 0;


    var ulist = document.createElement("ul");

    var ulistid = "menu";
    ulist.id = ulistid;

    // http://stackoverflow.com/questions/6487366/how-to-generate-event-handlers-with-loop-in-javascript

    for (var i = 1; i < menuobjectitemslength + 1; i++)
    {
        makelist(menuobject, i);
    };

    masterpagediv.appendChild(ulist);


    function makelist(menuobject, i) 
    {



        var usublist = document.createElement("ul");

        var submenuitemslength = Object.keys(menuobject.menuitems["menuitem" + i]["submenu"]).length;

        //menuitems
        var listel: HTMLElement = document.createElement("li");
        var listelid = menuobject.menuitems["menuitem" + i]["id"];
        listel.id = listelid;
        listel.className = "menuitem"
        listel.innerHTML = listelid;

        listel.style.display = "inline";
        listel.style.position = "relative";
        listel.style.backgroundColor = colorback;
        listel.style.color = colorcharacter;
        listel.style.padding = "10px 20px";
        //listel.addEventListener("mouseover", function () { listel.style.backgroundColor = "orange"; });
        listel.addEventListener("mouseover", function () { mouseover(listel, usublist) });
        listel.addEventListener("mouseout", function () { mouseout(listel, usublist) });



        var usublistid = menuobject.menuitems["menuitem" + i]["submenu"]["id"];
        usublist.id = usublistid;
        usublist.style.display = "none";
        usublist.style.left = "-40px";
        usublist.style.top = "35px";
        usublist.style.position = "absolute";


        for (var j = 1; j < submenuitemslength; j++)
        {
            makesublist(menuobject, i, j, usublist);

        }


        listel.appendChild(usublist);
        ulist.appendChild(listel);

    }; // end makelist 

    // listel.onmouseover = function () { usublist.style.display = "block"; listel.style.background = "orange" }
    // listel.onmouseout = function () { usublist.style.display = "none"; listel.style.backgroundColor = "black"; }

    function makesublist(menuobject, i, j, usublist) 
    {
        var usubsublist = document.createElement("ul");


        var subsubmenuitemslength = Object.keys(menuobject.menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["sub2menu"]).length;

        //menuitems

        var slistel = document.createElement("li");
        var slistid = menuobject.menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["id"];
        slistel.id = slistid;
        slistel.innerHTML = slistid;
        slistel.style.display = "block";
        slistel.style.backgroundColor = colorback;
        slistel.style.color = colorcharacter;
        slistel.style.padding = "10px 20px"
          // slistel.onmouseover = function () { slistel.style.backgroundColor = "orange" }       //  { sublist.style.display = "block" }
          //  slistel.onmouseout = function () { slistel.style.backgroundColor = "black"; }           //{ sublist.style.display = "none" }
           slistel.addEventListener("mouseover", function () { mouseover(slistel, usubsublist) });
        slistel.addEventListener("mouseout", function () { mouseout(slistel, usubsublist) });

        var usubsublistid = menuobject.menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["sub2menu"]["id"];
        usubsublist.id = usubsublistid;
        usubsublist.style.display = "none";
        usubsublist.style.left = "140px";
        usubsublist.style.top = "0px";
        usubsublist.style.position = "absolute";








        for (var k = 1; k < subsubmenuitemslength; k++)
        {

            makesubsublist(menuobject, i, j, k, usubsublist)

         }

        slistel.appendChild(usubsublist);


        usublist.appendChild(slistel);

    };





    function makesubsublist(menuobject, i, j, k, usubsublist) 
    {


        //menuitems
        var sslistel: HTMLElement = document.createElement("li");
        var sslistelid = menuobject.menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["sub2menu"]["sub2menuitem" + i + j + k]["id"];

        sslistel.id = sslistelid;
        sslistel.className = "menuitem"
        sslistel.innerHTML = sslistelid;

        sslistel.style.display = "block";
        sslistel.style.position = "relative";
        sslistel.style.backgroundColor = colorback;
        sslistel.style.color = colorcharacter;
        sslistel.style.padding = "10px 20px";
        sslistel.addEventListener("mouseover", function () { sslistel.style.backgroundColor = coloronmouseover; });
        sslistel.addEventListener("mouseout", function () { sslistel.style.backgroundColor = colorback; });

        usubsublist.appendChild(sslistel);

    }; // end makesubsublist 



    var mouseout = function (el, ul)
    {
        el.style.backgroundColor = colorback;
        ul.style.display = "none";
    }

   var mouseover = function (el, ul)
    {
        el.style.backgroundColor = coloronmouseover;
        ul.style.display = "block";
    }



};    // end createlist



var createparenttableelements = function (count)
{


    var parenttablediv = document.createElement("div");
    var divid = "parenttable";
    parenttablediv.id = divid;
    parenttablediv.style.display = "table";
    parenttablediv.style.borderSpacing = "4px"
    //   top right bottom left


    //  row for map and slider


    var parenttablecaptiondiv = document.createElement("div");
    var divid = "parenttablecaption";
    parenttablecaptiondiv.id = divid;
    parenttablecaptiondiv.style.display = "table-caption";
    parenttablecaptiondiv.style.fontWeight = "bold";
    parenttablecaptiondiv.style.textAlign = "center";
    parenttablecaptiondiv.innerHTML = "Bridges"
    parenttablecaptiondiv.style.background = "lavender";
    parenttablediv.appendChild(parenttablecaptiondiv);


    var parentheaderrowdiv = document.createElement("div");
    var divid = "parentheaderrow";
    parentheaderrowdiv.id = divid;
    parentheaderrowdiv.style.display = "table-row";


    // +1 becuase of extra button
    for (var k = 1; k < count + 2; k++)
    {
        var parentheadercelldiv = document.createElement("div");
        var divid = "parentheadercell" + k;
        parentheadercelldiv.id = divid;
        parentheadercelldiv.style.display = "table-cell";
        parentheadercelldiv.style.background = "lavender";
        parentheadercelldiv.style.paddingRight = "20px";
        parentheadercelldiv.style.paddingLeft = "20px";
        parentheadercelldiv.style.fontWeight = "bold"





        parentheaderrowdiv.appendChild(parentheadercelldiv);
    }
    parenttablediv.appendChild(parentheaderrowdiv)

    for (var i = 1; i < 3; i++)
    {

        var parentrowdiv = document.createElement("div");
        var divid = "parentrow" + i;
        parentrowdiv.id = divid;
        parentrowdiv.style.display = "table-row";






        for (var j = 1; j < count + 2; j++)
        {
            var parentcelldiv = document.createElement("div");
            var divid = "parentcell" + i + j;
            parentcelldiv.id = divid;
            parentcelldiv.style.display = "table-cell";
            parentcelldiv.style.background = "lavender";
            parentcelldiv.style.paddingRight = "20px";
            parentcelldiv.style.paddingLeft = "20px";
            parentrowdiv.appendChild(parentcelldiv);
        }

        parenttablediv.appendChild(parentrowdiv);
    }
    var tableplaceholderdiv = document.getElementById("mastercell11")

    tableplaceholderdiv.appendChild(parenttablediv);







};






var fillrowparenttable = function (datastring)
{

    var brobj;

    var brobjarr = JSON.parse(datastring);

    brobj = brobjarr[0];

    var count = Object.keys(brobj).length;



    var cell: HTMLElement;


    for (var i = 1; i < count + 2; i++)
    {
        cell = document.getElementById("parentheadercell" + i);

        if (i < count + 1)
        {

            cell.innerHTML = Object.keys(brobj)[i - 1];
        }
        else
        {
            cell.innerHTML = "function"
        }

    }


    for (var i = 1; i < count + 2; i++)
    {
        cell = document.getElementById("parentcell1" + i);

        if (i < count + 1)
        {

            cell.innerHTML = brobj[Object.keys(brobj)[i - 1]];

        }
        else
        {
            var button = createbutton2("select" + 1, "selectbridge" + 1, selectbridge);
            cell.appendChild(button);
        }

    }





    //cell = document.getElementById("parentcell11")
    //cell.innerHTML = brobj.id;
    //cell = document.getElementById("parentcell12")
    //cell.innerHTML = brobj.internalipaddress;
    //cell = document.getElementById("parentcell13")
    //cell.innerHTML = brobj.macaddress;
    //cell = document.getElementById("parentcell14")
    //cell.innerHTML = brobj.name;

};


/**
         * Does stuff
         *
         * @param blah stuff needing done 
         */
var createlighttable = function (lightsjson)
{
    var lights = JSON.parse(lightsjson);
    // count off cells in a row



    // createcells

    var parenttablediv = document.createElement("div");
    var divid = "parenttable2";
    parenttablediv.id = divid;
    parenttablediv.style.display = "table";
    parenttablediv.style.borderSpacing = "4px"
    //   top right bottom left



    // captionrow
    var parenttablecaptiondiv = document.createElement("div");
    var divid = "parenttablecaption2";
    parenttablecaptiondiv.id = divid;
    parenttablecaptiondiv.style.display = "table-caption";
    parenttablecaptiondiv.style.fontWeight = "bold";
    parenttablecaptiondiv.style.textAlign = "center";
    parenttablecaptiondiv.innerHTML = "Lights"
    parenttablecaptiondiv.style.background = "lavender";
    parenttablediv.appendChild(parenttablecaptiondiv);


    var parentheaderrowdiv = document.createElement("div");
    var divid = "parentheaderrow2";
    parentheaderrowdiv.id = divid;
    parentheaderrowdiv.style.display = "table-row";

    var lightspropertiestobedisplayed = {
        "id": "",
        "name": "",
        "modelid": "",
        "type": ""
    };

    var lightpropertycount = Object.keys(lightspropertiestobedisplayed).length;

    // lightspropertiestobedisplayed


    for (var k = 1; k < lightpropertycount + 2; k++)
    {
        var parentheadercelldiv = document.createElement("div");
        var divid = "parentheadercell2" + k;
        parentheadercelldiv.id = divid;
        parentheadercelldiv.style.display = "table-cell";
        parentheadercelldiv.style.background = "lavender";
        parentheadercelldiv.style.paddingRight = "20px";
        parentheadercelldiv.style.paddingLeft = "20px";
        parentheadercelldiv.style.fontWeight = "bold";
        parentheaderrowdiv.appendChild(parentheadercelldiv);
    }







    /**
         *cretes master table to put other tables in
         *
         * @param blah stuff needing done 
         */
    parenttablediv.appendChild(parentheaderrowdiv)

    for (var i in lights)
    {

        //lightspropertiestobedisplayed["id"] = Object.keys(lights)[i - 1];
        lightspropertiestobedisplayed["id"] = i;
        lightspropertiestobedisplayed["name"] = lights[i]["name"];
        lightspropertiestobedisplayed["modelid"] = lights[i]["modelid"];
        lightspropertiestobedisplayed["type"] = lights[i]["type"];




        var parentrowdiv = document.createElement("div");
        var divid = "parentrow2" + i;
        parentrowdiv.id = divid;
        parentrowdiv.style.display = "table-row";





        // +1 for button
        for (var j = 1; j < lightpropertycount + 2; j++)
        {
            var parentcelldiv = document.createElement("div");
            var divid = "parentcell2" + i + j;
            parentcelldiv.id = divid;
            parentcelldiv.style.display = "table-cell";
            parentcelldiv.style.background = "lavender";
            parentcelldiv.style.paddingRight = "20px";
            parentcelldiv.style.paddingLeft = "20px";



            parentrowdiv.appendChild(parentcelldiv);
        }

        parenttablediv.appendChild(parentrowdiv);
    }
    var mastertablediv = document.getElementById("mastercell12")

    mastertablediv.appendChild(parenttablediv);

    // fillcells


    fillrowslighttable(lightsjson);

}

var fillrowslighttable = function (lightsjson)
{
    var lights = JSON.parse(lightsjson);

    var lightspropertiestobedisplayed = {
        "id": "",
        "name": "",
        "modelid": "",
        "type": ""
    };

    var lightpropertycount = Object.keys(lightspropertiestobedisplayed).length;


    var cell: HTMLElement;

    for (var k = 1; k < lightpropertycount + 2; k++)
    {
        cell = document.getElementById("parentheadercell2" + k);
        if (k < lightpropertycount + 1)
        {

            cell.innerHTML = Object.keys(lightspropertiestobedisplayed)[k - 1];
        }
        else
        {
            cell.innerHTML = "function"
        }


    }


    for (var i in lights)
    {

        // lightspropertiestobedisplayed["id"] = Object.keys(lights)[i - 1];
        lightspropertiestobedisplayed["id"] = i;
        lightspropertiestobedisplayed["name"] = lights[i]["name"];
        lightspropertiestobedisplayed["modelid"] = lights[i]["modelid"];
        lightspropertiestobedisplayed["type"] = lights[i]["type"];

        for (var j = 1; j < lightpropertycount + 2; j++)
        {
            cell = document.getElementById("parentcell2" + i + "" + j)

            if (j < lightpropertycount + 1)
            {
                cell.innerHTML = lightspropertiestobedisplayed[Object.keys(lightspropertiestobedisplayed)[j - 1]];
            }
            else
            {

                cell.innerHTML = "";
                cell.innerHTML = "";
                //cell.appendChild(createbutton3(i, "on" + i, "on" + i, lighton));
                // cell.appendChild(createbutton3(i, "off" + i, "off" + i, lightoff))
                cell.appendChild(createbutton4(i, "on" + i, "on" + i, "on", true, lightstatecontrol));
                cell.appendChild(createbutton4(i, "off" + i, "off" + i, "on", false, lightstatecontrol))



            }

        }
    }

}










var createmastertable = function ()
{
    var masterrowcount = 1;
    var mastercellcount = 2;

    var mastertablediv = document.createElement("div");
    var divid = "mastertable";
    mastertablediv.id = divid;
    mastertablediv.style.display = "table";
    mastertablediv.style.borderSpacing = "4px"

    for (var i = 1; i < masterrowcount + 1; i++)
    {

        var masterrowdiv = document.createElement("div");
        var divid = "masterrow" + i;
        masterrowdiv.id = divid;
        masterrowdiv.style.display = "table-row";

        for (var j = 1; j < mastercellcount + 1; j++)
        {
            var mastercelldiv = document.createElement("div");
            var divid = "mastercell" + i + j;
            mastercelldiv.id = divid;
            mastercelldiv.style.display = "table-cell";
            // mastercelldiv.style.background = "lavender";
            //  mastercelldiv.style.paddingRight = "20px";
            //  mastercelldiv.style.paddingLeft = "20px";
            masterrowdiv.appendChild(mastercelldiv);
        }

        mastertablediv.appendChild(masterrowdiv);
    }

    var tableplaceholderdiv = document.getElementById("tableplaceholder")

    tableplaceholderdiv.appendChild(mastertablediv);

}

var selectbridge = function (i)
{
    var jil = i;
    var jil2 = 6;

}






var lightstatecontrol = function (idpoint, lightstatevariable, lightstatevalue)
{
    var data: any = {};
    data["id"] = idpoint;
    data["statevariable"] = lightstatevariable;
    data["statevalue"] = lightstatevalue;
    var datajson = JSON.stringify(data);


    data = {};
    var id = {}
    var property = {};
    property[lightstatevariable] = lightstatevalue;
    id[idpoint] = property;
    data.state = id;



    var datajson = JSON.stringify(data);

    socket.emit("lightstatecontrol", datajson);
}

//#region "menu"

var menuitem = document.getElementById("sub2menuitem111");

var menuitem = document.getElementById("sub2menuitem1121");






//#endregion

//#region "rfxcom"

var RfxcomTable = function ()
{
    var count = 5;
    var nameTable = "RfxcomTable"



    // parentable is child table of mastertable is the specifik page

    var parenttablediv = document.createElement("div");
    var divid = nameTable; // was parenttable
    parenttablediv.id = divid;
    parenttablediv.style.display = "table";
    parenttablediv.style.borderSpacing = "4px"
    //   top right bottom left


    //  row for map and slider


    var parenttablecaptiondiv = document.createElement("div");
    var divid = "parenttablecaption";
    parenttablecaptiondiv.id = divid;
    parenttablecaptiondiv.style.display = "table-caption";
    parenttablecaptiondiv.style.fontWeight = "bold";
    parenttablecaptiondiv.style.textAlign = "center";
    parenttablecaptiondiv.innerHTML = "RfxCom"
    parenttablecaptiondiv.style.background = "lavender";
    parenttablediv.appendChild(parenttablecaptiondiv);


    var parentheaderrowdiv = document.createElement("div");
    var divid = "parentheaderrow";
    parentheaderrowdiv.id = divid;
    parentheaderrowdiv.style.display = "table-row";


    // +1 becuase of extra button
    for (var k = 1; k < count + 2; k++)
    {
        var parentheadercelldiv = document.createElement("div");
        var divid = "parentheadercell" + k;
        parentheadercelldiv.id = divid;
        parentheadercelldiv.style.display = "table-cell";
        parentheadercelldiv.style.background = "lavender";
        parentheadercelldiv.style.paddingRight = "20px";
        parentheadercelldiv.style.paddingLeft = "20px";
        parentheadercelldiv.style.fontWeight = "bold"





        parentheaderrowdiv.appendChild(parentheadercelldiv);
    }
    parenttablediv.appendChild(parentheaderrowdiv)

    // i is row

    for (var i = 1; i < 18; i++)
    {

        var parentrowdiv = document.createElement("div");
        var divid = "parentrow" + i;
        parentrowdiv.id = divid;
        parentrowdiv.style.display = "table-row";






        for (var j = 1; j < count + 2; j++)
        {

            var parentcelldiv = document.createElement("div");
            var divid = "parentcell" + i + j;
            parentcelldiv.id = divid;
            parentcelldiv.style.display = "table-cell";
            parentcelldiv.style.background = "lavender";
            parentcelldiv.style.paddingRight = "20px";
            parentcelldiv.style.paddingLeft = "20px";


            if ((i == 1) && (j == 1))
            {
                parentcelldiv.innerHTML = "comPort:";
            }
            else if ((i == 1) && (j == 2))
            {
                var x = document.createElement("INPUT");
                x.id = "rfxcomport";
                x.setAttribute("type", "text");
                x.style.width = "120px";
                parentcelldiv.appendChild(x)
            }
            else if ((i == 1) && (j == 3))
            {
                var button = createbutton2("selectcomport", "selectcomport", selectcomport);
                parentcelldiv.appendChild(button);
            }
            else if ((i == 2) && (j == 1))
            {
                var button = createbutton2("getcomports", "getcomports", getcomports);
                parentcelldiv.appendChild(button);


            }
            else if ((i == 2) && (j == 2))
            {
                var select = document.createElement("SELECT");
                select.id = "selectcom"
                var opt = <HTMLOptionElement>document.createElement('OPTION');
                opt.value = "";
                select.appendChild(opt);
                parentcelldiv.appendChild(select);
            }
            else if ((i == 2) && (j == 3))
            {
                var div = document.createElement("div");
                div.id = "selectedcom"
                div.innerHTML = "Not Selected"
                div.style.width = "140px"
                parentcelldiv.appendChild(div);
            }

            else if ((i == 3) && (j == 1))
            {
                var button = createbutton2("test", "test", test);
                parentcelldiv.appendChild(button);

            }

            else if ((i == 4) && (j == 1))
            {
                var button = createbutton5("on", "switchonA4", switchWithParameters, 'A4', 'On');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 4) && (j == 2))
            {
                var button = createbutton5("off", "switchoffA4", switchWithParameters, 'A4', 'Off');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 5) && (j == 1))
            {

                var button = createbutton5("on", "switchonA3", switchWithParameters, 'A3', 'On');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 5) && (j == 2))
            {
                var button = createbutton5("off", "switchoffA3", switchWithParameters, 'A3', 'Off');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 6) && (j == 1))
            {

                var button = createbutton6("up", "rs right behind up", switchWithParameters2, 1, 1, 1, 2, 'Up');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 6) && (j == 2))
            {
                var button = createbutton6("down", "rs right behind down", switchWithParameters2, 1, 1, 1, 2, 'Down');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 7) && (j == 1))
            {

                var button = createbutton6("up", "rs left behind up", switchWithParameters2, 1, 1, 1, 3, 'Up');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 7) && (j == 2))
            {
                var button = createbutton6("down", "r left behind down", switchWithParameters2, 1, 1, 1, 3, 'Down');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 8) && (j == 1))
            {

                var button = createbutton6("up", "rs  behind side up", switchWithParameters2, 4, 1, 1, 4, 'Up');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 8) && (j == 2))
            {
                var button = createbutton6("down", "r behind side down", switchWithParameters2, 4, 1, 1, 4, 'Down');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 9) && (j == 1))
            {

                var button = createbutton6("up", "rs middel behind  up", switchWithParameters2, 1, 1, 1, 1, 'Up');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 9) && (j == 2))
            {
                var button = createbutton6("down", "rs middel behind  down", switchWithParameters2, 1, 1, 1, 1, 'Down');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 10) && (j == 1))
            {

                var button = createbutton6("up", "rs front kitchen up", switchWithParameters2, 1, 1, 1, 5, 'Up');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 10) && (j == 2))
            {
                var button = createbutton6("down", "rs front kitchen  down", switchWithParameters2, 1, 1, 1, 5, 'Down');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 11) && (j == 1))
            {

                var button = createbutton6("up", "rs luik kitchen up", switchWithParameters2, 1, 0, 1, 8, 'Up');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 11) && (j == 2))
            {
                var button = createbutton6("down", "rs luik kitchen  down", switchWithParameters2, 1, 0, 1, 8, 'Down');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 12) && (j == 1))
            {

                var button = createbutton6("up", "rs voer kitchen up", switchWithParameters2, 1, 0, 1, 6, 'Up');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 12) && (j == 2))
            {
                var button = createbutton6("down", "rs voer kitchen  down", switchWithParameters2, 1, 0, 1, 6, 'Down');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 13) && (j == 1))
            {

                var button = createbutton6("up", "rs jeroen re up", switchWithParameters2, 1, 0, 2, 1, 'Up');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 13) && (j == 2))
            {
                var button = createbutton6("down", "rs jeroen re down", switchWithParameters2, 1, 0, 2, 1, 'Down');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 14) && (j == 1))
            {

                var button = createbutton6("up", "rs jeroen li up", switchWithParameters2, 1, 0, 2, 2, 'Up');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 14) && (j == 2))
            {
                var button = createbutton6("down", "rs jeroen li  down", switchWithParameters2, 1, 0, 2, 2, 'Down');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 15) && (j == 1))
            {

                var button = createbutton6("up", "rs bas up", switchWithParameters2, 1, 0, 2, 3, 'Up');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 15) && (j == 2))
            {
                var button = createbutton6("down", "rs bas  down", switchWithParameters2, 1, 0, 2, 3, 'Down');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 16) && (j == 1))
            {

                var button = createbutton6("up", "rs zolder up", switchWithParameters2, 1, 0, 3, 1, 'Up');
                parentcelldiv.appendChild(button);

            }

            else if ((i == 16) && (j == 2))
            {
                var button = createbutton6("down", "rs zolder  down", switchWithParameters2, 1, 0, 3, 1, 'Down');
                parentcelldiv.appendChild(button);

            }







            else
            {
                parentcelldiv.innerHTML = "" + j + i;

            }


















            parentrowdiv.appendChild(parentcelldiv);
        }

        parenttablediv.appendChild(parentrowdiv);
    }


    var tableplaceholderdiv = document.getElementById("mastercell11")




    tableplaceholderdiv.appendChild(parenttablediv);








}

var simplestringscount = -1;

var SimpleStringsTable = function (sendstrings)
{
   

    if (simplestringscount == -1)
    {
        var parenttablediv = document.createElement("div");
        var divid = "parenttable2";
        parenttablediv.id = divid;
        parenttablediv.style.display = "table";
        parenttablediv.style.borderSpacing = "4px"
    //   top right bottom left

    // captionrow
    var parenttablecaptiondiv = document.createElement("div");
        var divid = "parenttablecaption2";
        parenttablecaptiondiv.id = divid;
        parenttablecaptiondiv.style.display = "table-caption";
        parenttablecaptiondiv.style.fontWeight = "bold";
        parenttablecaptiondiv.style.textAlign = "center";
        parenttablecaptiondiv.innerHTML = "SimpleStringsTable";
    parenttablecaptiondiv.style.background = "lavender";
        parenttablediv.appendChild(parenttablecaptiondiv);

        var parentheaderrowdiv = document.createElement("div");
        var divid = "parentheaderrow2";
        parentheaderrowdiv.id = divid;
        parentheaderrowdiv.style.display = "table-row";
        parenttablediv.appendChild(parentheaderrowdiv);
    }
    else
    {
        var parenttablediv = <HTMLDivElement>document.getElementById("parenttable2");
    }




    var parentrowdiv = document.createElement("div");
    var divid = "parentrow" + (sendstrings.length - 1);
    parentrowdiv.id = divid;
    parentrowdiv.style.display = "table-row";

    var parentcelldiv = document.createElement("div");
    var divid = "parentcell" + (sendstrings.length - 1);
    parentcelldiv.id = divid;
    parentcelldiv.style.display = "table-cell";
    parentcelldiv.style.background = "lavender";
    parentcelldiv.style.paddingRight = "20px";
    parentcelldiv.style.paddingLeft = "20px";
    parentcelldiv.innerHTML = sendstrings[sendstrings.length - 1];


    parentrowdiv.appendChild(parentcelldiv);


    parenttablediv.appendChild(parentrowdiv);


    var mastertablediv = document.getElementById("mastercell12")

    mastertablediv.appendChild(parenttablediv);

    simplestringscount = simplestringscount + 1;

};




var fillrowslighttable = function (lightsjson)
{
    var lights = JSON.parse(lightsjson);

    var lightspropertiestobedisplayed = {
        "id": "",
        "name": "",
        "modelid": "",
        "type": ""
    };

    var lightpropertycount = Object.keys(lightspropertiestobedisplayed).length;


    var cell: HTMLElement;

    for (var k = 1; k < lightpropertycount + 2; k++)
    {
        cell = document.getElementById("parentheadercell2" + k);
        if (k < lightpropertycount + 1)
        {

            cell.innerHTML = Object.keys(lightspropertiestobedisplayed)[k - 1];
        }
        else
        {
            cell.innerHTML = "function"
        }


    }


    for (var i in lights)
    {

        // lightspropertiestobedisplayed["id"] = Object.keys(lights)[i - 1];
        lightspropertiestobedisplayed["id"] = i;
        lightspropertiestobedisplayed["name"] = lights[i]["name"];
        lightspropertiestobedisplayed["modelid"] = lights[i]["modelid"];
        lightspropertiestobedisplayed["type"] = lights[i]["type"];

        for (var j = 1; j < lightpropertycount + 2; j++)
        {
            cell = document.getElementById("parentcell2" + i + "" + j)

            if (j < lightpropertycount + 1)
            {
                cell.innerHTML = lightspropertiestobedisplayed[Object.keys(lightspropertiestobedisplayed)[j - 1]];
            }
            else
            {

                cell.innerHTML = "";
                cell.innerHTML = "";
                //cell.appendChild(createbutton3(i, "on" + i, "on" + i, lighton));
                // cell.appendChild(createbutton3(i, "off" + i, "off" + i, lightoff))
                cell.appendChild(createbutton4(i, "on" + i, "on" + i, "on", true, lightstatecontrol));
                cell.appendChild(createbutton4(i, "off" + i, "off" + i, "on", false, lightstatecontrol))



            }

        }
    }

}










var createmastertable = function ()
{
    var masterrowcount = 1;
    var mastercellcount = 2;

    var mastertablediv = document.createElement("div");
    var divid = "mastertable";
    mastertablediv.id = divid;
    mastertablediv.style.display = "table";
    mastertablediv.style.borderSpacing = "4px"

    for (var i = 1; i < masterrowcount + 1; i++)
    {

        var masterrowdiv = document.createElement("div");
        var divid = "masterrow" + i;
        masterrowdiv.id = divid;
        masterrowdiv.style.display = "table-row";

        for (var j = 1; j < mastercellcount + 1; j++)
        {
            var mastercelldiv = document.createElement("div");
            var divid = "mastercell" + i + j;
            mastercelldiv.id = divid;
            mastercelldiv.style.display = "table-cell";
            // mastercelldiv.style.background = "lavender";
            //  mastercelldiv.style.paddingRight = "20px";
            //  mastercelldiv.style.paddingLeft = "20px";
            masterrowdiv.appendChild(mastercelldiv);
        }

        mastertablediv.appendChild(masterrowdiv);
    }

    var tableplaceholderdiv = document.getElementById("tableplaceholder")

    tableplaceholderdiv.appendChild(mastertablediv);

}

var selectbridge = function (i)
{
    var jil = i;
    var jil2 = 6;

}






var lightstatecontrol = function (idpoint, lightstatevariable, lightstatevalue)
{
    var data: any = {};
    data["id"] = idpoint;
    data["statevariable"] = lightstatevariable;
    data["statevalue"] = lightstatevalue;
    var datajson = JSON.stringify(data);


    data = {};
    var id = {}
    var property = {};
    property[lightstatevariable] = lightstatevalue;
    id[idpoint] = property;
    data.state = id;



    var datajson = JSON.stringify(data);

    socket.emit("lightstatecontrol", datajson);
}

//#region "menu"

var menuitem = document.getElementById("sub2menuitem111");

var menuitem = document.getElementById("sub2menuitem1121");






//#endregion

//#region "rfxcom"





var selectcomport = function ()
{

    var y = (<HTMLInputElement>document.getElementById("rfxcomport")).value;

    var j =
        {
            rfxcomport: y

        }

    var json = JSON.stringify(j)

    socket.emit('rfxcomport', json);



};

var getcomports = function ()
{
    socket.emit('getcomports', { my: 'function' });

}

////#endregion
var test = function ()
{

    var com = "COM3"
    var j =
        {
            rfxcomport: com

        }

    var json = JSON.stringify(j)

    socket.emit('test', json);
}



// make object josn with a key suplied
var makeObjectJson = function (key, value): String
{
    var item = {};
    item[key] = value;

    var j = JSON.stringify(item);

    return j;
}


var switchWithParameters = function (dev, fct)
{
    var item = {};
    item["devicecode"] = dev;
    item["command"] = fct;
    item["devicetype"] = "X10switch"
    var json = makeObjectJson('devicecommand', item);


    socket.emit('switchwithparameters', json);

};

var switchWithParameters2 = function (a, b, c, d, fct)
{
    var item = {};
    item["devicecode"] = a;
    item["idcode1"] = b;
    item["idcode2"] = c;
    item["idcode3"] = d;
    item["command"] = fct;
    item["devicetype"] = "rollershutter";

    var json = makeObjectJson('devicecommand', item);


    socket.emit('switchwithparameters', json);

};

//#region adddevice

var getmaster = function ()
{
    socket.emit('getmasters', { my: 'function' });

}





var AddDeviceTable = function ()
{
    var count = 5;

    var nameTable = "AddDeviceTable"
    // parentable is child table of mastertable is the specifik page
    // name is to identify it in array of existing pages




    var parenttablediv = document.createElement("div");
    var divid = nameTable;
    parenttablediv.id = divid;
    parenttablediv.style.display = "table";
    parenttablediv.style.borderSpacing = "4px"
    //   top right bottom left


    //  row for map and slider


    var parenttablecaptiondiv = document.createElement("div");
    var divid = "parenttablecaption";
    parenttablecaptiondiv.id = divid;
    parenttablecaptiondiv.style.display = "table-caption";
    parenttablecaptiondiv.style.fontWeight = "bold";
    parenttablecaptiondiv.style.textAlign = "center";
    parenttablecaptiondiv.innerHTML = "AddDevice"
    parenttablecaptiondiv.style.background = "lavender";
    parenttablediv.appendChild(parenttablecaptiondiv);


    var parentheaderrowdiv = document.createElement("div");
    var divid = "parentheaderrow";
    parentheaderrowdiv.id = divid;
    parentheaderrowdiv.style.display = "table-row";


    // +1 becuase of extra button
    for (var k = 1; k < count + 2; k++)
    {
        var parentheadercelldiv = document.createElement("div");
        var divid = "parentheadercell" + k;
        parentheadercelldiv.id = divid;
        parentheadercelldiv.style.display = "table-cell";
        parentheadercelldiv.style.background = "lavender";
        parentheadercelldiv.style.paddingRight = "20px";
        parentheadercelldiv.style.paddingLeft = "20px";
        parentheadercelldiv.style.fontWeight = "bold"





        parentheaderrowdiv.appendChild(parentheadercelldiv);
    }
    parenttablediv.appendChild(parentheaderrowdiv)

    // i is row // j = cell

    for (var i = 1; i < 5; i++)
    {

        var parentrowdiv = document.createElement("div");
        var divid = "parentrow" + i;
        parentrowdiv.id = divid;
        parentrowdiv.style.display = "table-row";






        for (var j = 1; j < count + 2; j++)
        {

            var parentcelldiv = document.createElement("div");
            var divid = "parentcell" + i + j;
            parentcelldiv.id = divid;
            parentcelldiv.style.display = "table-cell";
            parentcelldiv.style.background = "lavender";
            parentcelldiv.style.paddingRight = "20px";
            parentcelldiv.style.paddingLeft = "20px";


            if ((i == 1) && (j == 1))
            {
                parentcelldiv.innerHTML = "master";
            }
            else if ((i == 1) && (j == 2))
            {
                var select = <HTMLSelectElement>document.createElement("SELECT");
                select.id = "SelectMaster"
                parentcelldiv.appendChild(select);
                getmaster();
            }
            else if ((i == 1) && (j == 3))
            {
                divid = "selectedmaster";
                parentcelldiv.id = divid;
                parentcelldiv.innerHTML = "";
            }
            else if ((i == 2) && (j == 1))
            {
                parentcelldiv.innerHTML = "io ?";


            }
            else if ((i == 2) && (j == 2))
            {
                select = <HTMLSelectElement>document.createElement("SELECT");
                select.id = "SelectIfIo"
                parentcelldiv.appendChild(select);


            }
            else if ((i == 2) && (j == 3))
            {

                divid = "selectedio";
                parentcelldiv.id = divid;
                parentcelldiv.innerHTML = "";
            }

            else if ((i == 3) && (j == 1))
            {
                parentcelldiv.innerHTML = "devicetype ?";

            }

            else if ((i == 3) && (j == 2))
            {


                select = <HTMLSelectElement>document.createElement("SELECT");
                select.id = "Selecttype";
                parentcelldiv.appendChild(select);
                // getmaster();

            }

            else if ((i == 3) && (j == 3))
            {
                divid = "selectedtype";
                parentcelldiv.id = divid;
                parentcelldiv.innerHTML = "";

            }

            else if ((i == 3) && (j == 4))
            {
                var deviceseldone = function ()
                {

                    var data = JSON.stringify(selecteddevice);
                    socket.emit("devseldone", data);
                };



                var button = createbutton3("doneseldev", "Done", "Done", deviceseldone);
                parentcelldiv.appendChild(button);;

            }


            else if ((i == 4) && (j == 1))
            {

                parentcelldiv.innerHTML = "Device"

            }

            else if ((i == 4) && (j == 2))
            {

                select = <HTMLSelectElement>document.createElement("SELECT");
                select.id = "Selectdevice"
                var opt = <HTMLOptionElement>(document.createElement('OPTION'));
                opt.value = '';
                opt.disabled = true;
                opt.style.display = "none";
                select.appendChild(opt);
                parentcelldiv.appendChild(select);

            }

            else if ((i == 4) && (j == 3))
            {

                divid = "selecteddevice";
                parentcelldiv.id = divid;
                parentcelldiv.innerHTML = "";

            }


            else if ((i == 4) && (j == 4))
            {




                var devicechoosedone = function ()
                {

                    var data = JSON.stringify(choosendevice);
                    socket.emit("devicechoosedone", data);
                };



                var button = createbutton3("donechoosedev", "Done", "Done", devicechoosedone);
                parentcelldiv.appendChild(button);

                parentcelldiv.appendChild(button);

            }





            else if ((i == 4) && (j == 5))
            {

                var devselcanceled = function ()
                {
                    fillpropertiesadddevice();

                }



                var button = createbutton3("cancelseldev", "Cancel", "Cancel", devselcanceled);
                parentcelldiv.appendChild(button);

                selecteddevice = {};



            }








            else
            {
                parentcelldiv.innerHTML = "" + j + i;

            }


















            parentrowdiv.appendChild(parentcelldiv);
        }

        parenttablediv.appendChild(parentrowdiv);
    }
    var tableplaceholderdiv = document.getElementById("mastercell11")





    tableplaceholderdiv.appendChild(parenttablediv);








}    // adddevicetable








//#endregion


//#region 'pagesessions' vclear tableplaceholderdiv = mastercell11

var saveAndClearTable = function (tableplaceholderdiv)
{

    // check ifhas child  and delete page but save it in savedplaceholderdivs

    if (tableplaceholderdiv.hasChildNodes())
    {
        var childs = tableplaceholderdiv.childNodes;
        // save showntable and dlete it

        var firstchildid = tableplaceholderdiv.firstChild.id;
        savedplaceholderdivs[firstchildid] = {};   // create propertie for childs


        while (tableplaceholderdiv.firstChild)
        {

            savedplaceholderdivs[firstchildid][tableplaceholderdiv.firstChild.id] = tableplaceholderdiv.firstChild;
            tableplaceholderdiv.removeChild(tableplaceholderdiv.firstChild);
        }

        // save thes tables if diioes not exist




    };

}

var ReturnSavedTable = function (tbl)
{
    var tableplaceholderdiv = document.getElementById("mastercell11");

    var l = Object.keys(tbl).length;


    for (var i = 0; i < l; i++)
    {

        tableplaceholderdiv.appendChild(tbl[Object.keys(tbl)[i]]);
    }
}


// create new tablke if wasnt saved, otherwise showtable 
var CreateorShowTable = function (fn)
{


  var b =  fn.prototype.toSource;





    var tableplaceholderdiv = document.getElementById("mastercell11")

    saveAndClearTable(tableplaceholderdiv);
    if (fn !== undefined)
    {

        if (savedplaceholderdivs[fn.prototype])
        {

            var elm = savedplaceholderdivs[fn.prototype];
            ReturnSavedTable(elm);
        }
        else
        {
            fn();
        }




    }
   
}








//#endregion