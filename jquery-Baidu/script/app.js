/*
天气情况的弹出框
 */
$(document).ready(function(){
	$(".weather").mouseenter(function(){
		var t=setTimeout(function(){
			$(".future_temper_wrap").show();
		},500);
	}).mouseleave(function(){
			$(".future_temper_wrap").hide();
	});
});
/*
侧边栏的弹出框
 */
$(document).ready(function(){
	var windowHeight=$("html").height();
	console.log(windowHeight);
	$("aside").mouseenter(function(){
		$(this).height(windowHeight).find("ul").fadeIn(100);
		$(this).children("a").addClass("hover");
		// 设置myevent，不然滚动的时候别的效果没有了
		$(window).on("scroll.myevent",function(){
			$(this).scrollTop(0);
		});

	}).mouseleave(function(){
		$(this).height(36).find("ul").hide();
		$(this).children("a").removeClass("hover");
		// 解绑自定滚动事件，继续滚动
		$(window).unbind("scroll.myevent");
	});
});
/*
浮动搜索框出现，236px
 */
$(document).ready(function(){
	var showHeight=236;//滚动到这么远以后，将浮动搜索栏滑出来
	$(window).scroll(function(){
		if($(window).scrollTop()>showHeight){
			$(".search_float_wrap").slideDown();
		}else if($(window).scrollTop()<showHeight){
			$(".search_float_wrap").slideUp(100);
		}
	});
});

/*
标签页切换
 */
$(document).ready(function(){
	$(".card_selector li").each(function(index){
		$(this).click(function(){
			$(this).addClass("cur_focus").siblings().removeClass("cur_focus");
			$(".main_card>li").eq(index).show().siblings().hide();
		});
	});
});
/*
换肤器
 */
$(document).ready(function(){
	var cur_skin=parseInt(localStorage.skin);
	if(!cur_skin){
		$("#background_img").removeClass().addClass("background_"+1);
	}else{
		$("#background_img").removeClass().addClass("background_"+(cur_skin+1));
	}
	$("#change_skin").click(function(e){
		e.preventDefault();
		$(".skin_panel").slideDown();
		$(document).click(function(){
			$(".skin_panel").slideUp();
		});
		e.stopPropagation();
	});

	$(".skin_panel").click(function(e){
		e.stopPropagation();
	});

	$(".skin_panel li").each(function(index){
		$(this).click(function(){
			$("#background_img").removeClass().addClass("background_"+(index+1));
			localStorage.skin=index;
		});
	});
});




