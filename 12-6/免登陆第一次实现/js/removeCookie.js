function removeCookie(name){
	var myDate=new Date();
	myDate.setTime(myDate.getTime()-1000);
	document.cookie=name+'=""'+";expires="+myDate.toGMTString();
	
}