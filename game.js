Crafty.scene("game", function () {
  window.game = window.game || {};

  var lives = 3;
  var originalBallLocation = null;
  var timeBonus = 2000;
  var timer = null;
  game.currentLevelNumber = 0;

  game.score = 0;
  game.levelInfo = {name: ''};

  ui = Crafty.e('2d, DOM, Text')
        .attr({x: 15,
               y: Crafty.stage.elem.clientHeight - 35,
               w: Crafty.stage.elem.clientWidth - 15})

  game.updateUI = function () {
    ui.text('Lives: ' + lives +
            ' | Level: ' + game.levelInfo.name +
            ' | Score: ' + game.score +
            ' | Time Bonus: ' + timeBonus);
  }

  game.gameOver = function () {
    clearInterval(timer);

    Crafty.e('2D, Canvas, Color')
      .attr({alpha: .8,
             x: 0, y: 0,
             w: Crafty.stage.elem.clientWidth,
             h: Crafty.stage.elem.clientHeight})
      .color("#000");
    Crafty.e('2D, DOM, Text')
      .attr({x: 0,
             y: (Crafty.stage.elem.clientHeight - 40) / 2,
             w: Crafty.stage.elem.clientWidth,
             h: 100})
      .textColor("#FFF")
      .css('text-align', 'center')
      .text("You lost! Haha how do you even restart?");
  }

  game.levelWon = function () {
    clearInterval(timer);
    game.score += timeBonus;

    game.currentLevelNumber++;
    if (game.currentLevelNumber < levels.length) {
      loadLevel();
      timeBonus = 2000;
      startTimer();
      game.updateUI();
    } else {
      Crafty.e('2D, Canvas, Color')
        .attr({alpha: .8,
               x: 0, y: 0, z: 10,
               w: Crafty.stage.elem.clientWidth,
               h: Crafty.stage.elem.clientHeight})
        .color("#000");
      Crafty.e('2D, DOM, Text')
        .attr({x: 0,
               y: (Crafty.stage.elem.clientHeight - 40) / 2,
               z: 10,
               w: Crafty.stage.elem.clientWidth,
               h: 100})
        .textColor("#FFF")
        .css('text-align', 'center')
        .text("You win! Final score is: " + game.score +
              "<br>Now what did I do with the other levels...");
    }
  }

  game.addBall = function (xPos, yPos) {
    originalBallLocation = [xPos, yPos];

    Crafty.e("Ball, 2D, Canvas, Color, Collision, Edges, BallControls")
      .ballControls(1)
      .color(brickColors[brickTypes.ltblue])
      .attr({w: ballSize, h: ballSize,
             x: xPos * blockWidth + blockWidth / 2 - ballSize / 2, // center the ball
             y: yPos * blockHeight - blockHeight / 2 - ballSize / 2,
             z: 10})
      .ball();
  }

  game.resetBall = function () {
    Crafty(Crafty("Ball")[0]).destroy();
    if (--lives > 0) {
      game.addBall(originalBallLocation[0], originalBallLocation[1]);
    } else {
      game.gameOver();
    }
    game.updateUI();
  }

  Crafty.e('Keyboard')
    .bind('KeyDown', function (e) {
      if (this.isDown(Crafty.keys.E)) {
        Crafty.scene('edit');
      } else if (this.isDown(Crafty.keys.D)) {
        localStorage.removeItem('diamonds-game-custom-level');
        Crafty.scene('game');
      }
    });

  function startTimer () {
    timer = setInterval(function () {
      timeBonus = Math.max(timeBonus - 10, 0);
      game.updateUI();
    }, 400);
  }

  Crafty.background("#222");

  var customLevel = null;
  if (Modernizr.localstorage) {
    customLevel = localStorage['diamonds-game-custom-level'];
    if (customLevel) {
      document.getElementById('level-string').innerHTML = customLevel;
    }
  }
  loadLevel(customLevel);
  startTimer();
  game.updateUI();
});
