define(function(require, exports, module) {
    /*
    通过结构设置隐藏显示，顶部的ul菜单最后包含下方的一个div，
    这样能够实现鼠标移出后的消失效果。
     */
    $(".head_nav_1").mouseover(function() {
        $(".head_nav_2").show();
    }).mouseleave(function(){
        $(".head_nav_2").hide();
    });
    
    /*
    设置区块和ul中鼠标移动加小件头的效果。根据index判断小箭头是否应该出现
     */
    $(".head_nav_1>li").mouseenter(function() {
        //第一个li是首页，首页不要小箭头
        var index = $(this).index() - 1;
        if (index !== -1) {
            $(".nav_panel").eq(index).addClass("mousein").siblings().removeClass("mousein");
            $(".arrow_gray").eq(index).addClass("mousein").siblings().removeClass("mousein");
        }

    });
    $(".head_nav_1>li").mouseleave(function() {
        $(".nav_panel").removeClass("mousein");
        $(".arrow_gray").removeClass("mousein");
    });

});

