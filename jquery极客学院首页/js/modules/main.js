define(function(require, exports, module) {

  // 模块代码
  require("jquery");//引入JQuery
  require("./search");//顶部搜索模块
  require("./topmenu");//顶部菜单栏模块
  // require("./focus");//焦点图模块
  require("./hotclass");//热点课程显示模块
  require("./jobpath");//职业路径图加边框模块
  require("./goto-top");//回到顶部模块
  //第一个焦点图，带自动运行
  var focus1=require("./focus");
  var wrap_focus1=$(".wrap_focus1");
  focus1.focus(wrap_focus1,1,500,true,3000);
  //第二个焦点图，没有自动运行
  var focus2=require("./focus");
  var wrap_focus2=$(".wrap_focus2");
  focus1.focus(wrap_focus2,3,300,false);

  var focus3=require("./focus");
  var wrap_focus3=$(".wrap_focus3");
  focus1.focus(wrap_focus3,6,300,false);

});