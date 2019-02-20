window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    document.getElementsByClassName("inicio")[0].style.display = "none"
    Game.init("canvas");
    Game.audio.play();


  


}
}