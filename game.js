Crafty.scene("game", function () {
  window.game = window.game || {};

  var lives = 3;
  var originalBallLocation = null;

   game.gameOver = function () {
    Crafty.e('2D, Canvas, Color')
      .attr({alpha: .8,
             x: 0, y: 0,
             w: Crafty.stage.elem.clientWidth,
             h: Crafty.stage.elem.clientHeight})
      .color("#000")
    Crafty.e('2D, DOM, Text')
      .attr({x: 0,
             y: (Crafty.stage.elem.clientHeight - 40) / 2,
             w: Crafty.stage.elem.clientWidth,
             h: 100})
      .textColor("#FFF")
      .css('text-align', 'center')
      .text("You lost! Haha how do you even restart?")
  }

  game.gameWon = function () {
    Crafty.e('2D, Canvas, Color')
      .attr({alpha: .8,
             x: 0, y: 0,
             w: Crafty.stage.elem.clientWidth,
             h: Crafty.stage.elem.clientHeight})
      .color("#000")
    Crafty.e('2D, DOM, Text')
      .attr({x: 0,
             y: (Crafty.stage.elem.clientHeight - 40) / 2,
             w: Crafty.stage.elem.clientWidth,
             h: 100})
      .textColor("#FFF")
      .css('text-align', 'center')
      .text("You win! Now what did I do with the other levels...")
  }

  game.addBall = function(xPos, yPos) {
    originalBallLocation = originalBallLocation || [xPos, yPos];

    Crafty.e("Ball, 2D, Canvas, Color, Collision, Edges, BallControls")
      .ballControls(1)
      .color(brickColors[brickTypes.ltblue])
      .attr({w: ballSize, h: ballSize,
             x: (xPos + .5) * blockWidth - ballSize / 2, // center the ball
             y: (yPos + .5) * blockHeight - ballSize / 2,
             z: 10})
      .ball();
  }

  game.resetBall = function() {
    Crafty(Crafty("Ball")[0]).destroy();
    if (--lives > 0) {
      game.addBall(originalBallLocation[0], originalBallLocation[1]);
    } else {
      game.gameOver();
    }
  }

  Crafty.background("#222");

  createLevel();
});
