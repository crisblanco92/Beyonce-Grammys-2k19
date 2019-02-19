var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  scoreBoard: undefined,
  keys: {
    TOP_KEY : 38,
    SPACE : 32,
      LEFT: 37,
      RIGHT: 39

  },

  init: function(id){
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    this.start();
  },

  start: function () {
    
    this.reset();


    this.interval = setInterval(function () {
      this.clear();

      this.framesCounter++;
      // controlamos que frameCounter no sea superior a 1000
      if (this.framesCounter > 1000) {
        this.framesCounter = 1;
      }

      
    //controlamos la velocidad de generación de obstáculos
      if (this.framesCounter % 100 === 0) {
        this.generateObstacle();
      }    

    //controlamos la velocidad de generación de obstáculos JAY
      if (this.framesCounter % 400 === 0) {
        this.generateObstacleJay();
      }    

    //controlamos la velocidad de generación de obstáculos KANYE
      if (this.framesCounter % 250 === 0) {
        this.generateObstacleKanye();
      }    

        this.moveAll();
        this.drawAll();


      if (this.isCollision(this.obstaclesGrammy)) {
        this.score += 20
        return
      }

      if(this.isCollision(this.obstaclesFakeGrammy)){
        this.score -= 20;
        return 
      }  

      if(this.isCollision(this.obstaclesMicrophone)){
        this.score += 50
        return 
      }  

      if(this.isCollision(this.obstaclesKanye)){
        this.gameOver();
      }  

      this.checkScore();


    
    }.bind(this), 1000 / this.fps);
  },
  

  stop: function () {
    clearInterval(this.interval);
  },

  gameOver: function () {
    this.stop();

    if (confirm("GAME OVER. Play again?")) {
      this.reset();
      this.start();
    }
  },


  //reseteamos todos los elementos del juego para empezar en un estado limpio
  reset: function () {
    this.background = new Background(this);
    this.publicBackground = new PublicBackground(this);
    this.player = new Player(this);
    this.scoreBoard = ScoreBoard
    this.framesCounter = 0;
    this.obstaclesGrammy = [new Obstacle(this)];
    this.obstaclesFakeGrammy = [new Obstacle2(this)]
    this.obstaclesMicrophone = []
    this.obstaclesKanye = []
    this.score = 0;
    this.scoreObj = 40; // OBJETIVO
  },


  //dibuja todos los assets del juego
  drawAll: function () {
    this.background.draw();
    this.publicBackground.draw();
    this.player.draw();
    this.obstaclesGrammy.forEach(function (obstacle) { obstacle.draw(); });
    this.obstaclesFakeGrammy.forEach(function (obstacle) { obstacle.draw(); });
    this.obstaclesMicrophone.forEach(function (obstacle) { obstacle.draw(); });
    this.obstaclesKanye.forEach(function (obstacle) { obstacle.draw(); });
    this.drawScore();
    
  },


  //mueve todos los objetos del escenario, el fondo, el jugador y los obstáculos
  moveAll: function () {
    this.player._moveBeyonce();
    this.player.move();
    this.obstaclesGrammy.forEach(function (obstacle) { obstacle.move(); });
    this.obstaclesFakeGrammy.forEach(function (obstacle) { obstacle.move(); });
    this.obstaclesMicrophone.forEach(function (obstacle) { obstacle.move(); });
    this.obstaclesKanye.forEach(function (obstacle) { obstacle.move(); });

  },


  //generamos nuevos obstáculos
  generateObstacle: function () {
    this.obstaclesGrammy.push(new Obstacle(this));
    this.obstaclesFakeGrammy.push(new Obstacle2(this));
  },

  generateObstacleJay: function () {
    this.obstaclesMicrophone.push(new Obstacle3(this));
  },

  generateObstacleKanye: function () {
    this.obstaclesKanye.push(new Obstacle4(this));
  },


    //chequea si ha sucedido una colisión CON GRAMMYS BUENOS
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

  // borra los obstaculos cuando hay colisión DE GRAMMYS BUENOS
  deleteObstacle: function(index, collision) {
    //console.log('vamos a borrar el obstaculo en el indice ', index)
    collision.splice(index, 1)
    console.log("he borrado el indice " + index)
    },


//   //chequea si ha sucedido una colisión CON GRAMMYS MALOS
//   isCollision2: function () {

//       var resultado = this.obstacles2.some(function (obstacle, index) {
//         //console.log(this.player, obstacle)
//         var resultadoParcial = (
//             ((this.player.x + this.player.w) >= obstacle.x) &&
//             ((obstacle.x + obstacle.w) > this.player.x) &&
//             ((this.player.y + this.player.h) > obstacle.y) &&
//             ((obstacle.y + obstacle.h) > this.player.y)
          
//           ); //console.log(this.player, obstacle)

//           //console.log('el resultado parcial de ', obstacle, ' es ', resultadoParcial)

//           if (resultadoParcial) this.deleteObstacle2(index);

//           return resultadoParcial;
//         }.bind(this));
//         //console.log(resultado)
//         return resultado;
//     }, 
  

//   // borra los obstaculos cuando hay colisión DE GRAMMYS MALOS
//   deleteObstacle2: function(index) {
//       //console.log('vamos a borrar el obstaculo en el indice ', index)
//       this.obstacles2.splice(index, 1)
//       console.log("he borrado el indice " + index)
//       },



// //chequea si ha sucedido una colisión CON JAY Z
// isCollision3: function () {

//   var resultado = this.obstacles3.some(function (obstacle, index) {
//     //console.log(this.player, obstacle)
//     var resultadoParcial = (
//         ((this.player.x + this.player.w) >= obstacle.x) &&
//         ((obstacle.x + obstacle.w) > this.player.x) &&
//         ((this.player.y + this.player.h) > obstacle.y) &&
//         ((obstacle.y + obstacle.h) > this.player.y)
      
//       ); //console.log(this.player, obstacle)

//       //console.log('el resultado parcial de ', obstacle, ' es ', resultadoParcial)

//       if (resultadoParcial) this.deleteObstacle3(index);

//       return resultadoParcial;
//     }.bind(this));
//     //console.log(resultado)
//     return resultado;
// }, 


// // borra los obstaculos cuando hay colisión DE JAY Z
// deleteObstacle3: function(index) {
//   //console.log('vamos a borrar el obstaculo en el indice ', index)
//   this.obstacles3.splice(index, 1)
//   console.log("he borrado el indice " + index)
//   },



//   //chequea si ha sucedido una colisión CON KANYE
// isCollision4: function () {

//   var resultado = this.obstacles4.some(function (obstacle, index) {
//     //console.log(this.player, obstacle)
//     var resultadoParcial = (
//         ((this.player.x + this.player.w) >= obstacle.x) &&
//         ((obstacle.x + obstacle.w) > this.player.x) &&
//         ((this.player.y + this.player.h) > obstacle.y) &&
//         ((obstacle.y + obstacle.h) > this.player.y)
      
//       ); //console.log(this.player, obstacle)

//       //console.log('el resultado parcial de ', obstacle, ' es ', resultadoParcial)

//       if (resultadoParcial) this.deleteObstacle4(index);

//       return resultadoParcial;
//     }.bind(this));
//     //console.log(resultado)
//     return resultado;
// }, 


// // borra los obstaculos cuando hay colisión DE KANYE
// deleteObstacle4: function(index) {
//   //console.log('vamos a borrar el obstaculo en el indice ', index)
//   this.obstacles4.splice(index, 1)
//   console.log("he borrado el indice " + index)
//   },



    
  

  

   //pinta el marcador
   drawScore: function () {
    this.scoreBoard.update(this.score, this.ctx)
  },



  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  checkScore: function() {
    if (this.score >= this.scoreObj) {
      this.publicBackground.animated = true
      this.scoreObj += 40;
    } 

  }


  










}