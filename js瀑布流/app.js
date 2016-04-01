/**
 * Created by ning on 2016/1/13.
 */

    window.onload=function(){
        waterfall();
        window.onresize=console.log(1);
    }
    function waterfall(){
        //获取显示区域的宽度
        var container_width=document.getElementById('container').clientWidth;
        //获取所有的box元素在一个数组中
        var boxarr=getByClass('container','box');
        //获取单一图相框的宽度
        var box_width=boxarr[0].offsetWidth;
        var col_num=Math.floor(container_width/box_width);
        var col_height=[];
        console.log(col_num);
        document.getElementById('container').style.width=col_num*box_width+"px";

        for(var i=0;i<boxarr.length;i++){
            if(i<col_num){
                //第一行，只有指定个数
                col_height.push(boxarr[i].offsetHeight);

            }else{
                //第二行开始
                var min_box_height=getArrMin(col_height);
                var min_box_height_index=getArrMinIndex(col_height,min_box_height);
                var style=boxarr[i].style;
                style.position='absolute';
                style.left=box_width*(min_box_height_index)+'px';
                style.top=min_box_height+"px";
                col_height[min_box_height_index]=boxarr[i].offsetHeight+min_box_height;


            }
        }
        console.log(col_height);

    }

    function getByClass (parentid,classname){
        var parent=document.getElementById(parentid);//根据传入的id获取到父元素
        var classarr=[];//保持相同class的元素在数组中
        //console.log(parent.children[1].className);
        for(var i=0;i<parent.children.length;i++){
            if(parent.children[i].className==classname){
                classarr.push(parent.children[i]);
            }
        }
        //合集保存在数组中，最后返回数组
        return classarr;
    }
    function getArrMin (arr){
        //这个函数用来获取一个数组中的最小值，而且先判断是否空数组
        if(arr.length!==0){
            var arrMin=arr[0];
            for(var i=0;i<arr.length;i++){
                if(arr[i]<arrMin){
                    arrMin=arr[i];
                }
            }
            return arrMin;
        }
    }
    function getArrMinIndex(arr,num){
        //获取数组中最小元素的位置索引
        for(var i=0;i<arr.length;i++){
            if(arr[i]===num){
                return i;

            }
        }
    }
