//constructor de obstáculos
function Obstacle4(game) {
  this.game = game;

  this.w = 60;
  this.h = 80;

  this.dy = -2;

  this.x = Math.floor(Math.random() * ((this.game.w * 0.8) - (this.game.w * 0.2))) + this.game.w * 0.2;
  this.y = 30;

  this.img = new Image()
  this.img.src = "img/kanye.png"

  // this.x = this.game.canvas.width;
  // this.y = this.game.player.y0 + this.game.player.h - this.h - 5;
}

Obstacle4.prototype.draw = function() {

  //this.game.ctx.fillStyle = "yellow";
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
    );
  //this.game.ctx.fillRect(this.x, this.y, this.w, this.h);

};


Obstacle4.prototype.move = function() {
  this.y -= this.dy;
};