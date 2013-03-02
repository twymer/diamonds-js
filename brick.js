function brickIsPaddle (type) {
  return (type > 5 && type < 10);
}

function brickIsDiamond (type) {
  return type == 11;
}

function brickIsNormal (type) {
  return (type > 0 && type < 6);
}

function brickIsDeath (type) {
  return type == 12;
}

function onBrickHit (ball) {
  if (ball.color() === this.color()) {
    this.destroy();
  } else if (brickIsPaddle(this.type)) {
    // shift type down to change to proper color
    ball.color(brickColors[this.type - 4]);
  } else if (brickIsDeath(this.type)) {
    // TODO: need a cleaner way to do this
    Crafty(Crafty("Ball")[0]).destroy();
    Crafty.e("Ball, 2D, Canvas, Color, Collision, Edges, BallControls")
      .ballControls(1)
      .color(brickColors[brickTypes.ltblue])
      .attr({w: ballSize, h: ballSize, x: 1.5*blockWidth, y: 6*blockHeight})
      .ball();
  } else if (brickIsDiamond(this.type)) {
    var brickIds = Crafty("Brick")
    for (var i = 0; i < brickIds.length; i++) {
      if (brickIsNormal(Crafty(brickIds[i]).type)) {
        return;
      }
    }
    this.destroy();
  }
}

Crafty.c('Brick', {
  init: function () {
  },

  brick: function (type) {
    this.type = type;

    return this.attr({
      onHit: onBrickHit
    })
  }
});
