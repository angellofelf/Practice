<?php
header("content-type:text/html;charset=utf-8");
$userName=$_GET['userName'];
$pwd=$_GET['pwd'];
$city=$_GET['city'];
$kemu=$_['kemu'];
if($userName=="tom" and $pwd=="123"){
    header("location:index.html");
 
}else{
    echo '<sciprt type="text/javascript">alert("账号或密码错误");history.go(-1);</script>'
}
for($i=0;$i<3;$i++){
    echo $kemu[$i].'<br>';
}

?>