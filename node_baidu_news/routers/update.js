var express = require('express');
var router=express.Router();
var bodyParser = require('body-parser');
var router = express.Router();
var pool=require('../moduls/db');



router.use('/',function(req,res){
	// var pool=getPool();
	var newsId=req.body.newsId;
	var newsTitle=req.body.newsTitle;
	var newsContent=req.body.newsContent;
	var newsImg=req.body.newsImg;
	var newsSrc=req.body.newsSrc;
	var newsTime=req.body.newsTime;
	var newsTag=req.body.newsTag;
	var sql=`UPDATE \`newslist\` SET \`newsTitle\`='${newsTitle}',\`newsContent\`='${newsContent}',\`newsImg\`='${newsImg}',\`newsSrc\`='${newsSrc}',\`newsTag\`='${newsTag}',\`newsTime\`= '${newsTime}'WHERE \`newsId\` = '${newsId}'`;
	console.log(sql);
	pool.query(sql,function(err,rows,fields){
		if (err) throw err;
		res.json({succus:'ok'});
	});
});

module.exports=router;