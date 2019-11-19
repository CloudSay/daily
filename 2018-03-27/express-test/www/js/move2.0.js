//这是movejs的2.0版本
function move(obj,json,callback){
	//将多个属性和目标，整合成一个json
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//每次执行计时器中的函数时都把开关打开
		var onOff = true;
		//每次执行计时器中的函数时都遍历一次这个json
		for(var attr in json){
			if(attr == "opacity"){
				var iNow = getStyle(obj,attr)*100;
			}else{
				var iNow = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - iNow)/10;
			
			//三木运算符：计算步长
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			
			//只要有一个属性的当前值没有等于目标值，就把开关关闭
			if(json[attr] != iNow){
				onOff = false;
			}
			
			if(attr == "opacity"){
				obj.style[attr] = (iNow + speed)/100;
				obj.style.filter = "alpha(opacity="+ iNow + speed +")";
			}else{
				obj.style[attr] = iNow + speed + "px";
			}
			
		}
		//结束循环之后，如果开关没有被关闭，意味着所有属性都到终点了
		if(onOff){
			clearInterval(obj.timer);
//			if的缩写
			if(callback) callback();
		}
	},30)
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}