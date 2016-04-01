<?php 
/*
程序作用：遍历整个新闻数据库，获取响应标签的新闻，然后将新闻以json发送到前端。
json数据格式为

[
	{
		"newsId": "2",
		"newsTitle": "qwe",
		"newsContent": "wer",
		"newsTime": "2011-09-09",
		"newsTag": "qaz",
		"newsImg": "asd"
	}
]
 */
	header("Content-Type: text/html;charset=utf-8"); 
	require("dbconfig.php");

	$newsTag=$_GET['newsTag'];
	$link=mysql_connect($mysql_server,$mysql_username,$mysql_password);
	if(!$link){
		echo "can not connect link dbase";
	}
	mysql_query("SET NAMES 'UTF8'");
	$selected_db=mysql_select_db($mysql_database,$link);
	if(!$selected_db){
		echo "can not select database";
	}
	$sql="SELECT * FROM `newslist` WHERE `newsTag` = '{$newsTag}'";

	$result=mysql_query($sql);
	if(!$result){
		echo "result";
	}
	mysql_close();
	$src = array();

	while($row=mysql_fetch_array($result)){
		array_push($src,array(
								"newsId"=>$row["newsId"],
								"newsTitle"=>$row["newsTitle"],
								"newsContent"=>$row["newsContent"],
								"newsTime"=>$row["newsTime"],
								"newsTag"=>$row["newsTag"],
								"newsImg"=>$row["newsImg"],
								"newsSrc"=>$row["newsSrc"]
							));
	}
	#输出json，避免编码
	
	echo json_encode($src,JSON_UNESCAPED_UNICODE);


 ?>