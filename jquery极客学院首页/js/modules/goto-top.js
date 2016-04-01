define(function(require, exports, module) {


    $(window).load(function(){
        //页面加载的时候就设置一次块的位置，并且判断是否显示回到顶部。
        posGotop();
        if ($(window).scrollTop() > 20) {

            $("#top_a").fadeIn();
        } else {
            $("#top_a").fadeOut();
        }
    });
    $(window).resize(posGotop);//判断页面大小更改，随时变换块的位置，因为定位用的fixed，这个不改会偏离预订位置
    $(window).scroll(function() {
        //页面滚动时，判断滚动的距离，超过20px后就开始显示块
        //
        if ($(window).scrollTop() > 20) {

            $("#top_a").fadeIn();
        } else {
            $("#top_a").fadeOut();
        }

    });
    $("#top_a").click(function() {
        //点击按钮后，页面在1秒内滚动会顶部
        $("body,html").animate({
            scrollTop: 0
        }, 1000);
    });

    //函数的功能：计算初始状态下回到顶部按钮的偏移位置
    function posGotop() {
        var windowWidth = $("body").width();//获得页面的宽度
        $("#gotop").css({
            //将这个块放在文档右侧贴近内容的位置
            "left": Math.floor((windowWidth - 1000) / 2 + 1002)
        });
    }


});