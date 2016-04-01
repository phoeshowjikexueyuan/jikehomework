<?php 
header("Content-Type: text/html;charset=utf-8"); 
// 引入数据库的设置文件
require("dbconfig.php");
// 获取前端传来的数据
$newsTitle=$_POST["newsTitle"];
$newsContent=$_POST["newsContent"];
$newsImg=$_POST["newsImg"];
$newsSrc=$_POST["newsSrc"];
$newsTime=$_POST["newsTime"];
$newsTag=$_POST["newsTag"];
// 连接数据库
$con=mysql_connect($mysql_server,$mysql_username,$mysql_password);
//防止乱码
mysql_query("SET NAMES 'UTF8'"); 
// 打开数据库
$database=mysql_select_db($mysql_database,$con);
//写入数据
$sql_str="INSERT INTO `newslist` (`newsId`, `newsTitle`, `newsContent`, `newsImg`, `newsSrc`, `newsTag`, `newsTime`) VALUES (NULL, '{$newsTitle}', '{$newsContent}', '{$newsImg}', '{$newsSrc}', '{$newsTag}', '{$newsTime}');";
mysql_query($sql_str,$con);
mysql_close();
echo "添加成功";
?>