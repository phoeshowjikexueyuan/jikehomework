const express = require('express');
const path = require('path');
const mysql = require('mysql');
const moment=require('moment');
const bodyParser = require('body-parser');



/*
路由路径
 */
var admin=require('./routers/admin');//后台
var index=require('./routers/index');//新闻主页
var newslist=require('./routers/newslist');//主页新闻列表展现
var insert=require('./routers/insert');
var deletenews=require('./routers/delete');
var newsListAll=require('./routers/newslistall');
var currentnews=require('./routers/currentnews');
var update=require('./routers/update');


var app = express();
//设置静态资源的目录
app.use(express.static(path.join(__dirname, 'bower_components/')));
//解析响应体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//设置渲染引擎和渲染页面的入口
app.set('views', './views');
app.set('view engine', 'ejs');
/*
服务器端口在3000
 */
var port = 3000;
app.listen(port);
console.log('server is on ' + port);


/*
新闻主页
 */
//渲染新闻主页
app.use('/', index);
//点击页面中的分类，页面会请求分类内容，服务器响应发送需要显示的新闻列表json数据回页面
app.use('/newstag', newslist);


/*
后台页面
 */
//渲染后台管理页面
app.use('/admin',admin);
//获取新闻列表
app.use('/admin/getlist',newsListAll);
//新增新闻的请求
app.use('/admin/insert',insert);
//修改新闻的请求
app.use('/admin/update',update);
app.use('/admin/currentnews',currentnews);
//删除新闻的请求
app.use('/admin/delete',deletenews);



















