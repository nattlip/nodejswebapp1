document.onload = function () { alert('script load Node!'); };
test = function () { alert('test Node 3!') };


 infoglobal = ""
//var socket = io('http://10.10.10.4:8888');
var socket = io('ws://10.10.10.4:8888')


discoverlocalhuebridge = function ()
{
    
    var messagevar = {

tekst : "fine"

}
    
    var messagejson = JSON.stringify(messagevar);
    
    var meethue = 'http://www.meethue.com/api/nupnp' ;
    
    
    

    var ajax1 = new XMLHttpRequest();
    
    
    
    
    
    
    
    
    
    
    

    ajax1.open("POST", "http://127.0.0.1:8888", true);
    ajax1.setRequestHeader("Content-Type", "application/json");
    
   
    

    ajax1.send(messagejson);
    var info = ajax1.responseText
    
    ajax1.onreadystatechange = function () {
        if (ajax1.readyState == 4 && ajax1.status == 200) {
            infoglobal = ajax1.responseText;
            var jan = 5;
        }
    }

    var jil = "test"

   
}

discoverlocalhuebridge2 = function ()
{ 

    socket.emit('discoverlocalbridge2', { my: 'function' });

}


addusertobridge = function () {
    
    socket.emit('addusertobridge', { my: 'function' });




};


getdatastore = function () {

    socket.emit('getdatastore', { my: 'function' });


}


showlights = function () {
    
    socket.emit('showlights', { my: 'function' });


}

createmenu = function () {
    
    body = document.body;

    var list = document.createElement("ul");
    var listid = "menu";
    list.id = listid;


    var listel1 = document.createElement("li");
    var listid1 = "li1";
    listel1.id = listid1;
    listel1.innerHTML = "item 1";
    listel1.style.display = "inline";
    listel1.style.position = "relative";
    listel1.style.backgroundColor = "black";
    listel1.style.color = "white";
    listel1.style.padding =  "10px 20px"
    listel1.addEventListener("mouseover", function () { sublist1.style.display = "block"; listel1.style.background = "orange"; });
    listel1.addEventListener("mouseout", function () { sublist1.style.display = "none"; listel1.style.backgroundColor = "black"; });


    var sublist1 = document.createElement("ul");
    var sublistid1 = "submenu1";
    sublist1.id = sublistid1;
    sublist1.style.display = "none";
    sublist1.style.left = "-40px";
    sublist1.style.top = "35px";
    sublist1.style.position = "absolute";
    
    var sublistel11 = document.createElement("li");
    var sublistid11 = "subli11";
    sublistel11.id = sublistid11;
    sublistel11.innerHTML = "subitem 11";
    sublistel11.style.backgroundColor = "black";
    sublistel11.style.color = "white";
    sublistel11.style.padding = "10px 20px"
    sublistel11.addEventListener("mouseover", function () { sublistel11.style.background = "orange"; });
    sublistel11.addEventListener("mouseout", function () {  sublistel11.style.backgroundColor = "black"; });
    sublist1.appendChild(sublistel11);

    var sublistel12 = document.createElement("li");
    var sublistid12 = "subli12";
    sublistel12.id = sublistid12;
    sublistel12.innerHTML = "subitem 12";
    sublistel12.style.backgroundColor = "black";
    sublistel12.style.color = "white";
    sublistel12.style.padding = "10px 20px"
    sublistel12.addEventListener("mouseover", function () { sublistel12.style.background = "orange"; });
    sublistel12.addEventListener("mouseout", function () { sublistel12.style.backgroundColor = "black"; });
    sublist1.appendChild(sublistel12);
    
    var sublistel13 = document.createElement("li");
    var sublistid13 = "subli13";
    sublistel13.id = sublistid13;
    sublistel13.innerHTML = "subitem 13";
    sublistel13.style.backgroundColor = "black";
    sublistel13.style.color = "white";    
    sublistel13.style.position = "relative";
    sublistel13.style.padding = "10px 20px"
    sublistel13.onmouseover = function () { sublist13.style.display = "block"; sublistel13.style.background = "orange";}
    sublistel13.onmouseout = function () { sublist13.style.display = "none"; sublistel13.style.background = "black";}

    var sublist13 = document.createElement("ul");
    var sublistid13 = "subsubmenu13";
    sublist13.id = sublistid13;
    sublist13.style.position = "absolute";
    sublist13.style.top = "0px";
    sublist13.style.left = "50px";
    sublist13.style.display = "none";


    var sublistel131 = document.createElement("li");
    var sublistid131 = "subli131";
    sublistel131.id = sublistid131;
    sublistel131.innerHTML = "subitem 131";
    sublistel131.style.backgroundColor = "black";
    sublistel131.style.color = "white";
    sublistel131.style.padding = "10px 20px"
    sublistel131.addEventListener("mouseover", function () { sublistel131.style.background = "orange"; });
    sublistel131.addEventListener("mouseout", function () { sublistel131.style.backgroundColor = "black"; });

    sublist13.appendChild(sublistel131);
    
    var sublistel132 = document.createElement("li");
    var sublistid132 = "subli132";
    sublistel132.id = sublistid132;
    sublistel132.style.backgroundColor = "black";
    sublistel132.style.color = "white";    
    sublistel132.innerHTML = "subitem 132";
    sublistel132.style.padding = "10px 20px"
    sublistel132.addEventListener("mouseover", function () { sublistel132.style.background = "orange"; });
    sublistel132.addEventListener("mouseout", function () { sublistel132.style.backgroundColor = "black"; });
    sublist13.appendChild(sublistel132);
    
    var sublistel133 = document.createElement("li");
    var sublistid133 = "subli133";
    sublistel133.id = sublistid133;
    sublistel133.innerHTML = "subitem 133";
    sublistel133.style.backgroundColor = "black";
    sublistel133.style.color = "white";
    sublistel133.style.padding = "10px 20px";
    sublistel133.addEventListener("mouseover", function () { sublistel133.style.background = "orange"; });
    sublistel133.addEventListener("mouseout", function () { sublistel133.style.backgroundColor = "black"; });
    sublist13.appendChild(sublistel133);
    
    sublistel13.appendChild(sublist13);
    
    
    sublist1.appendChild(sublistel13);
    
    listel1.appendChild(sublist1);
    

    list.appendChild(listel1);
    
    

    var listel2 = document.createElement("li");
    var listid2 = "li2";
    listel2.id = listid2;
    listel2.innerHTML = "item 2"
    listel2.style.display = "inline";
    listel2.style.position = "relative";
    listel2.style.backgroundColor = "black";
    listel2.style.color = "white";
    listel2.style.padding = "10px 20px"
    listel2.addEventListener("mouseover", function () { listel2.style.background = "orange"; });
    listel2.addEventListener("mouseout", function () { listel2.style.backgroundColor = "black"; });
    list.appendChild(listel2);

    var listel3 = document.createElement("li");
    var listid3 = "li3";   
    listel3.id = listid3;
    listel3.innerHTML = "item 3";
    listel3.style.display = "inline";
    listel3.style.position = "relative";
    listel3.style.backgroundColor = "black";
    listel3.style.color = "white";
    listel3.style.padding = "10px 20px"
    listel3.addEventListener("mouseover", function () { listel3.style.background = "orange"; });
    listel3.addEventListener("mouseout", function () { listel3.style.backgroundColor = "black"; });
    list.appendChild(listel3)

    var listel4 = document.createElement("li");
    var listid4 = "li4";
    listel4.id = listid4;
    listel4.innerHTML = "item4"
    listel4.style.display = "inline";
    listel4.style.position = "relative";
    listel4.style.backgroundColor = "black";
    listel4.style.color = "white";
    listel4.style.padding = "10px 20px"
    listel4.addEventListener("mouseover", function () { listel4.style.background = "orange"; });
    listel4.addEventListener("mouseout", function () { listel4.style.backgroundColor = "black"; });
    list.appendChild(listel4)
   
    body.appendChild(list)
    
};


createmenu2 = function(menuJson) {

     var body = document.body;  

    var menu = JSON.parse(menuJson)
    var menuitemslength = Object.keys(menu.menuitems).length;
    

    var list = document.createElement("ul");
    var listid = "menu";
    list.id = listid;

    for (var i = 1; i < menuitemslength + 1 ; i++) {
        
        var submenuitemslength = Object.keys(menu.menuitems["menuitem" + i]["submenu"]).length;
        var listel = undefined;
        //menuitems
        listel = document.createElement("li");
        var listelid = menu.menuitems["menuitem" + i]["id"] ;
        listel.id = listelid;
        listel.className = "menuitem"
        listel.innerHTML = menu.menuitems["menuitem" + i]["id"];
        
        listel.style.display = "inline";
        listel.style.position = "relative";
        listel.style.backgroundColor = "black";
        listel.style.color = "white";
       // listel.onmouseover = function () { sublist.style.display = "block"; listel.style.background = "orange" }
       // listel.onmouseout = function () { sublist.style.display = "none"; listel.style.backgroundColor = "black"; }
        listel.onmouseover = function () {  listel.style.background = "orange" }
        listel.onmouseout = function () {  listel.style.backgroundColor = "black"; }
        
        
        //var  sublist = document.createElement("ul");
        //var sublistid = menu.menuitems["menuitem" + i]["submenu"]["id"];
        //sublist.id = sublistid;
        //sublist.style.display = "none";
        //sublist.style.left = "-40px";
        //sublist.style.top = "35px";
        //sublist.style.position = "absolute";
       
        
        //for (var j = 1; j < menuitemslength + 1 ; j++) {
            
        //    var slistel = undefined;
        //    slistel = document.createElement("li");
        //    var slistid = menu.menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["id"];
        //    slistel.id = slistid;
        //    slistel.innerHTML = menu.menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["id"];            
        //   // slistel.style.display = "none";
        //    slistel.style.backgroundColor = "black";
        //    slistel.style.color = "white";
        //    slistel.style.padding = "10px 20px"
        //    //slistel.onmouseover = function () { sublist.style.display = "block" }
        //    //slistel.onmouseout = function () { sublist.style.display = "none" }

        //    sublist.appendChild(slistel);
        //}
        
        
        
        //listel.appendChild(sublist);
        

       // listel.addEventListener("mouseover", function () { listel.style.background = "orange"; });
       // listel.addEventListener("mouseout", function () { listel.style.backgroundColor = "black"; });
   list.appendChild(listel)
    //}

    body.appendChild(list);

   
    
    mouseout = function (el) {
   el.style.backgroundColor = "black";
    }
    
    mouseover = function (el) {
        el.style.backgroundColor = "orange";
    }

   
    //for (var i = 0; i < menuitems.length ; i++) {
    //for (var k = 0; k < 5 ; k++) {
    //    menuitems[k].onmouseover = mouseover(menuitems[k]);
    //    menuitems[k].onmouseout = mouseout(menuitems[k]);
     // (menuitems[k]).addEventListener("mouseover", mouseover(menuitems[k]));        ;
     //   (menuitems[k]).addEventListener("mouseout", mouseout(menuitems[k]));
    };




}





 
    
  
    
   

    

    
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
    
    socket.on('keystroke', function (data) {
        
        var g = 5;
    });
    
    
    socket.on('message' , function (msg) {
        
        var g = 5;
    });
    
    

    
    socket.on('newPage', function (data) {
        
        
        var brobj;
        
        var brobjarr = JSON.parse(data);
        
        brobj = brobjarr[0];
        
        var count = Object.keys(brobj).length;
        
        createparenttableelements(count); 
        
        fillrowparenttable(data);      
        
        var g = 5;
    });
        
socket.on("lights", function (data) {
    
    var g = 5;
    
    
});

socket.on("topMenu", function (data) {

    createmenu2(data);

});
    
    
    
    

createparenttableelements = function (count) {
      
    
    var parenttablediv = document.createElement("div");
    var divid = "parenttable";
    parenttablediv.id = divid;
    parenttablediv.style.display = "table";
    
    //   top right bottom left
    
    
    //  row for map and slider
    
    
    
    
    
    
    for (var i = 1; i < 3 ; i++) {
        
        var parentrowdiv = document.createElement("div");
        var divid = "parentrow" + i;
        parentrowdiv.id = divid;
        parentrowdiv.style.display = "table-row";
        
        
        for (var j = 1; j < count+1 ; j++) {
            var parentcelldiv = document.createElement("div");
            var divid = "parentcell" + i + j;
            parentcelldiv.id = divid;
            parentcelldiv.style.display = "table-cell";
            parentrowdiv.appendChild(parentcelldiv);
        }
        
        parenttablediv.appendChild(parentrowdiv);
    }
    var tableplaceholderdiv = document.getElementById("tableplaceholder")
    
    tableplaceholderdiv.appendChild(parenttablediv);







};

fillrowparenttable = function (datastring) {
    
    var brobj;
    
    var brobjarr = JSON.parse(datastring);
    
    brobj = brobjarr[0];
    
    Object.keys(brobj).length;
    

    
    var cell;
    
  cell = document.getElementById("parentcell11")
    cell.innerHTML = brobj.id;
   cell = document.getElementById("parentcell12")
    cell.innerHTML = brobj.internalipaddress;
    cell = document.getElementById("parentcell13")
    cell.innerHTML = brobj.macaddress;
     cell = document.getElementById("parentcell14")
    cell.innerHTML = brobj.name;

};