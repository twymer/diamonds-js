function brickTypeName (typeValue) {
    for (var k = 0; k < Object.keys(brickTypes).length; k++) {
      if (brickTypes[Object.keys(brickTypes)[k]] === typeValue) {
        return Object.keys(brickTypes)[k];
      }
    }
}

function brickIsBrush (type) {
  return (type > 6 && type < 12);
}

function brickIsDiamond (type) {
  return type == 12;
}

function brickIsNormal (type) {
  return (type > 1 && type < 7);
}

function brickIsDeath (type) {
  return type == 16;
}

function brickIsKey (type) {
  return type == 13;
}

function brickIsLock (type) {
  return type == 14;
}

function brickIsReverse (type) {
  return type == 15;
}

function onBrickHit (ball) {
  if (ball.color() === this.color()) {
    this.destroy();
    game.addPoints(3);
    game.updateUI();

    var counts = countBricks();

    if (counts.diamonds + counts.normals == 0) {
      game.levelWon();
    }
  } else if (brickIsBrush(this.type)) {
    if (this.type === brickTypes.orangeBrush) {
      // since there is no orange brick to shift down to for the color
      // we have to set this one manually
      ball.color('#FFFFFF');
    } else {
      // shift type down to change to proper color
      ball.color(brickColors[this.type - 4]);
    }
  } else if (brickIsDeath(this.type)) {
    game.resetBall();
    game.updateUI();
  } else if (brickIsKey(this.type)) {
    if (ball.color() === "#FFFFFF" && !game.hasKey) {
      game.hasKey = true;
      this.destroy();
    }
  } else if (brickIsLock(this.type)) {
    if (ball.color() === "#FFFFFF" && game.hasKey) {
      game.hasKey = false;
      this.destroy();
    }
  } else if (brickIsReverse(this.type)) {
    game.reversed = !game.reversed;
    Crafty("Ball").ballControls(game.reversed);
    this.destroy();
  } else if (brickIsDiamond(this.type)) {
    var counts = countBricks();

    if (counts.normals === 0) {
      game.addPoints(100);
      game.updateUI();
      this.destroy();

      // diamond count still has the destroyed diamond in it
      if (counts.diamonds + counts.normals <= 1) {
        game.levelWon();
      }
    }
  }
}

// Return an object with the count of all brick types
// that we need counts of (just normal breakable bricks and diamonds)
function countBricks () {
  var brickIds = Crafty("Brick");
  counts = {normals: 0, diamonds: 0};

  for (var i = 0; i < brickIds.length; i++) {
    if (brickIsNormal(Crafty(brickIds[i]).type)) {
      counts.normals++;
    }
    if (brickIsDiamond(Crafty(brickIds[i]).type)) {
      counts.diamonds++;
    }
  }

  return counts;
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
