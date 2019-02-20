//constructor de obstáculos
function Obstacle(game) {
  this.game = game;

  this.w = 50;
  this.h = 60;

  this.dy = -2;

  this.x = Math.floor(Math.random() * ((this.game.w * 0.8) - (this.game.w * 0.2))) + this.game.w * 0.2;
  this.y = 30;

  this.img = new Image()
  this.img.src = "img/grammy.png"

  this.score = 20;

  this.audio = new Audio();
  this.audio.src = "img/grammySound.mp3"

}

Obstacle.prototype.draw = function() {

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


Obstacle.prototype.move = function() {
  this.y -= this.dy;
};