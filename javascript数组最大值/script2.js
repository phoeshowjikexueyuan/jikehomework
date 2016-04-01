var arr=["a","x","b","d","m","a","k","m","p","j","a"];
var obj_arr={};
console.log(obj_arr[arr[0]]);//从这里我知道，对象里面如果找不到某个值得话会返回的是undefined
for(var i=0;i<arr.length;i++){
	if(obj_arr[arr[i]]===undefined){
		//初始化obj_arr,如果这个key没找到，那就建立一个，这个value是个数组型
		obj_arr[arr[i]]=[i];
	}else{
		//如果找到了，跟着后面往里面push
		obj_arr[arr[i]].push(i);
	}
}
console.log(obj_arr);

var keys=Object.keys(obj_arr);
var max_key=keys[0];
//keys=["a", "x", "b", "d", "m", "k", "p", "j"]

for (var k=0;k<keys.length;k++){
	if(obj_arr[keys[k]].length>obj_arr[max_key].length){
		max_key=keys[k];
	}
}

document.write("js2：出现次数最多的值为"+max_key+",共出现了"+obj_arr[max_key].length+"次，出现的位置分别是"+obj_arr[max_key]);