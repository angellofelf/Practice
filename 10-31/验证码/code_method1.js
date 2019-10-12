function $(id){
    return id=document.getElementById(id);
}
var getCode=$("getCode");
var changeCode=$("changeCode");
var confirm=$("confirm");
var eachCodes=document.getElementsByClassName("eachCode");
var str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
var newCode="";
var codeTips=$("codeTips");

// 问题：eachCodes有时出现4个字符
function set(){
    for(var i=0;i<5;i++){
        var index=Math.floor((Math.random()*100)%62)+1; 
        eachCodes[i].innerHTML=str.substr(index,1);
        newCode+=str.substr(index,1);

        var rdm=(Math.random()*60)-30;
        eachCodes[i].style.transform="rotate("+rdm+"deg)";
        eachCodes[i].style.transform="skew("+rdm+"deg)";
    }
}
set();

changeCode.onclick=set;

// 获取用户输入的内容并验证是否等于code
confirm.onclick=function(){
    if(getCode.value==0){
        alert("请输入验证码");
    }
    else if(getCode.value.toUpperCase()==newCode.toUpperCase()){
        location.href="http://www.baidu.com";
    }
    else{
        codeTips.innerHTML="验证码错误";
        getCode.value="";
    }
}
getCode.onfocus=function(){
    codeTips.innerHTML="";
}
