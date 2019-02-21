  checkScore: function() {
    if (this.score >= this.scoreObj) {
      this.publicBackground.animated = true
      this.publicBackground.audio.play();
      this.publicBackground.lights = true
      this.scoreObj += 60;
    }
  } 


//function PublicBackground(game)
  this.animated = false;
  this.moveUp = true


PublicBackground.prototype.draw = function() {
  if (this.animated) {
    //this.lights.style.display = "block"
    this.game.ctx.drawImage(this.lightImage, 0, 0, this.game.canvas.width, this.game.canvas.height)
    //console.log("focos")  
    if (this.moveUp) {
        this.y--
        //console.log("subiendo")

      } else {
        this.y++
        //console.log("bajando")
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
 