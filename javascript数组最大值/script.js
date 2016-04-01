var arr=["a","x","b","d","m","a","k","m","p","j","a"];
var arr2=arr.concat();//备份一个数组出来
var pos=[];
var count={};
for(var i=0;i<arr2.length;i++){
	var c_content=arr2[i];
	var c_count=0;
	for(var j=0;j<arr2.length;j++){
		if(arr2[j]===c_content&&c_content!==null){
			c_count++;
			arr2[j]=null;			
			count[c_content]=c_count;
		}
	}
}
console.log(arr);
console.log(arr2);
var keys=Object.keys(count);//["a", "x", "b", "d", "m", "k", "p", "j"]

// max_key就是出现最多的那个数组元素
// count[max_key]的值就是它出现的次数
var max_key=keys[0];
for(var k=0;k<keys.length;k++){
	if(count[keys[k]]>count[max_key]){
		max_key=keys[k];
	}
}
console.log(max_key);
//pos中记录出现的位置
for(var l=0;l<arr.length;l++){
	if(arr[l]===max_key){
		pos.push(l);
	}
}
// console.log(pos);
document.write('js1：出现最多的元素是'+max_key+',总共出现了'+count[max_key]+'次，出现的位置是'+pos+"</br>");

