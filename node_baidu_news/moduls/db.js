var mysql=require('mysql');


/*
数据库设置
 */
var dbconfig={
        host: 'localhost',	//数据库主机
        port: 8889,			//数据库端口
        user: 'phoeshow',	//用户名
        password: 'matrix',	//密码
        database: 'baidunews'//表名称
    };








var pool=getPool();

function getPool(){
    var pool=mysql.createPool(dbconfig);
    return pool;
}

module.exports=pool;