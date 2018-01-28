/*  海葵对象 */
var aneObj = function() {
	this.x = []; //X轴位置
	this.len = [];//高度
}

//数量
aneObj.prototype.num = 50;

//初始化
aneObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.x[i] = i * 16 + Math.random() * 20;
		this.len[i] = 200 + Math.random() * 50;
	}
}

//绘制海葵,在ctx2上绘制
aneObj.prototype.draw = function() {
	ctx2.save();
	ctx2.globalAlpha = 0.6; //设置透明度
	ctx2.lineWidth = 23;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for (var i = 0; i < this.num; i++) {
		ctx2.beginPath();
		ctx2.moveTo(this.x[i], canHeight);
		ctx2.lineTo(this.x[i], canHeight - this.len[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}