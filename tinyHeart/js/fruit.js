/* 海葵果实对象 */
var fruitObj = function() {
	this.alive = []; //boolean
	this.x = [];
	this.y = [];
	this.l = [];//用来控制果实由小变大
	this.sped = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = -10;
		this.y[i] = -10;
		this.l[i] = 0;
		this.sped[i] = Math.random() * 0.01 + 0.005;//[0.05,0.015]
		this.fruitType[i] = "";
	}
	this.orange.src = "./img/fruit.png";
	this.blue.src = "./img/blue.png";
}

//花在ctx2上
fruitObj.prototype.draw = function() {
	for (var i = 0; i < this.num; i++) {
		if (this.alive) {
			var pic;
			if (this.fruitType[i] == "orange") {
				pic = this.orange;
			} else {
				pic = this.blue;
			}
			if (this.l[i] <= 15) {
				this.l[i] += this.sped[i] * deltaTime;//根据帧数控制图片的变化大小
			} else {
				this.y[i] -= this.sped[i] * 4 * deltaTime;
			}
			ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5 , this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			if (this.y[i] < -10) {
				this.alive[i] = false;
			}
		}		
	}
}

fruitObj.prototype.born = function(i) {
	var aneId = Math.floor(Math.random() * ane.num);//找到一个海葵的Id
	this.x[i] = ane.x[aneId];
	this.y[i] = canHeight - ane.len[aneId];
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if (ran < 0.1) {
		this.fruitType[i] = "blue";
	} else {
		this.fruitType[i] = "orange";
	}
	
}

function fruitMonitor() {
	var num = 0;
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) num++;
	}

	if (num < 13) {
		//发射果实
		sendFruit();
		return;
	}
}

function sendFruit() {
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) {
			fruit.born(i);
			return;
		}
	}
}

