var levels = [];
levels[0] = [
      'Simpleton',
      'G 0 0 0 0 5 5 0 0 0 0 G',
      '1 0 0 0 1 4 4 1 0 0 0 1',
      '0 0 0 C 4 4 4 4 C 0 0 0',
      '0 9 C 3 3 3 3 3 3 C 7 0',
      '0 1 2 2 0 0 0 0 2 2 1 0',
      '0 Z 0 0 0 C C 0 0 0 0 0',
      '0 0 0 0 0 C C 0 0 0 0 0',
      '0 1 2 2 0 0 0 0 2 2 1 0',
      '0 8 C 4 4 4 4 4 4 C A 0',
      '0 0 0 C 3 3 3 3 C 0 0 0',
      '1 0 0 0 1 3 3 1 0 0 0 1',
      'G 0 0 0 0 6 6 0 0 0 0 G']

function clearLevel () {
    Crafty("Ball").destroy();
    Crafty("Brick").destroy();
}

function loadCustomLevel(customLevel) {
  var level = [];
  level[0] = 'Custom';
  customLevel = customLevel.split(',');
  for (var i = 0; i < 12; i++) {
    var row = customLevel.slice(i * 12, (i + 1) * 12);
    level[i+1] = row.join(' ');
  }
  return level
}

function loadLevel (customLevel) {
  var level = [];

  // Clear level in case this isn't a new game
  clearLevel();

  if (customLevel) {
    level = loadCustomLevel(customLevel);
  } else {
    level = levels[game.currentLevelNumber];
  }

  game.levelInfo.name = level[0]

  for (var i = 1; i < level.length; i++) {
    var bricks = level[i].split(' ');
    for (var j = 0; j < bricks.length; j++) {
      var brickType = 0;
      if (!customLevel) {
        brickType = parseInt(bricks[j], 36);
      } else {
        brickType = parseInt(bricks[j]);
      }

      // If it's the ball, add it and continue as normal
      if (brickType === 35) {
        game.addBall(j, i);
        brickType = 0;
      }

      color = brickColors[brickType];
      brickAttrs = {w: blockWidth-2, h: blockHeight-2,
                    x: (blockWidth)*j+1, y: (blockHeight) * (i - 1) + 1};

      if (brickType === 0) {
        // Currently just drawing blank blocks to keep the grid appearance.
        // This will eventually be an image based backgrond.
        Crafty.e("2D, Canvas, Color")
          .color(color)
          .attr(brickAttrs)
      } else {
        var typeName = brickTypeName(brickType);

        Crafty.e("Brick, 2D, Canvas, Color, " + typeName)
          .color(color)
          .attr(brickAttrs)
          .brick(brickType);
      }
    }
  }
}
