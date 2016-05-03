var whitemap = {

    //2000K is 500 mirek ("ct":500) and the coldest color 6500K is 153 mirek ("ct":153)
    // ct = color temperature  
    //maxx = 1034 minx 524 maxct = 500 
    //mirek (warm) 500 to 153 (cold)  deltact = 347   deltawidth = 512   circlecanvas512 = 0  512 1024 20
    //this.xfromct = 1044-10
    //this.xfromct =1034 - 


    ct: 500,


    //x and y of colorvariable not xy coordinates
    //ymap value is not relevant is set from 1 to 100
    xmapvalue: 500,
    ymapvalue: 0,

    xmapmaxvalue: 500,
    ymapmaxvalue: 100,
    xmapminvalue: 153,
    ymapminvalue: 1,



    setmapxyvalues: function (x, y)
    {
        //7                                  10                                          3
        //this.xcoord = (this.settings.circleMap.circleMapCanvasWidth + 10) - (512 / 347) * (ct - 153);
        //this.xcoord = (this.settings.circleMap.circleMapCanvasWidth + 10) - (512 / 347) * (ct - 153);
        //(this.settings.circleMap.circleMapCanvasWidth + 10)=this.xcoord+ (512 / 347) * (ct - 153)
        //(512 / 347) * (ct - 153)=(this.settings.circleMap.circleMapCanvasWidth + 10)-this.xcoord
        //  ct-153 = ((this.settings.circleMap.circleMapCanvasWidth + 10)-this.xcoord)*347/512
        this.ct = Math.round(500-x * (347 / 512)) ;

        

        this.xmapvalue = this.ct;
        //this.ymapvalue = 10 + parseInt(id - 1) * 20;
        this.ymapvalue = Math.round(y*100/256);

    }



















};