//esta función mantiene el fondo del juego
function PublicBackground(game) {
  this.game = game;

  this.img = new Image();
  this.img.src = "img/public.png";

  this.x = 0;
  this.y = 200;

  this.dx = 10;
  this.vy = 20;

  this.animated = false;
  this.moveUp = true
}

PublicBackground.prototype.draw = function() {
  if (this.animated) {
      if (this.moveUp) {
        this.y--
        console.log("subiendo")
      } else {
        this.y++
        console.log("bajando")
      } 
      if(this.y === 50) {
        this.moveUp = false
        console.log("cambio")
      } else if (this.y === 200) {
        this.animated = false
        console.log("estoy abajo otra vez")
        this.moveUp = true
      }
      

 
  }
 
  

  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
};



