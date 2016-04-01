


function result () {
	var n1=document.getElementById("first").value;
	var n2=document.getElementById("second").value;
	var c1=document.getElementById("count").value;	
	console.log(c1);
	console.log(n1);
	console.log(n2);
	document.getElementById("result").innerHTML=cal(n1,n2,c1);
}

function cal(num1, num2, cal_char) {
    // 
    
    if (!isNaN(num1) && !isNaN(num2)) {
        num1=parseFloat(num1);
        num2=parseFloat(num2);
        switch (cal_char) {
            case "加":
                return (num1 + num2);
                break;
            case "减":
                return (num1 - num2);
                break;
            case "乘":
                return (num1 * num2);
                break;
            case "除":
                if (num2 === 0) {
                    return ("不能除0");
                } else {
                    return (num1 / num2);
                }
                break;
            default:
                return ('非法运算符');

        }
    }else{
    	return ("输入了非法数字");
    }


}
