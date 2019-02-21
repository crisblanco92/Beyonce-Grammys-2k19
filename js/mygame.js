var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  counter: 60,
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
    this.mainAudio.play();
    this.countDown();
    setTimeout(function(){

      this.gameOver();
    }.bind(this), 60000)
    ;


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
      if (this.framesCounter % 400 === 0) {
        this.generateObstacleKanye();
      }    

        this.moveAll();
        this.drawAll();


      if (this.isCollision(this.obstaclesGrammy)) {
        this.score += 20;
        return
      }

      if(this.isCollision(this.obstaclesFakeGrammy)){
        this.score -= 20;
        return 
      }  

      if(this.isCollision(this.obstaclesMicrophone)){
        this.score += 50;
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
    this.mainAudio.pause();
    document.getElementsByClassName("game-over")[0].style.display = "block"
      this.reset();
      
  },


  //reseteamos todos los elementos del juego para empezar en un estado limpio
  reset: function () {
    this.background = new Background(this);
    this.publicBackground = new PublicBackground(this);
    this.curtain = new Curtain(this);
    this.player = new Player(this);
    this.scoreBoard = ScoreBoard
    this.framesCounter = 0;
    this.obstaclesGrammy = [new Obstacle(this)];
    this.obstaclesFakeGrammy = [new Obstacle2(this)]
    this.obstaclesMicrophone = []
    this.obstaclesKanye = []
    this.score = 0;
    this.scoreObj = 60; // OBJETIVO
    this.audio = new Audio();
    this.audio.src = "img/button.mp3"
    this.mainAudio = new Audio();
    this.mainAudio.src = "img/8bitcrazyinlove.mp3"
    this.counter = 60;
    
    clearInterval(this.interval);

  },


  //dibuja todos los assets del juego
  drawAll: function () {
    this.curtain.draw();
    this.background.draw();
    this.player.draw();
    this.obstaclesGrammy.forEach(function (obstacle) { obstacle.draw(); });
    this.obstaclesFakeGrammy.forEach(function (obstacle) { obstacle.draw(); });
    this.obstaclesMicrophone.forEach(function (obstacle) { obstacle.draw(); });
    this.obstaclesKanye.forEach(function (obstacle) { obstacle.draw(); });
    this.publicBackground.draw();
    this.drawScore();
    this.drawCounter();
    
  },


  //mueve todos los objetos del escenario, el fondo, el jugador y los obstáculos
  moveAll: function () {
    this.player._moveBeyonce();
    this.player.move();
    this.curtain.move();
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
    },
  

   //pinta el marcador
  drawScore: function () {
    this.scoreBoard.update(this.score, this.ctx)
  },

  //pinta el contador
  drawCounter: function () {
    this.ctx.fillText(this.counter, this.w - 220 , 50, 100, 100)
  },


  countDown: function () {
    this.intervalcounter = setInterval(() => {
      this.counter-- 
    },1000)

    if(this.counter == 0) {
  
      this.clearInterval(this.intervalCounter)
      this.gameOver()
    }
  },



  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  checkScore: function() {
    if (this.score >= this.scoreObj) {
      this.publicBackground.animated = true
      this.publicBackground.audio.play();
      this.publicBackground.lights = true
      this.scoreObj += 60;
    } 

  }


  










}