

function result() {
	// body...
	var score=document.getElementById('score').value;
	console.log(score);
	document.getElementById('result').innerHTML=cal(score);
	// alert(cal(score));

}
function cal (score) {
	// 用来计算传入的分数是多少，首先看看是不是一个数字
	if(!isNaN(score)){
		//is a number
		var index=(100-score)/10+1
		switch(parseInt(index)){

			case 1:
				return '一等';
				break;
			case 2:
				return '二等';
				break;
			case 3:
				return '三等';
				break;
			case 4:
				return '四等';
				break;
			case 5:
				return '五等';
				break;
			case 6:
				return '六等';
				break;
			case 7:
				return '七等';
				break;
			case 8:
				return '八等';
				break;
			case 9:
				return '九等';
				break;
			case 10:
				return '十等';
				break;
			default:
				return '请输入0-100之间的分数。'
				break;
		}
	}else{//not Number
		return '请输入一个真正的分数'
	}

}
