Crafty.scene("game", function () {
  window.game = window.game || {};

  var originalBallLocation = null;

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
    game.addBall(originalBallLocation[0], originalBallLocation[1]);
  }

  Crafty.background("#222");

  createLevel();
});
