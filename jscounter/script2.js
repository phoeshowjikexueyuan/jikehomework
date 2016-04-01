/**
 * Created by lvning on 15/12/29.
 */


(function () {
    //绑定事件方法
    var EventUtil = {
        addHandler: function (element, type, handler) {
            //w3c
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            }
            //ie
            else if (element.attachEvent()) {
                element.attachEvent('on' + type, handler);
            }
            //others borswer
            else {
                element['on' + type] = handler;
            }
        },
        removerHandler: function () {
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

    var n1 = 0;//变量,用来存储输入的数字
    var nDot = 0;//保存小数点出现次数
    var operator = '';//保存运算符变量,字符形式
    var temp = [];//每次按键如果是数字就添加在这个里面.
    var result = 0;

    //var operatingElement=document.getElementById('operating');
    var numPanel=document.getElementById('numPanel');

    //点击数字时的事件
    EventUtil.addHandler(numPanel,'click', function (e) {
        var t;
        if(e.target){
            t= e.target.id;
        }else{
            t=window.event.srcElement.id;
        }

        if (t === 'dot' && nDot === 0) {
            temp.push(t);
            nDot++;

        } else if (t === 'dot' && nDot !== 0) {
            //空操作,多次按小数点什么都不做.
        } else if (t !== nDot) {
            temp.push(t);
        }
        n1 = getNumber(temp);
        showCurrentNum();
    })




    /*函数区域,一下内容为本程序中所用到的所有函数*/
    /*2016-1-4重构*/


    //获取用户输入的数字
    function getNumber(arr) {
        //函数的作用是将数据的数字获取到,然后返回一个真正的数字回去.
        var a = '';
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === 'dot') {
                arr[i] = '.';
            }
            a += arr[i];
        }
        return parseFloat(a);
    }
    //输入数字过程中显示当前数字函数
    function showCurrentNum() {
        //函数的作用是,一旦调用就将当前的数组数字显示在视窗中.
        if (isNaN(getNumber(temp))) {
            document.getElementById('monitor').setAttribute('value', '0');
        } else {
            document.getElementById('monitor').setAttribute('value', getNumber(temp));
        }

    }

    //显示结果函数
    function showResult(result) {
        document.getElementById('monitor').setAttribute('value', result);
    }

})();