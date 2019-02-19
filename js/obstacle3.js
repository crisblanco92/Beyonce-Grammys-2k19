//constructor de obstáculos
function Obstacle3(game) {
  this.game = game;

  this.w = 60;
  this.h = 80;

  this.dy = -1;

  this.x = Math.floor(Math.random() * this.game.w);
  this.y = 30;

  this.img = new Image()
  this.img.src = "img/jayz.png"

  // this.x = this.game.canvas.width;
  // this.y = this.game.player.y0 + this.game.player.h - this.h - 5;
}

Obstacle3.prototype.draw = function() {

  this.game.ctx.fillStyle = "yellow";
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
    );
  //this.game.ctx.fillRect(this.x, this.y, this.w, this.h);

};


Obstacle3.prototype.move = function() {
  this.y -= this.dy;
};