//esta función mantiene el fondo del juego
function PublicBackground(game) {
  this.game = game;

  this.img = new Image();
  this.img.src = "img/public.png";

  this.lightImage = new Image();
  this.lightImage.src = "img/focos.png";

  this.x = 0;
  this.y = 200;

  this.dx = 10;
  this.vy = 20;

  this.animated = false;
  this.moveUp = true

  this.audio = new Audio();
  this.audio.src = "img/crowdSound.mp3"

  
}

PublicBackground.prototype.draw = function() {
  if (this.animated) {
    //this.lights.style.display = "block"
    this.game.ctx.drawImage(this.lightImage, 0, 0, this.game.canvas.width, this.game.canvas.height)
    //console.log("focos")  
    if (this.moveUp) {
        this.y--
        // console.log("subiendo")

      } else {
        this.y++
        // console.log("bajando")
      } 
      if(this.y === 50) {
        this.moveUp = false
        //console.log("cambio")
      } else if (this.y === 200) {
        this.animated = false
        //console.log("estoy abajo otra vez")
        this.moveUp = true
      }
  }
 
  

  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
};



