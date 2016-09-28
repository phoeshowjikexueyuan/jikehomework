var skinList = document.getElementById('skincontrol').getElementsByTagName('li');
var body = document.getElementsByTagName('body')[0];
for (var i = 0; i < skinList.length; i++) {
    (function(i) {
        skinList[i].onclick = function() {
            //点击每个li，更换对应的样式
            removeClass(body);
            localStorage.setItem('hao123skin',i);
            docCookies.setItem('hao123skin',i);
            switch (i){
            	case 0:
		            addClass(body,'pink');
            		
            		break;
            	case 1:
		            addClass(body,'purple');
            		
            		break;
            	case 2:
		            addClass(body,'blue');
            		
            		break;
            	default:
		            addClass(body,'green');
		            
            }
        };
    })(i);
}
window.onload=function(){
	
	if(localStorage.getItem('hao123skin') || docCookies.getItem('hao123skin')){
		var skin = parseInt(localStorage.getItem('hao123skin')) || docCookies.getItem('hao123skin');
		switch (skin){
            	case 0:
		            lvlib.addClass(body,'pink');
            		
            		break;
            	case 1:
		            addClass(body,'purple');
            		
            		break;
            	case 2:
		            addClass(body,'blue');
            		
            		break;
            	default:
		            addClass(body,'green');
		            
            }
	}else{
		localStorage.setItem('hao123skin','3');
		docCookies.setItem('hao123skin','3');
		addClass(body,'green');
	}
}



function addClass(element,classname){
	//add className
	if(!hasClass(element,classname)){
		element.className  += ' ' + classname;
	}
}
function removeClass(element,classname){
	var arg = arguments;
	if(arg.length === 1){
	//单一参数的时候这清空所有的class
		element.className="";
	}else if(hasClass(elemnet,classname)){
	//两个参数的时候这里清除指定的参数
		var reg = new RegExp('(^|\\s)' + classname + '($|\\s)');
		element.className = element.className.replace(reg,' ');
	}
}
function hasClass(element,classname){
	//判断是否存在指定的className，如果不存在返回null
	var reg = new RegExp('(^|\\s)' + classname + '($|\\s)');
	return element.className.match(reg);
}
