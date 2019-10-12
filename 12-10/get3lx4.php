<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>get获取服务器端数据</title>
<style>
#div1{
	background:#09f;
	color:#fff;
	width:400px;
	height:400px;
	
	text-align:center;
}
</style>
<script type="text/javascript">
 window.onload=function(){
    var div1=document.getElementById("div1");
	var bt1=document.getElementById("bt1");
	//图片预加载
	var img1=new Image();
	img1.src="img/1.gif";
	bt1.onclick=function(){
	    alert("哈哈");
		div1.innerHTML="";
		div1.appendChild(img1);
		//执行ajax
		//1.创建ajax
		var xmlHttp=null;
		if(window.XMLHttpRequest){
		xmlHttp=new XMLHttpRequest();	
		}else{
		xmlHttp=new ActiveXObject(Microsoft.XMLHTTP);
		}
		//2.设置请求方法和请求接口地址（接口）
		xmlHttp.open("GET","data3.php");
		//3.绑定ajax对象的onreadystatechange事件，监控ajax请求过程，一旦readyState的值发生改变，自动调用onreadystatechange事件
		xmlHttp.onreadystatechange=function(){
			alert("二狗子");
		if(xmlHttp.readyState==4 && xmlHttp.status==200){
		    var x=xmlHttp.responseText;
			//遍历json字符串
			//（1）将json转化为js对象
			var y=JSON.parse(x);
			//(2)遍历数组部分
			var str="<ul>";
			console.log(y.data)
			for(var i=0;i<y.data.length;i++){
			str=str+"<li>学号："+y.data[i].id+"姓名："+y.data[i].name+"年龄："+y.data[i].age+"性别："+y.data[i].sex+"</li>";	
			}
			div1.innerHTML=str+"</ul>";
			}
		};
		//4.发送ajax请求
		xmlHttp.send();
	}
}
</script>
</head>

<body>
<div id="div1">

</div>
<input type="button" id="bt1" value="点击获取json字符串">
</body>
</html>