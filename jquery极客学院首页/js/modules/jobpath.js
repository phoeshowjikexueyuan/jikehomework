define(function(require, exports, module) {

    /*
    职业路径图的js鼠标移入效果，我的设计思路是判断我移入的是哪个，然后设置这个应该加哪个边框。
     */


    $(".wrap_jobpath").each(function(index) {
        $(this).mouseenter(function() {
            // 边框需要考量当前块的位置，不同的块需要在不同的临近位置加边框
            if (index < 4) {
                //top left right &next.left--->高亮
                $(this).addClass("wrap_jobpath_hl_top wrap_jobpath_hl_left wrap_jobpath_hl_bottom").next().addClass("wrap_jobpath_hl_left");
            } else if (index === 4) {
                $(this).addClass("wrap_jobpath_hl_top wrap_jobpath_hl_left wrap_jobpath_hl_bottom wrap_jobpath_hl_right");
            } else if (index > 4 && index < 9) {
                //left bottom  next.left----hl
                $(this).addClass("wrap_jobpath_hl_left wrap_jobpath_hl_bottom").next().addClass("wrap_jobpath_hl_left");
                //正上方bottom
                $(".wrap_jobpath").eq(index - 5).addClass("wrap_jobpath_hl_bottom");
            } else {
                //left bottom right   上方bottom---->hl
                $(this).addClass("wrap_jobpath_hl_left wrap_jobpath_hl_bottom wrap_jobpath_hl_right");
                $(".wrap_jobpath").eq(index - 5).addClass("wrap_jobpath_hl_bottom");
            }
        }).mouseleave(function() {
            if (index < 4) {
                //top left right &next.left--->nohl
                $(this).removeClass("wrap_jobpath_hl_top wrap_jobpath_hl_left wrap_jobpath_hl_bottom").next().removeClass("wrap_jobpath_hl_left");
            } else if (index === 4) {
                $(this).removeClass("wrap_jobpath_hl_top wrap_jobpath_hl_left wrap_jobpath_hl_bottom wrap_jobpath_hl_right");
            } else if (index > 4 && index < 9) {
                //left bottom  next.left----nohl
                $(this).removeClass("wrap_jobpath_hl_left wrap_jobpath_hl_bottom").next().removeClass("wrap_jobpath_hl_left");
                //正上方bottom
                $(".wrap_jobpath").eq(index - 5).removeClass("wrap_jobpath_hl_bottom");
            } else {
                //left bottom right   上方bottom---->nohl
                $(this).removeClass("wrap_jobpath_hl_left wrap_jobpath_hl_bottom wrap_jobpath_hl_right");
                $(".wrap_jobpath").eq(index - 5).removeClass("wrap_jobpath_hl_bottom");
            }
        });
    });


});
