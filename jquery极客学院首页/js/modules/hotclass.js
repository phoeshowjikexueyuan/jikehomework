define(function(require, exports, module) {

/*
热点课程鼠标移入变长的效果，换个思路，直接计算所有块应该在的位置。用程序排列之
 */

    

    //每个小块如果鼠标进入之后，显示内部的p和隐藏的小标签
    //
    $(".wrap_hotblocks .wrap_hotblock").mouseenter(function() {

        $(this).find("p").slideToggle();
        $(this).find(".hot_class_student,.hot_class_hard").toggle();
    }).mouseleave(function() {
        $(this).find("p").slideToggle(300);
        $(this).find(".hot_class_student,.hot_class_hard").toggle();
    });

    $(".hot_area ul li").each(function(index) {
        $(this).mouseenter(function() {
            $(this).addClass("active").siblings().removeClass("active");
            $(".hot_area div.current_show").removeClass("current_show");
            $(".wrap_hotblocks").eq(index).addClass("current_show");

        });

    });

});
