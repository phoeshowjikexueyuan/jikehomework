// 开始写我的计算器功能
//第一版程序完成基础计算功能
//第三版,修改了计算逻辑,连算过程中如果输入了其他符号不会再返回错误结果


(function () {
    /*初始化一个变量用来接受传入的数字
     初始化一个数组temp用来接收数字,如果一直输入数字的话就一直添加,直到接收到计算符号为止.*/

    var n1 = 0;//变量,用来存储输入的数字
    var nDot = 0;//保存小数点出现次数
    var operator = '';//保存运算符变量,字符形式
    var numOperator=0;
    var temp = [];//每次按键如果是数字就添加在这个里面.
    var result = 0;
    var stateCal=0;//按下计算符号状态
    var stateNum=0;//按下数字状态

    //事件监听器，能同时兼容ie和w3c,从js高级程序设计上学到的
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

    //下面这段内容用来获取点击的内容和执行的命令
    var operating = document.getElementById('operating');
    EventUtil.addHandler(operating, 'click', function (e) {
        //console.log(e.target.id);
        /*现在已经能打印出来获取到的是什么按钮,接下来就是设计一套计算器方法了.
         我使用了数组的方式来获取每一次按键的数字,
         */
        var t;
        if (e.target) {
            // 还要为ie留个后门,ie不支持event对象的target属性
            t = e.target.id;
        } else {
            t = window.event.srcElement.id;//将内容赋值给t
        }

        switch (t) {
            case 'result':
                temp=[];
                result=cal(result,n1,operator);
                showResult(result);
                break;
            case 'add':
                temp=[];
                if(stateNum===0 && stateCal===0){
                    result=0;
                    showResult(result);
                    operator='add';
                    stateCal=1;
                }else{
                    if(stateNum===1 && stateCal===0){
                        //前一键按下数字
                        operator='add';
                        stateCal=1;
                        stateNum=0;
                        result=cal(result,n1,'add');
                        showResult(result);
                    }else if(stateNum===0 && stateCal===1){
                        //前一键按下符号
                        operator='add';
                        stateCal=1;
                    }
                }

                break;
            case 'subtrac':
                temp=[];
                if(stateNum===0 && stateCal===0){
                    result=0;
                    showResult(result);
                    operator='subtrac';
                    stateCal=1;
                }else{
                    if(stateNum===1 && stateCal===0 && operator==='subtrac'){
                        //前一键按下数字
                        operator='subtrac';
                        stateCal=1;
                        stateNum=0;
                        result=cal(result,n1,'subtrac');
                        showResult(result);
                    }else if(stateNum===0 && stateCal===1){
                        //前一键按下符号
                        operator='subtrac';
                    }
                }
                break;

            case 'multip':
                temp=[];
                if(stateNum===0 && stateCal===0){
                    result=0;
                    showResult(result);
                    operator='multip';
                    stateCal=1;
                }else{
                    if(stateNum===1 && stateCal===0){
                        //前一键按下数字
                        operator='multip';
                        stateCal=1;
                        stateNum=0;
                        result=cal(result,n1,'multip');
                        showResult(result);
                    }else if(stateNum===0 && stateCal===1){
                        //前一键按下符号
                        operator='multip';
                        stateCal=1;
                    }
                }
                break;
            case 'divsion':
                temp=[];
                if(stateNum===0 && stateCal===0){
                    result=0;
                    showResult(result);
                    operator='divsion';
                    stateCal=1;
                }else{
                    if(stateNum===1 && stateCal===0 && operator==='divsion'){
                        //前一键按下数字
                        operator='divsion';
                        stateCal=1;
                        stateNum=0;
                        result=cal(result,n1,'divsion');
                        showResult(result);
                    }else if(stateNum===0 && stateCal===1){
                        //前一键按下符号
                        operator='divsion';
                        stateCal=1;
                    }
                }
                break;
            case 'sin':
                result = (Math.sin(n1 * 2 * Math.PI / 360)).toFixed(4);
                showResult(result);
                temp = [];
                n1=result;
                console.log(n1,result);
                break;
            case 'cos':
                result = (Math.cos(n1 * 2 * Math.PI / 360)).toFixed(4);
                showResult(result);
                temp = [];
                n1=result;
                break;
            case 'tan':
                result = (Math.tan(n1 * 2 * Math.PI / 360)).toFixed(4);
                if (result > 10000000) {
                    result = '无意义';
                }
                showResult(result);
                temp = [];
                n1=result;
                break;
            case 'sqr':
                result = Math.sqrt(n1);
                showResult(result);
                temp = [];
                n1=result;
                break;
            case 'del':
                //这段代码的功能是退格,注意如果退格的过程中看到小数点要给小数点计数器减1.

                if (temp[temp.length - 1] === '.') {
                    nDot--;
                }
                temp.pop();
                showCurrentNum();
                break;
            case 'ac':
                //reset
                n1 = 0;
                result = 0;
                temp = [];
                nDot = 0;
                operator = '';
                console.log(result);
                showResult(result);
                break;

            case 'numPanel':
                //点击了数字区的外部,不做任何处理;
                break;
            case 'operPanel':
                //点击了计算符号区域的外部,不做任何处理;
                break;
            default:
                //点击数字后进行的操作.注意小数点的作用;
                if (t === 'dot' && nDot === 0) {
                    temp.push(t);
                    nDot++;

                } else if (t === 'dot' && nDot !== 0) {
                    //空操作,多次按小数点什么都不做.
                } else if (t !== 'dot') {
                    temp.push(t);
                }
                stateNum=1;
                stateCal=0;
                n1 = getNumber(temp);
                showCurrentNum();


        }

        stopDefault(e);

    })

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

    //计算函数
    function cal(result, current, op) {

        switch (op) {
            case 'add':
                return parseFloat((result + current).toFixed(12));
                break;
            case 'subtrac':
                return parseFloat((result - current).toFixed(12));
                break;
            case 'multip':
                return parseFloat((result * current).toFixed(12));
                break;
            case 'divsion':
                if (current === 0) {
                    return '除数不能为0';
                } else {
                    return parseFloat((result / current).toFixed(12));
                }
        }
    }


})();