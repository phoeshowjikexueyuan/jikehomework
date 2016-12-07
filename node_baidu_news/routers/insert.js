var express=require('express');
var router=express.Router();
var pool=require('../moduls/db');



router.post('/',function(req,res){
	// var pool=getPool();
	var newsTitle=req.body.newsTitle;
	var newsContent=req.body.newsContent;
	var newsImg=req.body.newsImg;
	var newsSrc=req.body.newsSrc;
	var newsTime=req.body.newsTime;
	var newsTag=req.body.newsTag;
	var sql=`INSERT INTO \`newslist\` (\`newsId\`, \`newsTitle\`, \`newsContent\`, \`newsImg\`, \`newsSrc\`, \`newsTag\`, \`newsTime\`) VALUES (NULL, '${newsTitle}', '${newsContent}', '${newsImg}', '${newsSrc}', '${newsTag}', '${newsTime}')`;
	console.log(sql);
	pool.query(sql,function(err,rows,fields){
		if (err) throw err;
		res.json({succus:'ok'});
	});
});


module.exports=router;