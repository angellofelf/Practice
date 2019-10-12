function addEvent(ele,eleventtype,func){
	// ele:对象
	// eleventtype:时间名
	// func：处理函数
	if(ele!=null && typeof ele=="object"){
		if(-[1,]){
             ele.addEventListener(eleventtype,func);
		}else{
            ele.attachEvent("on"+eleventtype,func);
		}

	}else{alert("对象为空或不是对象")}

}