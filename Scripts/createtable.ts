var device 


// create table from server with json
function CreateTableFromServer(jsontable: string)
{

    
    var table = JSON.parse(jsontable);
     device = table.choosendevice
   var  rowcount = table.rowcount;
    var cellcount = table.cellcount;

    var nameTable = table.nameTable
    // parentable is child table of mastertable is the specifik page
    // name is to identify it in array of existing pages




    var parenttablediv = document.createElement("div");
    var divid = nameTable;
    parenttablediv.id = divid;
    parenttablediv.style.display = "table";
    parenttablediv.style.borderSpacing = "4px"
    //   top right bottom left
       
    var parenttablecaptiondiv = document.createElement("div");
    divid = table.tag + "parenttablecaption";
    parenttablecaptiondiv.id = divid;
    parenttablecaptiondiv.style.display = "table-caption";
    parenttablecaptiondiv.style.fontWeight = "bold";
    parenttablecaptiondiv.style.textAlign = "center";
    parenttablecaptiondiv.innerHTML = table.tablecaption;                                         //   param
    parenttablecaptiondiv.style.background = "lavender";
    parenttablediv.appendChild(parenttablecaptiondiv);


    var parentheaderrowdiv = document.createElement("div");
    divid = table.tag +"parentheaderrow";
    parentheaderrowdiv.id = divid;
    parentheaderrowdiv.style.display = "table-row";


    // +1 becuase of extra button
    for (var k = 1; k < cellcount + 2; k++)
    {
        var parentheadercelldiv = document.createElement("div");
        divid = table.tag +"parentheadercell" + k;
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

    for (var i = 1; i < rowcount+1 ; i++)
    {

        var parentrowdiv = document.createElement("div");
        divid = table.tag +"parentrow" + i;
        parentrowdiv.id = divid;
        parentrowdiv.style.display = "table-row";






        for (var j = 1; j < cellcount + 1; j++)
        {

            var parentcelldiv = document.createElement("div");
            divid = table.tag +"parentcell" + i + j;
            parentcelldiv.id = divid;
            parentcelldiv.style.display = "table-cell";
            parentcelldiv.style.background = "lavender";
            parentcelldiv.style.paddingRight = "20px";
            parentcelldiv.style.paddingLeft = "20px";

            if ("InnerHtml" in table["rows"][i]['cells'][j])
            {
                parentcelldiv.innerHTML = table["rows"][i]['cells'][j]["InnerHtml"];
            }

            if ("Select" in table["rows"][i]['cells'][j])
            {                        
                parentcelldiv.appendChild(createselectelement(table["rows"][i]['cells'][j]["Select"]['id']) );
            }
            
            if ("Button" in table["rows"][i]['cells'][j])
            {
                parentcelldiv.appendChild(createbuttonelement( 
                    table["rows"][i]['cells'][j]["Button"]['id'],
                    table["rows"][i]['cells'][j]["Button"]['value'],
                    table["rows"][i]['cells'][j]["Button"]['function'],
                    table["rows"][i]['cells'][j]["Button"]['argument']));
            }


            parentrowdiv.appendChild(parentcelldiv);
        }

        parenttablediv.appendChild(parentrowdiv);
    }
    var tableplaceholderdiv = document.getElementById(table['divtoaddto'])





    tableplaceholderdiv.appendChild(parenttablediv);








   



}

var createselectelement = function (id)
{
    var select = document.createElement("SELECT");
    select.id = id;
    var opt = <HTMLOptionElement>document.createElement('OPTION');
    opt.value = "";
    select.appendChild(opt);
    return select;

}






var createbuttonelement = function (buttonid: string, buttonval: string, buttonfunction: any,arg): any
{
    var button = document.createElement("input")
    button.id = buttonid;
    button.value = buttonval;
    button.type = "button";
    // button.onclick = function () { buttonfunction + "()"; };
    button.addEventListener("click", function () { execute(window[buttonfunction],arg) });



    var execute = function (fct,par)
    {
        fct(par);
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


var getcomports1 = function (arg?)
{
    socket.emit('getcomports1', { my: 'function' });

}



socket.on("comports1", function (data)
{
    var ports = JSON.parse(data);
    var select = <HTMLSelectElement>document.getElementById("selectcom1")
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
        var div = document.getElementById("DPTBFITparentcell92")
        div.innerHTML = com;


        device.comport = com;


        var j =
            {
                rfxcomport: com
                
            }



    var json = JSON.stringify(j)

    socket.emit('rfxcomport', json);






    };
}
    );// socket on

var savedevice = function (dev)
{

    var json = JSON.stringify(device);

    socket.emit('adddevice', json);




}

var deletdevice = function ()
{ }

var updatedevice = function()
{ }

function CreateDeviceTableFromServer(jsontable: string)
{


    var table = JSON.parse(jsontable);
    var rowcount = table.rowcount;
    var cellcount = table.cellcount;

    var nameTable = table.nameTable
    // parentable is child table of mastertable is the specifik page
    // name is to identify it in array of existing pages




    var parenttablediv = document.createElement("div");
    var divid = nameTable;
    parenttablediv.id = divid;
    parenttablediv.style.display = "table";
    parenttablediv.style.borderSpacing = "4px"
    //   top right bottom left

    var parenttablecaptiondiv = document.createElement("div");
    divid = table.tag + "parenttablecaption";
    parenttablecaptiondiv.id = divid;
    parenttablecaptiondiv.style.display = "table-caption";
    parenttablecaptiondiv.style.fontWeight = "bold";
    parenttablecaptiondiv.style.textAlign = "center";
    parenttablecaptiondiv.innerHTML = table.tablecaption;                                         //   param
    parenttablecaptiondiv.style.background = "lavender";
    parenttablediv.appendChild(parenttablecaptiondiv);


    var parentheaderrowdiv = document.createElement("div");
    divid = table.tag + "parentheaderrow";
    parentheaderrowdiv.id = divid;
    parentheaderrowdiv.style.display = "table-row";


    // +1 becuase of extra button
    for (var k = 1; k < cellcount + 1; k++)
    {
        var parentheadercelldiv = document.createElement("div");
        divid = table.tag + "parentheadercell" + k;
        parentheadercelldiv.id = divid;
        parentheadercelldiv.style.display = "table-cell";
        parentheadercelldiv.style.background = "lavender";
        parentheadercelldiv.style.paddingRight = "20px";
        parentheadercelldiv.style.paddingLeft = "20px";
        parentheadercelldiv.style.fontWeight = "bold"
        parentheadercelldiv.innerHTML = table["parentheaderrow"]["parentheadercells"][k]["InnerHtml"]




        parentheaderrowdiv.appendChild(parentheadercelldiv);
    }
    parenttablediv.appendChild(parentheaderrowdiv)

    // i is row // j = cell

    for (var i = 1; i < rowcount + 1; i++)
    {

        var parentrowdiv = document.createElement("div");
        divid = table.tag + "parentrow" + i;
        parentrowdiv.id = divid;
        parentrowdiv.style.display = "table-row";






        for (var j = 1; j < cellcount + 1; j++)
        {

            var parentcelldiv = document.createElement("div");
            divid = table.tag + "parentcell" + i + j;
            parentcelldiv.id = divid;
            parentcelldiv.style.display = "table-cell";
            parentcelldiv.style.background = "lavender";
            parentcelldiv.style.paddingRight = "20px";
            parentcelldiv.style.paddingLeft = "20px";

            if ("InnerHtml" in table["rows"][i]['cells'][j])
            {
                parentcelldiv.innerHTML = table["rows"][i]['cells'][j]["InnerHtml"];
            }

            if ("Select" in table["rows"][i]['cells'][j])
            {
                parentcelldiv.appendChild(createselectelement(table["rows"][i]['cells'][j]["Select"]['id']));
            }

            if ("Button" in table["rows"][i]['cells'][j])
            {
                parentcelldiv.appendChild(createbuttonelement(
                    table["rows"][i]['cells'][j]["Button"]['id'],
                    table["rows"][i]['cells'][j]["Button"]['value'],
                    table["rows"][i]['cells'][j]["Button"]['function'],
                    table["rows"][i]['cells'][j]["Button"]['argument']));
            }


            parentrowdiv.appendChild(parentcelldiv);
        }

        parenttablediv.appendChild(parentrowdiv);
    }
    var tableplaceholderdiv = document.getElementById(table['divtoaddto'])





    tableplaceholderdiv.appendChild(parenttablediv);












}

