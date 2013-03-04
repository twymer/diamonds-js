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
    game.resetBall();
  } else if (brickIsDiamond(this.type)) {
    var brickIds = Crafty("Brick");
    var diamondCount = 0;

    for (var i = 0; i < brickIds.length; i++) {
      if (brickIsNormal(Crafty(brickIds[i]).type)) {
        return;
      }
      if (brickIsDiamond(Crafty(brickIds[i]).type)) {
        diamondCount++;
      }
    }

    this.destroy();
    if (diamondCount <= 1) {
      game.gameWon();
    }
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
