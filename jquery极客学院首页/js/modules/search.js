define(function(require, exports, module) {
    /*
    搜索框获得焦点之后，隐藏部分内容，更改部分样式；
     */
    $(".wrap_search_text input").focus(function(){
        $(".wrap_search_text input").attr("placeholder","");
        $(".wrap_search_text ul").hide();
        $(".wrap_search_area button").addClass("btnhover");
    }).blur(function(){
        $(".wrap_search_text input").attr("placeholder","输入要查找的课程");
        $(".wrap_search_text ul").show();
        $(".wrap_search_area button").removeClass("btnhover");
    });

});

