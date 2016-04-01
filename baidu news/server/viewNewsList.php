<?php 
/*
程序作用：遍历整个新闻数据库，将完整的新闻列表输出为json数据。
json数据格式为

[{
	"newsId": "2",
	"newsTitle": "qwe",
	"newsContent": "wer",
	"newsTime": "2011-09-09",
	"newsTag": "qaz",
	"newsImg": "asd"
}, {
	"newsId": "6",
	"newsTitle": "wqe",
	"newsContent": "rq",
	"newsTime": "2016-02-03",
	"newsTag": "122133",
	"newsImg": "qwe"
}, {
	"newsId": "7",
	"newsTitle": "123",
	"newsContent": "123",
	"newsTime": "2016-02-02",
	"newsTag": "23",
	"newsImg": "421"
},...
]
 */
	header("Content-Type: text/html;charset=utf-8"); 
	require("dbconfig.php");

	$link=mysql_connect($mysql_server,$mysql_username,$mysql_password);
	if(!$link){
		echo "can not connect link dbase";
	}
	mysql_query("SET NAMES 'UTF8'");
	$selected_db=mysql_select_db($mysql_database,$link);
	if(!$selected_db){
		echo "con ok";
	}
	$sql="SELECT * FROM `newslist`";

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
								"newsImg"=>$row["newsImg"]
							));
	}
	#输出json，避免编码
	echo json_encode($src,JSON_UNESCAPED_UNICODE);


 ?>