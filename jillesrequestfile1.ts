export import https = require("https");
export import http = require("http");

export module jil {
 
    export class jillesrequest {

        constructor() {
            this.cache = "";
        this.options = undefined;
            this.callback  = undefined;
            this.askhueinfo = undefined;
        }



        me = this;

        cache: string;

        //The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
        options : any  = {
            host: 'www.meethue.com',
            path: '/api/nupnp',
            //method: 'GET'
        };


        callback : any  = function (response) {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;

            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                console.log("end" + str);
                this.cache = str;
            });

            var jil : any = 5;
        }


   //askhueinfo   =  function () { https.request(this.options, this.callback).end(); }

        askhueinfo(): void { https.request(this.options, this.callback).end(); }

     jil = 5;



    }

}
