/**
 * Created by lvning on 16/1/10.
 */
var timeId;
$(document).ready(function () {
    $("ul li").each(function (index) {
        $(this).mouseover(function () {
            liNode=$(this);
            timeId = setTimeout(function () {
                $("div.cur_content").removeClass("cur_content");
                $(".cur_selector").removeClass("cur_selector");
                $("div").eq(index).addClass("cur_content");
                liNode.addClass("cur_selector");
            }, 300);

        }).mouseout(function () {
            clearTimeout(timeId);
        })
    })
});