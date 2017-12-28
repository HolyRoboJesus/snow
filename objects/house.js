function House (img, x, y) {
	this.img = new Image();
	this.img.src = img
	this.x = x;
	this.y = y;
	
}

House.prototype.draw = function(context) {
	
	context.drawImage (this.img,
	this.x - 64,
	this.y - 128,
	128,
	128);
					
}