//este literal mantiene el marcador del juego con su puntuación
var ScoreBoard = {
    update: function (score, ctx) {
        ctx.font = "30px Courier New Bold";
        ctx.fontSize = "large";
        ctx.fillStyle = "YELLOW";
        ctx.marginTop = "30px";
        ctx.fillText(Math.floor(score), 50, 50);
    }
}