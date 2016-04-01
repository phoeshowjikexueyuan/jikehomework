define(function(require, exports, module) {

// 2016-1-23  初步完成定位
// 2016-1-24  完成动态效果
// 2016-1-25  功能全部完成，开始模块化
// 2016-1-25  模块化完成，提供接口
// 
// 
// 
// 
// focus函数传入的参数列表
// mainContainer:焦点图外部框架，jquery对象
// numColumn:内部列数
// speen:翻页动画的速度，单位ms
// auto:是否自动动画，使用布尔值
// duration:如果自动动画，每幅面的停留时间
// 
// 
// 
// html页面布局，页面必须设置为以下布局，类名保留，尽量另外的设置样式类名
// <div class=""> //主框架，类名任选，
//  <ul class="focus_list">    //必须有focus_list 类
//      <li></li>
//  </ul>
//  
//  <ul class="controller_list">   //点控制器，可以没有，必须带controller_list类 
//      <li>空<li>
//  </ul>
//  
//  <div class="prev_btn">两个按钮，控制左右滑动
//  <div class="next_btn">
// </div>
// 

  // 通过 exports 对外提供接口
  exports.focus = function (mainContainer,numColumn,speed,auto,duration){
	// 保存一个位置索引
	var index=0;
	//获得焦点图列表
	var focuslists=mainContainer.find(".focus_list");
	var focusList=mainContainer.find(".focus_list li");
	//获取两个点击按钮
	var leftBtn=mainContainer.find(".prev_btn");
	var rightBtn=mainContainer.find(".next_btn");
	//获取一排点击控制器
	var controller=mainContainer.find(".controller_list li");
	//获得图片的宽度
	var picWidth=focusList.eq(0).outerWidth();
	//总共有几张图	
	var numPic=focusList.size()-numColumn-1;
	//初始化位置
	initailPic();
	//防止连点击的计时器,每次点击的时候重新将canClick改为false,动画完成100ms后可以接受点击事件
	var canClick=false;
	var timeClick=setInterval(function(){
		canClick=true;
	},speed+300);

	//自动播放功能
	if (auto) {
	    //传入参数为true的时候，开启自动播放功能
	    var timeAuto;
	    timeAuto = setInterval(function() {
	        nextPic();
	    }, duration);
	    mainContainer.mouseenter(function() {
	        clearInterval(timeAuto);
	    }).mouseleave(function() {
	        timeAuto = setInterval(function() {
	            nextPic();
	        }, duration);
	    });
	}

	//控制器点击控制方法
	controller.each(function(i){
		$(this).click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			index=i;
			focuslists.animate({
				left:-picWidth*(index+1)
			},speed,function(){
				if(index===numPic){
					initailPic();
				}
			});
			});
		
	});




	//rightBtn.click event
	rightBtn.click(function(){
		if(canClick){
			nextPic();
		}
		canClick=false;
	});
	//leftBtn.click event
	leftBtn.click(function(){
		if(canClick){
			prevPic();
		}
		canClick=false;
	});




	//用于初始化图片位置的函数
	function initailPic(){
		index=0;
		focuslists.width(picWidth*focusList.size()).css({
			left:-numColumn*picWidth
		});
        
		controller.first().addClass("active").siblings().removeClass("active");
	}
	//向后移动图片一次
	function nextPic(){
		//位置索引自加
		index++;
		//移动，移动完成后判断一次index的情况，如果到了和图片数量等，恢复原始位置，重置index
		focuslists.animate({
			left:-(picWidth*(index)+numColumn*picWidth)
		},speed,function(){
			if((index+numColumn)>numPic){
				focuslists.css({
					left:-picWidth
				});
				controller.first().addClass("active").siblings().removeClass("active");
				index=-(numColumn-1);
			}
		});
		controller.eq(index).addClass("active").siblings().removeClass("active");
	}
	//向前移动图片一次 
	function prevPic(){
		index--;
		//移动，移动完成后判断一次index的情况，如果到了和图片数量等，恢复原始位置，重置index
		focuslists.animate({
			left:-picWidth*(numColumn+index)
		},speed,function(){
			if(index===(-numColumn)){
				focuslists.css({
					left:-picWidth*(numPic)
				});
				index=numPic-numColumn;
			}
		});
		controller.eq(index).addClass("active").siblings().removeClass("active");
	}
};


});