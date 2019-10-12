function addEvent(elem,eventype,func){
    try {
        if(elem!=null && typeof elem=="object"){
            if(window.addEventListener){
                 elem.addEventListener(eventype,func)
            }else{
                 elem.attachEvent("on"+eventype,func)
            }
      
        }
        else{
           throw new Error("对象为空或者不是对象")
        }
        
    } catch (error) {
        alert(error.message);
        
    }

}