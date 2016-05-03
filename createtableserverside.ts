export module createtableserverside
{

    export var createjsonclienttable = function (client, device)
    {
        // device = chosendevice
        // client = socket.client

        var propertiescount = Object.keys(device).length;
        var tablepropertiecount = propertiescount - 2 + 1;  // +1 for button row

        for (var keys in Object.keys(device))
        {
            console.log(keys)
        }

        for (var s in device)
        {
            console.log(s + '    ' + device[s]);
        }



        // todo 
        // add id
        // choose comport
        // save in dbase 

        var table: string = "";

        //var rowsindexkey: string = "1";
        //var rowsindexvalue: string = "1";
        //var cellsindexkey = "1";
        //var cellsindexvalue = "1";
        //var rows: any = { rowsindexkey: rowsindexvalue };
        //var cells: any = { cellssindexkey: cellsindexvalue };
        var obj: any = {};

        //  ^ computed property name



        obj["tag"] = "DPTBFIT";// tag for div names
        obj["nameTable"] = "DevicePropertiesToBeFilledInTable";
        obj['tablecaption'] = "DeviceProperties";
        obj['divtoaddto'] = "mastercell11";
        obj["rowcount"] = tablepropertiecount;
        obj["cellcount"] = 7;
        obj['choosendevice'] = device;

        obj["rows"] = {};

        for (var i = 1; i < obj["rowcount"] + 1; i++)
        {
            obj["rows"][i] = {};
            obj["rows"][i]['cells'] = {};





            for (var j = 1; j < obj["cellcount"] + 1; j++)
            {

                obj["rows"][i]['cells'][j] = {};

                if (j == 1 && i < obj["rowcount"])
                {
                    obj["rows"][i]['cells'][j]["InnerHtml"] = "key " + (Object.keys(device))[i - 1];

                }

                else if (j == 2 && i < obj["rowcount"])
                {
                    obj["rows"][i]['cells'][j]["InnerHtml"] = "value " + device[(Object.keys(device))[i - 1]];

                }

                // field to prjt slected com add 
                //   "DPTBFITparentcell92"


                else if (i == 9 && j == 3)  // select
                {
                    obj["rows"][i]['cells'][j]["Select"] = {};
                    obj["rows"][i]['cells'][j]["Select"]['id'] = 'selectcom1';

                }

                else if (i == 9 && j == 4)  // button
                {
                    obj["rows"][i]['cells'][j]["Button"] = {};
                    obj["rows"][i]['cells'][j]["Button"]['id'] = 'getcomports1';
                    obj["rows"][i]['cells'][j]["Button"]['value'] = 'getcomports1';
                    obj["rows"][i]['cells'][j]["Button"]['function'] = "getcomports1";
                }

                else if (i == 10 && j == 1)  // button
                {
                    obj["rows"][i]['cells'][j]["Button"] = {};
                    obj["rows"][i]['cells'][j]["Button"]['id'] = 'savedevice';
                    obj["rows"][i]['cells'][j]["Button"]['value'] = 'savedevice';
                    obj["rows"][i]['cells'][j]["Button"]['function'] = 'savedevice';
                    obj["rows"][i]['cells'][j]["Button"]['argument'] = device
                }

                else if (i == 10 && j == 2)  // button
                {
                    obj["rows"][i]['cells'][j]["Button"] = {};
                    obj["rows"][i]['cells'][j]["Button"]['id'] = 'deletedevice';
                    obj["rows"][i]['cells'][j]["Button"]['value'] = 'deletedevice';
                    obj["rows"][i]['cells'][j]["Button"]['function'] = 'deletedevice';
                }

                else if (i == 10 && j == 3)  // button
                {
                    obj["rows"][i]['cells'][j]["Button"] = {};
                    obj["rows"][i]['cells'][j]["Button"]['id'] = 'updatedevice';
                    obj["rows"][i]['cells'][j]["Button"]['value'] = 'updatedevice';
                    obj["rows"][i]['cells'][j]["Button"]['function'] = 'updatedevice';
                }


                else
                {
                    obj["rows"][i]['cells'][j]["InnerHtml"] = "r" + i + "c" + j;
                }


            }
        }







        obj["property1"] = "test";

        table = JSON.stringify(obj);


        client.emit("createtablewithjson", table);


    };

    export var createdevicetablewithjson = function (client,devs)
    {

        var table: string = "";        
       
        var obj: any = {};

       



        obj["tag"] = "DeviceTable";// tag for div names
        obj["nameTable"] = "DeviceTable";
        obj['tablecaption'] = "Devices";
        obj['divtoaddto'] = "mastercell11";
        obj["rowcount"] = devs.length;
        obj["cellcount"] = Object.keys(devs[0]).length;
        obj["parentheaderrow"] = {};
        obj["parentheaderrow"]["parentheadercells"] = {};

        for (var k = 1; k < obj["cellcount"] + 1; k++)
        {
            obj["parentheaderrow"]["parentheadercells"][k] = {};
            obj["parentheaderrow"]["parentheadercells"][k]["InnerHtml"] = (Object.keys(devs[0]))[k-1];
        }



        obj["rows"] = {};

        for (var i = 1; i < obj["rowcount"] + 1; i++)
        {
            obj["rows"][i] = {};
            obj["rows"][i]['cells'] = {};

            for (var j = 1; j < obj["cellcount"] + 1; j++)
            {              
                obj["rows"][i]['cells'][j] = {};


                    obj["rows"][i]['cells'][j]["InnerHtml"] =   (devs[i-1])[Object.keys(devs[i-1])[j-1]];
                       

            }







        }
        table = JSON.stringify(obj);

        client.emit("createdevicetablewithjson", table);



    };
}
