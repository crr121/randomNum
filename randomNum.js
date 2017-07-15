//.编写函数实现随机产生指定范围的整数的功能
/*[1,10]
[0,1)*10=[0,10)----->+1---->[1,11)---->下取整  Math.floor   window.parseint()*/
/*[2,9]
[0,1)--->[0,8)--->[2,10)*/

var random_fun = function(start,end){
	var random  = Math.floor(Math.random()*(end-start+1)+start);
	return random;
}
var end,start;
start = prompt("请输入起始值：")*1;
end   = prompt("请输入结束值：")*1;
var result = random_fun(start,end);
document.write(start+"到"+end+"的随机整数为："+result);

