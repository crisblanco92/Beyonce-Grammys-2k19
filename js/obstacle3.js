//constructor de obstáculos
function Obstacle3(game) {
  this.game = game;

  this.w = 30;
  this.h = 80;

  this.dy = -1;

  this.x = Math.floor(Math.random() * ((this.game.w * 0.8) - (this.game.w * 0.2))) + this.game.w * 0.2;
  this.y = 30;

  this.img = new Image()
  this.img.src = "img/microphone.png"

  this.audio = new Audio();
  this.audio.src = "img/microphoneSound.mp3"
}



Obstacle3.prototype.draw = function() {

  //this.game.ctx.fillStyle = "yellow";
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
    );

};


Obstacle3.prototype.move = function() {
  this.y -= this.dy;
};