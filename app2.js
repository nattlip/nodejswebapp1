function createmenu2() {
    var menu = {};
    menu["menuitems"] = {};
    var menuitems = menu["menuitems"];
    for (var i = 1; i < 6; i++) {
        menuitems["menuitem" + i] = { id: "menuitem" + i };
        menuitems["menuitem" + i]["submenu"] = {};
        menuitems["menuitem" + i]["submenu"]["id"] = "submenu" + i;
        for (var j = 1; j < 6; j++) {
            menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j] = { id: "menuitem" + i + j };
            menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["sub2menu"] = {};
            menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["id"] = "sub2men" + i + j;
            for (var k = 1; k < 6; k++) {
                menuitems["menuitem" + i]["submenu"]["submenuitem" + i + j]["sub2menu"]["sub2menuitem" + i + j + k] = { id: "sub2menuitem" + i + j + k };
            }
        }
    }
    var b = JSON.stringify(menu);
    return b;
}
function createmenuelements2(menuJson) {
    // var body = document.body;
    var body;
    var menu = JSON.parse(menuJson);
    var list = document.createElement("ul");
    var listid = "menu";
    list.id = listid;
    var listel1 = document.createElement("li");
    var listid1 = "li1";
    listel1.id = listid1;
    listel1.innerHTML = "item 1";
    var sublist1 = document.createElement("ul");
    var sublistid1 = "submenu1";
    sublist1.id = sublistid1;
    var sublistel11 = document.createElement("li");
    var sublistid11 = "subli11";
    sublistel11.id = sublistid11;
    sublistel11.innerHTML = "subitem 11";
    sublist1.appendChild(sublistel11);
    var sublistel12 = document.createElement("li");
    var sublistid12 = "subli12";
    sublistel12.id = sublistid12;
    sublistel12.innerHTML = "subitem 12";
    sublist1.appendChild(sublistel12);
    var sublistel13 = document.createElement("li");
    var sublistid13 = "subli13";
    sublistel13.id = sublistid13;
    sublistel13.innerHTML = "subitem 13";
    sublistel13.style.position = "relative";
    sublistel13.onmouseover = function () { sublist13.style.display = "block"; };
    sublistel13.onmouseout = function () { sublist13.style.display = "none"; };
    var sublist13 = document.createElement("ul");
    var sublistid13 = "subsubmenu13";
    sublist13.id = sublistid13;
    sublist13.style.position = "absolute";
    sublist13.style.top = "0px";
    sublist13.style.left = "100px";
    sublist13.style.display = "none";
    var sublistel131 = document.createElement("li");
    var sublistid131 = "subli131";
    sublistel131.id = sublistid131;
    sublistel131.innerHTML = "subitem 131";
    sublist13.appendChild(sublistel131);
    var sublistel132 = document.createElement("li");
    var sublistid132 = "subli132";
    sublistel132.id = sublistid132;
    sublistel132.innerHTML = "subitem 132";
    sublist13.appendChild(sublistel132);
    var sublistel133 = document.createElement("li");
    var sublistid133 = "subli133";
    sublistel133.id = sublistid133;
    sublistel133.innerHTML = "subitem 133";
    sublist13.appendChild(sublistel133);
    sublistel13.appendChild(sublist13);
    sublist1.appendChild(sublistel13);
    listel1.appendChild(sublist1);
    list.appendChild(listel1);
    var listel2 = document.createElement("li");
    var listid2 = "li2";
    listel2.id = listid2;
    listel2.innerHTML = "item 2";
    list.appendChild(listel2);
    var listel3 = document.createElement("li");
    var listid3 = "li3";
    listel3.id = listid3;
    listel3.innerHTML = "item 3";
    list.appendChild(listel3);
    var listel4 = document.createElement("li");
    var listid4 = "li4";
    listel4.id = listid4;
    listel4.innerHTML = "item4";
    list.appendChild(listel4);
    body.appendChild(list);
}
;
createmenuelements2(createmenu2());
//# sourceMappingURL=app2.js.map