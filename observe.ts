// http://www.cburch.com/cs/340/reading/nodejs/
///// <reference path="jillesrequestfile1.ts"/>
/// <reference path="sqlite.ts"/>
import https = require("https");
import http = require('http');
import url = require('url');

import path = require('path');
import fs = require('fs');
import sqlite3 = require('sqlite3');
import req = require("./jillesrequestfile2");
import sqdb = require("./sqlite");
import async = require("async");
import datastore = require("./bridgedatastore")
//import sqdb = require("./sqlite")

export module observe
{
 export   class observe
    {
     static obeservehuelights(br, guid)
     {
        
        // setInterval(function () { req.jil.getlights(br, guid,callback); }, 10000);
     }

    }  



}