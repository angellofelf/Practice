function addCookie(name,value,day){
				var myDate=new Date();	
				myDate.setTime(myDate.getTime()+day*24*3600*1000);             
//        var myDate=new Date();
//        var ms=myDate.getTime();
//        var msday=ms+day*24*3600*1000;
//        myDate.setTime(msday);
				document.cookie=name+"="+encodeURI(value)+";expires="+myDate.toGMTString();
			
            }