<?php 

header("Content-Type: text/html;charset=utf-8"); 
// 引入数据库的设置文件
require("dbconfig.php");
// 获取前端传来的数据
$newsId=$_POST["newsId"];

// 连接数据库
$con=mysql_connect($mysql_server,$mysql_username,$mysql_password);
//防止乱码
mysql_query("SET NAMES 'UTF8'"); 
// 打开数据库
$database=mysql_select_db($mysql_database,$con);
//写入数据
$sql_str="DELETE FROM `newslist` WHERE `newslist`.`newsId` = {$newsId}";
mysql_query($sql_str,$con);
mysql_close();
echo "删除成功";
 ?>