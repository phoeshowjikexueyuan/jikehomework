requirejs.config({
	baseUrl:'js/libs',
	paths:{
		jquery:'jquery-3.1.0.min',
		sp:'../app/split-page'
	}
});


requirejs(['jquery','../app/switcher','sp','../app/totop'],function($,switcher,sp,totop){
	switcher({
		parent:$('.list-switch'),
		target:$('#courses-wrap'),
		class:['blist','hlist']
	});



	sp({
		perPageNum:18,
		totleNum:1000,
		showPage:8
	});

	totop({
		target:$('#totop'),
		showPosition:200,
		speed:1000
	});

	$('#show-search').on('click',function(){
		$('#searchwrap').toggleClass('searchbar-show');
	});
	$('#hide-search').on('click',function(){
		$('#searchwrap').toggleClass('searchbar-show');
	});
});