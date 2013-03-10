function brickIsBrush (type) {
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
    game.score += 3;
    game.updateUI();
  } else if (brickIsBrush(this.type)) {
    // shift type down to change to proper color
    ball.color(brickColors[this.type - 4]);
  } else if (brickIsDeath(this.type)) {
    game.resetBall();
    game.updateUI();
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

    game.score += 100;
    game.updateUI();
    this.destroy();
    if (diamondCount <= 1) {
      game.levelWon();
    }
  }
}

Crafty.c('Brick', {
  init: function () {
  },

  brick: function (type, x, y) {
    this.type = type;
    if (x != undefined && y != undefined) {
      this.board_pos = {x: x, y: y};
    }

    return this.attr({
      onHit: onBrickHit
    })
  }
});
