Crafty.scene("game", function () {
  window.game = window.game || {};

  game.addBall = function(xPos, yPos) {
    Crafty.e("Ball, 2D, Canvas, Color, Collision, Edges, BallControls")
      .ballControls(1)
      .color(brickColors[brickTypes.ltblue])
      .attr({w: ballSize, h: ballSize,
             x: (xPos + .5) * blockWidth - ballSize / 2, // center the ball
             y: (yPos + .5) * blockHeight - ballSize / 2,
             z: 10})
      .ball();
  }

  Crafty.background("#222");

  createLevel();
});
