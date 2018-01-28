var can1;
var can2;
var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;//上一帧的时间
var deltaTime;//帧与帧之间的间隔

var bgPic = new Image();//背景

var ane;//海葵对象
var fruit;//海葵果实对象

document.body.onload = game;

function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameLoop();
}

//初始化
function init() {
	//获取canvas context
	can1 = document.getElementById("canvas1");//绘制鱼、海中浮游生物、吃到果实的圈特效、UI
	ctx1 = can1.getContext("2d");

	can2 = document.getElementById("canvas2");//绘制背景、海葵。果实
	ctx2 = can2.getContext("2d");

	bgPic.src = "./img/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();
	fruit = new fruitObj();
	fruit.init();
}

//每一帧显示
function gameLoop() {
	window.requestAnimFrame(gameLoop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
}