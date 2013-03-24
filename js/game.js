Crafty.scene("game", function () {
  window.game = window.game || {};

  var originalBallLocation = null;
  var timeBonus = 2000;
  var timer = null;
  game.hasKey = false;
  game.reversed = false;
  game.currentLevelNumber = 0;

  game.lives = 6;
  game.score = 0;
  game.levelInfo = {name: ''};

  ui = Crafty.e('2D, DOM, Text')
        .attr({x: 15,
               y: Crafty.stage.elem.clientHeight - 43,
               w: Crafty.stage.elem.clientWidth - 15})
        .css('font-size', '16px')

  game.updateUI = function () {
    ui.text('Level: ' + game.levelInfo.name +
            '<br>' +
            'Lives: ' + game.lives +
            ' | Score: ' + game.score +
            ' | Time Bonus: ' + timeBonus +
            ' | Key: ' + (game.hasKey ? 'Yes' : 'No'));
  }

  Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function (e) {
    game.ball.targetX = e.layerX;
  });

  Crafty.addEvent(this, Crafty.stage.elem, "mouseup", function (e) {
    game.ball.targetX = null;
  });

  Crafty.addEvent(this, Crafty.stage.elem, "mousemove", function (e) {
    if (game.ball.targetX != null) {
      game.ball.targetX = e.layerX;
    }
  });

  game.addPoints = function (points) {
    oldLivesFromScore = Math.floor(game.score / 10000);
    game.score += points;
    newLivesFromScore = Math.floor(game.score / 10000);

    if (newLivesFromScore > oldLivesFromScore) {
      game.lives++;
    }
  }

  // Draw a grey overlay over the whole game board.
  // Optional parameter alpha to specify opacity.
  function drawGreyOverlay(alpha) {
    return Crafty.e('2D, Canvas, Color, Overlay')
             .attr({alpha: typeof alpha !== 'undefined' ? alpha : .8,
                    x: 0, y: 0, z: 9,
                    w: Crafty.stage.elem.clientWidth,
                    h: Crafty.stage.elem.clientHeight})
             .color("#000");
  }

  function renderText(text, attrs) {
    return Crafty.e('2D, DOM, Text')
             .attr(attrs)
             .textColor("#FFF")
             .css('text-align', 'center')
             .text(text);
  }

  function triggerDelay(callback) {
    overlayObj = drawGreyOverlay(.4);
    var text = "Wait for it...";

    textObj = renderText(text, {x: 0,
                                y: (Crafty.stage.elem.clientHeight - 40) / 2,
                                z: 10,
                                w: Crafty.stage.elem.clientWidth,
                                h: 100});

    setTimeout(function () {
      overlayObj.destroy();
      textObj.destroy();
      game.ball.setActive();
      game.updateUI();
      callback();
    }, 1000);
  }

  game.gameOver = function () {
    clearInterval(timer);
    drawGreyOverlay();

    renderText("You lost! Haha how do you even restart?",
               {y: (Crafty.stage.elem.clientHeight - 40) / 2,
                w: Crafty.stage.elem.clientWidth,
                h: 100});
  }

  game.skipToLevel = function(levelNumber) {
    if (levelNumber < levels.length) {
      game.currentLevelNumber = levelNumber;
      loadLevel();
      triggerDelay(function () {
        timeBonus = 2000;
        startTimer();
      });
    }
  }

  game.levelWon = function () {
    clearInterval(timer);
    game.addPoints(timeBonus);

    game.currentLevelNumber++;
    if (game.currentLevelNumber < levels.length) {
      loadLevel();
      triggerDelay(function () {
        timeBonus = 2000;
        startTimer();
      });
    } else {
      drawGreyOverlay();
      var text = "You win! Final score is: " + game.score +
                 "<br>Now what did I do with the other levels...";

      renderText(text, {x: 0,
                        y: (Crafty.stage.elem.clientHeight - 40) / 2,
                        z: 10,
                        w: Crafty.stage.elem.clientWidth,
                        h: 100});
    }
  }

  game.addBall = function (xPos, yPos) {
    originalBallLocation = [xPos, yPos];

    game.ball = Crafty.e("Ball, 2D, Canvas, Color, Collision, Edges, BallControls")
                  .color(brickColors[brickTypes.ltblue])
                  .attr({w: ballSize, h: ballSize,
                         // center the ball in the assigned brick area
                         x: xPos * blockWidth + blockWidth / 2 - ballSize / 2,
                         y: yPos * blockHeight - blockHeight / 2 - ballSize / 2,
                         z: 5})
                  .ball();
  }

  game.resetBall = function () {
    Crafty(Crafty("Ball")[0]).destroy();
    if (--game.lives > 0) {
      game.addBall(originalBallLocation[0], originalBallLocation[1]);
      triggerDelay(function () {
        game.ball.setActive();
      });
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
  game.ball.setActive(); // set ball active right away on first level
  startTimer();
  game.updateUI();
});
