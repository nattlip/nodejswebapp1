createmenu = function () {
    
    var body = document.body;
    
    var elements = [];
    var menuitemslength = 6
    
    var list = document.createElement("ul");
    var listid = "menu";
    list.id = listid;
    
    
    
    http://stackoverflow.com/questions/6487366/how-to-generate-event-handlers-with-loop-in-javascript

    
    for (var i =0; i < menuitemslength  ; i++) {
        
            createlist(i);
     
            
        
       
    };
        
   
  
    
    body.appendChild(list);
        
    function createlist(i) {
        
        elements[i] = document.createElement("li");
        var listelid = "menuitem" + i;
        elements[i].id = listelid;
        elements[i].className = "menuitem"
        elements[i].innerHTML = "menuitem" + i
        
        elements[i].style.display = "inline";
        elements[i].style.position = "relative";
        elements[i].style.backgroundColor = "black";
        elements[i].style.color = "white";
        elements[i].style.padding = "10px 20px"
        elements[i].onmouseover = function () { elements[i].style.background = "orange" }
        elements[i].onmouseout = function () { elements[i].style.backgroundColor = "black"; }
        list.appendChild(elements[i])
    }


};


