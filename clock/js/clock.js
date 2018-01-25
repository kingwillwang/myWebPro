var dom = document.getElementById('clock');
var ctx = dom.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width / 2;
var rem = width / 300;

function drawBackground() {
	ctx.translate(r,r);		//修改圆心位置到正方形中心
	ctx.beginPath();		//开始一条路径
	ctx.lineWidth = 10 * rem;		//定义线条宽度
	ctx.arc(0, 0, r - ctx.lineWidth / 2, 0, 2*Math.PI, false);//画圆
	ctx.stroke();			//绘制定义的路径

	//填写数字
	var hourNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
	ctx.font = 18 * rem + "px  Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	hourNumbers.forEach(function(number,i) {
		var rad = 2 * Math.PI / 12 * i;//每个数字的弧度
		var x = Math.cos(rad) * (r - 30 * rem);
		var y = Math.sin(rad) * (r - 30 * rem);
		ctx.fillText(number, x, y); //填充数字
	});

	//画出每秒圆点
	for (let i = 0; i < 60; i++) {
		var rad = 2 * Math.PI / 60 * i;//每个点的弧度
		var x = Math.cos(rad) * (r - 18 * rem);
		var y = Math.sin(rad) * (r - 18 * rem);
		ctx.beginPath();      //重置路径
		if (i % 5 === 0) {
			ctx.fillStyle = "#000";//设置圆点填充颜色
		} else {
			ctx.fillStyle = "#ccc";
		}
		ctx.arc(x, y, 2 * rem, 0, 2*Math.PI, false);
		ctx.fill();
	}
}
//画出时针
function drawHour(hour,minute) {
	ctx.save(); //保存当前画布
	ctx.beginPath();
	var rad = 2 * Math.PI / 12 * hour;
	var mrad = 2 * Math.PI / 12 / 60 * minute;
	ctx.rotate(rad + mrad);
	ctx.lineWidth = 6 * rem;
	ctx.lineCap = "round";		//线条端点样式
	ctx.moveTo(0, 10 * rem); 			//将路径移动到指定点
	ctx.lineTo(0, -r / 2); 		//添加一个新点，创建该点到指定点的线条
	ctx.stroke();
	ctx.restore();//还原到保存点的画布
}

//画出分针
function drawMinute(minute,second) {
	ctx.save();
	ctx.beginPath();
	var rad = 2 * Math.PI / 60 * minute;
	var srad = 2 * Math.PI / 60 / 60 * second;
	ctx.rotate(rad + srad);
	ctx.lineWidth = 4 * rem;
	ctx.lineCap = "round";		//线条端点样式
	ctx.moveTo(0, 10 * rem); 			//将路径移动到指定点
	ctx.lineTo(0, -(r / 2 + 28 * rem)); 		//添加一个新点，创建该点到指定点的线条
	ctx.stroke();
	ctx.restore();
}

//画出秒针
function drawSecond(second) {
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = "#c14543";
	var rad = 2 * Math.PI / 60 * second;
	ctx.rotate(rad);
	ctx.moveTo(-2 * rem, 20 * rem);
	ctx.lineTo(2 * rem, 20 * rem);	
	ctx.lineTo(1, -(r / 2 + 50 * rem));		
	ctx.lineTo(-1, -(r / 2 + 50 * rem)); 		
	ctx.fill();
	ctx.restore();
}

//画中心圆点
function drawDot() {
	ctx.beginPath();
	ctx.fillStyle="#fff";
	ctx.arc(0, 0, 3 * rem, 0, 2*Math.PI,false);
	ctx.fill();
}

function draw() {
	ctx.clearRect(0, 0, width, height);
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	ctx.save();
	drawBackground();
	drawHour(hour,minute);
	drawMinute(minute,second);
	drawSecond(second);
	drawDot();
	ctx.restore();
}

draw();
setInterval(draw, 1000);