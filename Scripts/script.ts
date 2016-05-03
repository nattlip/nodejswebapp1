document.onload = function () { alert('script load Node!'); };
var test = function () { alert('test Node 3!') };





var infoglobal = ""


var discoverlocalhuebridge = function () {

    var messagevar = {

        tekst: "fine"

    }

    var messagejson = JSON.stringify(messagevar);

    var meethue = 'http://www.meethue.com/api/nupnp';




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


var createparenttable = function () {

    socket.on('newFeed', function (data) {


        var brobj;

        var brobjarr = JSON.parse(data);

        brobj = brobjarr[0];

        var count = Object.keys(brobj).length;


        createparenttableelements(count);





        fillrowparenttable(data);










        var g = 5;
    });

};





var createparenttableelements = function (count) {



    var socket = io('http://localhost:8888');
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });

    socket.on('keystroke', function (data) {

        var g = 5;
    });


    socket.on('message', function (msg) {

        var g = 5;
    });



    var parenttablediv = document.createElement("div");
    var divid = "parenttable";
    parenttablediv.id = divid;
    parenttablediv.style.display = "table";
    //   top right bottom left


    //  row for map and slider






    for (var i = 1; i < 3; i++) {

        var parentrowdiv = document.createElement("div");
        var divid = "parentrow" + i;
        parentrowdiv.id = divid;
        parentrowdiv.style.display = "table-row";


        for (var j = 1; j < count + 1; j++) {
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

var fillrowparenttable = function (datastring) {

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