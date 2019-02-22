window.onload = function() {
  // var audio =  document.getElementById("my_audio").play();
  var audio = new Audio("img/starrrrttt.mp3")
  setTimeout(function(){
  audio.play();
  },500)

  document.getElementById("start-button").onclick = function() {
    document.getElementsByClassName("inicio")[0].style.display = "none"
    Game.init("canvas");
    audio.pause();
    Game.audio.play();
    
    

  


}
document.getElementById("reset-button").onclick = function() {
  //Game.reset();
  Game.start()
  document.getElementsByClassName("game-over")[0].style.display = "none"

}
  
}