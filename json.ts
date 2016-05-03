
//'make static   {"dhcp": false,
  //      '  "ipaddress": "10.10.10.100",
  //      '  "netmask": "255.255.255.0",
  //      '  "gateway": "10.10.10.1"}



  //      Debug = False
  //      IP = "www.meethue.com/api/nupnp"



  //      Dim bridgestring As String 'response bridge
  //      Dim objHTTP


  //      objHTTP = CreateObject("WinHttp.WinHttpRequest.5.1")

  //      objHTTP.Open("GET", "http://" & IP, False)
  //      objHTTP.Send()

  //      bridgestring = objHTTP.ResponseText






  //      Dim bridge As List(Of FindHue) = JsonConvert.DeserializeObject(Of List(Of FindHue))(bridgestring)
  //      'Dim bridge As FindHue = JsonConvert.DeserializeObject(Of FindHue)(bridgestring) '', Light)

  //      Return bridge



  //  End Function




import http = require('http');
import https = require('https');
import fs = require('fs');

var body;






var cam = "http://www.meethue.com/api/nupnp"









 http.get(cam, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

var jil = 5;










  var DiscoverLocalBridge = function () {

      var ip = "//www.meethue.com/api/nupnp";
       // var b = JSON.stringify(c)
        var ajax1 = new XMLHttpRequest();
      ajax1.open("Get", ip, true);
      ajax1.setRequestHeader("Content-Type", "application/json");
      ajax1.send();
      var response = ajax1.responseText;
      var jil = 5;

  }

DiscoverLocalBridge();