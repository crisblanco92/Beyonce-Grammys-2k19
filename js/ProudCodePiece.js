    //chequea si ha sucedido una colisión
    isCollision: function (collision) {
      var resultado = collision.some(function (obstacle, index) {
        //console.log(this.player, obstacle)
        var resultadoParcial = (
            ((this.player.x + this.player.w) >= obstacle.x) &&
            ((obstacle.x + obstacle.w) > this.player.x) &&
            ((this.player.y + this.player.h) > obstacle.y) &&
            ((obstacle.y + obstacle.h) > this.player.y)
          
          ); //console.log(this.player, obstacle)
          //console.log('el resultado parcial de ', obstacle, ' es ', resultadoParcial)
          if (resultadoParcial) this.deleteObstacle(index, collision);
          return resultadoParcial;
      }.bind(this));
        //console.log(resultado)
          return resultado;
    },

    // borra los obstaculos cuando hay colisión 
  deleteObstacle: function(index, collision) {
    //console.log('vamos a borrar el obstaculo en el indice ', index)
    var obstacle = collision.splice(index, 1);
    obstacle[0].audio.play();
    //console.log("he borrado el indice " + index)
    }