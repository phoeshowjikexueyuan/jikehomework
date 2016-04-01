/**
 * Created by lvning on 15/12/28.
 * 用于改变页面的主题颜色
 */




(function(){
 var abx;
 

//事件兼容对象
    var EventUtil = {
        addHandler: function (element, type, handler) {
            //w3c
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            }
            //ie
            else if (element.attachEvent) {
                element.attachEvent('on' + type, handler);
            } else {
                element['on' + type] = handler;
            }
        },
        removeHandler: function () {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent('on' + type, handler);
            } else {
                element['on' + type] = null;
            }
        }
    };
//阻止浏览器默认行为的函数
    function stopDefault(e) {
        //阻止默认浏览器动作(W3C)
        if (e && e.preventDefault)
            e.preventDefault();
        //IE中阻止函数器默认动作的方式
        else
            window.event.returnValue = false;
        return false;
    }

    var themeSwitch=document.getElementById('theme_switch');
    var element_header=document.getElementsByTagName('header')[0];
    var element_container=document.getElementById('container');

    window.onload=function(){
        if(!localStorage.cur_theme){
            localStorage.cur_theme=0;
            changeTheme('basic');
        }else {
            var theme=localStorage.cur_theme;
            switch (theme) {
                case '0':
                    changeTheme('basic');
                    break;
                case '1':
                    changeTheme('pink');
                    break;
                case '2':
                    changeTheme('green');
                    break;
                case '3':
                    changeTheme('yellow');
                    break;
                case '4':
                    changeTheme('blue');
                    break;
            }
        }
    };
    EventUtil.addHandler(themeSwitch,'click', function (e) {
        //绑定按钮区域点击事件的函数体,计算器的核心区域
        var t;
        //兼容ie的获取事件target的方法
        if(e.target){
            t= e.target.id;
        }else{
            t=window.event.srcElement.id;
        }
        switch (t){
            case  'basic':
                localStorage.cur_theme='0';
                changeTheme('basic');
                break;
            case 'pink':
                localStorage.cur_theme='1';
                changeTheme('pink');
                break;
            case 'green':
                localStorage.cur_theme='2';
                changeTheme('green');
                break;
            case 'yellow':
                localStorage.cur_theme='3';
                changeTheme('yellow');
                break;
            case 'blue':
                localStorage.cur_theme='4';
                changeTheme('blue');
                break;
            default:
                //nothing
        }

        function changeTheme(theme){

            element_header.setAttribute('class',theme);
            element_container.setAttribute('class',theme);

        }

    });

})();