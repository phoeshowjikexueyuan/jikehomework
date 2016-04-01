/**
 * Created by lvning on 16/1/14.
 */
$(document).ready(function() {
    $(window).on("load", (function() {
        imgLocaltion();
        $(window).resize(function() {
            $(".box").removeAttr("style");
            imgLocaltion();
        });
        var dataImg = {
            "data": [{
                "src": "0.jpg"
            },{
                "src": "1.jpg"
            },{
                "src": "2.jpg"
            },{
                "src": "3.jpg"
            },{
                "src": "4.jpg"
            },{
                "src": "5.jpg"
            },{
                "src": "6.jpg"
            },{
                "src": "7.jpg"
            }]
        };
        window.onscroll = function() {
            if (scrollSide()) {
                //console.log("start");
                $.each(dataImg.data, function(index, element) {
                    //动态添加对象
                    var newBox = $("<div>").addClass("box").appendTo("#container");
                    var newContent = $("<div>").addClass("content").appendTo(newBox);
                    //console.log("img/"+element.src)
                    $("<img>").attr("src", "img/" + element.src).appendTo(newContent);

                });
                 imgLocaltion();
                
            }



        };
    }));

});

function scrollSide() {
    var boxs = $(".box");
    var lastBoxHeight = boxs.last().get(0).offsetTop + Math.floor(boxs.last().height() / 2);
    var documentClient = $(window).height();
    var scrolltop = $(window).scrollTop();
    return (lastBoxHeight < documentClient + scrolltop);

}

function imgLocaltion() {
    //获取所有的画框
    var boxs = $(".box");
    //获取第一个画框的宽度
    var boxWidth = boxs.eq(0).width();
    //获取一排能放下的画框个数
    var colNum = Math.floor($(window).width() / boxWidth);
    //这个数组用来存放一排每个位置的高度
    var colHeight = [];

    

    boxs.each(function(index, element) {
        if (index < colNum) {
            //第一行
            colHeight[index] = $(element).height();
        } else {
            //后面的行
            var colMinHeiht = Math.min.apply(null, colHeight); //最短的一个
            var colMinIndex = $.inArray(colMinHeiht, colHeight); //最短的一个的位置
            

            $(element).css({
                "position": "absolute",
                "top": colMinHeiht,
                "left": colMinIndex * boxWidth
            });
            colHeight[colMinIndex] = colMinHeiht + $(boxs[index]).height();

        }
    });
}


