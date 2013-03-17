var levels = [];
levels[0] = ['Simpleton',
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
levels[1] = ['Old Favorite',
            '0 0 0 0 0 0 0 0 0 0 0 0',
            '0 0 0 0 2 2 2 2 0 0 0 0',
            '0 0 0 2 6 6 6 6 2 0 0 0',
            '0 0 2 A 3 3 3 3 7 2 0 0',
            '0 G 6 3 C C C C 3 6 G 0',
            '0 G 6 3 C C C C 3 6 G 0',
            '0 G 6 3 C C C C 3 6 G 0',
            '0 G 6 3 C C C C 3 6 G 0',
            '0 0 2 7 3 3 3 3 A 2 0 0',
            '0 0 0 2 6 6 6 6 2 0 0 0',
            '0 0 0 0 2 2 2 2 0 0 0 0',
            '0 0 0 0 0 0 0 0 0 0 0 Z']
levels[2] = ['Plus Signs',
             '0 5 0 0 0 0 0 0 0 9 C 0',
             '5 G 5 0 0 0 0 3 0 0 1 2',
             '0 5 0 0 0 0 3 G 3 0 1 0',
             '0 0 0 0 2 0 0 3 0 0 C 2',
             '0 0 0 2 7 2 0 0 0 0 1 0',
             '0 0 0 0 2 0 0 0 0 0 1 2',
             '0 0 0 0 0 0 0 0 0 0 C 0',
             'C 1 C 1 1 C 1 C 1 2 1 2',
             '2 0 2 0 2 0 2 0 2 0 1 0',
             '0 1 1 C 1 1 C 1 1 C 1 2',
             '2 0 2 0 2 0 2 0 2 0 2 0',
             '1 C 1 1 C 1 1 C 1 1 1 Z']
levels[3] = ['Ring',
             '0 0 0 0 0 0 0 0 0 0 0 0',
             '0 1 1 1 1 2 2 1 1 1 1 0',
             '0 1 7 0 0 0 0 0 0 A 1 0',
             '0 1 0 0 0 0 0 0 0 0 1 0',
             '0 1 0 0 G 2 2 G 0 0 1 0',
             '0 1 0 0 0 0 0 0 0 0 1 0',
             '0 1 0 0 0 0 0 0 0 0 1 0',
             '0 1 0 0 1 E E 1 0 0 1 0',
             '0 1 3 3 1 C C 1 6 6 1 0',
             '0 1 3 3 G C C G 6 6 1 0',
             '0 1 1 1 1 1 1 1 1 1 1 0',
             '0 0 0 0 F B D F 0 0 0 Z']
levels[4] = ['Bank Shot',
             'C C C 0 0 0 0 0 0 C C C',
             'C C G 0 0 0 0 0 0 G C C',
             'C 4 0 0 0 1 1 0 0 0 2 C',
             '4 4 0 0 1 5 5 1 0 0 2 2',
             '4 0 0 0 1 5 5 1 0 0 0 2',
             '4 0 0 8 1 5 5 1 D 0 0 2',
             '4 0 0 1 1 1 E 1 1 0 0 2',
             '0 0 0 1 G 0 0 B 1 9 0 0',
             '0 0 1 0 0 0 0 0 0 1 0 0',
             '0 1 0 0 0 0 0 0 0 G 1 0',
             '0 1 0 0 0 0 0 0 0 0 1 0',
             '0 4 0 0 0 0 0 0 0 0 1 Z']
levels[5] = ['Locked Vault',
             '1 1 1 1 1 1 0 0 2 4 5 D',
             '0 0 0 0 1 G 0 8 2 4 5 5',
             '0 0 0 0 1 G 0 0 2 B 4 4',
             'C C C C 1 1 0 0 2 2 2 2',
             '0 G G 0 E 0 0 0 0 9 0 0',
             '0 G G 0 1 0 0 0 0 0 0 0',
             '0 G G 0 1 0 0 0 0 0 0 0',
             '0 G G 0 E 0 0 0 0 0 0 0',
             'C C C C 1 1 0 0 1 0 1 0',
             '0 0 0 0 1 G 0 0 0 0 0 0',
             '0 0 0 0 1 G 0 0 0 0 0 0',
             '1 1 1 1 1 1 0 0 0 0 0 Z']
levels[6] = ['Quicksand',
             'G 2 0 0 0 0 0 0 0 0 2 G',
             '2 0 0 0 0 2 2 0 0 0 0 2',
             '0 0 0 0 4 C C 3 0 0 0 0',
             '0 0 0 4 3 0 0 4 3 0 0 0',
             '0 0 7 0 C C C C 0 8 0 0',
             '0 C C 0 C G G C 0 C C 0',
             '0 C C 0 C G G C 0 C C 0',
             '0 0 8 0 C C C C 0 7 0 0',
             '0 0 0 3 4 0 0 3 4 0 0 0',
             '0 0 0 0 3 C C 4 0 0 0 0',
             '2 0 0 0 0 2 2 0 0 0 0 2',
             'G 2 0 0 0 0 0 0 0 0 2 Z']
levels[7] = ['Brackets',
             '2 2 0 0 0 4 0 0 0 2 2 0',
             '2 0 0 0 4 4 4 0 0 0 2 0',
             '0 0 0 0 4 F 4 0 0 0 0 0',
             '0 7 3 3 4 4 4 3 3 7 0 0',
             '0 3 C C 3 4 3 C C 3 0 0',
             '0 G C C 3 G 3 C C G 0 0',
             '0 3 C C 3 5 3 C C 3 0 0',
             '0 8 3 3 5 5 5 3 3 9 0 0',
             '0 0 0 0 5 F 5 0 0 0 0 0',
             '0 0 0 0 5 5 5 0 0 0 0 0',
             '2 0 0 0 0 5 0 0 0 0 2 0',
             '2 2 0 0 0 0 0 0 0 2 2 Z']
levels[8] = ['Middlewall',
             '2 6 0 0 0 G 0 0 0 0 0 C',
             'F 0 0 0 0 C 0 0 0 0 0 0',
             '2 0 0 0 0 0 0 0 0 1 0 0',
             '1 0 0 0 0 C 0 0 0 2 2 C',
             '2 0 0 0 0 0 0 0 G 2 2 2',
             'F 6 0 0 0 0 0 0 0 2 2 2',
             '2 6 0 0 0 C 0 0 0 1 2 2',
             '2 0 0 A 0 0 0 0 0 0 2 2',
             '2 0 0 0 0 C 0 0 C 0 D 2',
             '1 0 0 0 0 0 0 0 E 0 C 0',
             '2 0 0 0 0 C 0 0 8 B C 0',
             'C 6 9 0 0 G 0 0 C C C Z']
levels[9] = ['ZigZag',
             'C 0 0 3 0 0 F 0 G 0 F 0',
             '1 C 0 0 2 0 0 0 G 0 0 0',
             'C 0 0 3 0 0 0 0 G 0 0 0',
             '1 C 0 0 2 0 G 0 G 0 G 0',
             'C 0 0 3 0 0 G 0 G 0 G 0',
             '1 C 0 0 2 0 G 0 G 0 G 0',
             'C 0 0 3 0 0 G 0 G 0 G 0',
             '1 C 0 0 2 0 G 0 G 0 G 0',
             'C 0 0 3 0 0 G 0 G 0 G 0',
             '1 C 0 0 2 0 G 0 0 0 G 0',
             'C 0 0 3 0 0 G 0 0 0 G 0',
             '1 C 0 0 2 0 7 0 F 0 G Z']
levels[10] = ['Keywall',
              'C 0 0 G G 0 G G G 0 E E',
              'C 0 0 0 D 0 D D 0 0 E E',
              'C 0 0 0 D 0 D D 0 0 E E',
              'C 0 0 0 D 0 D D 0 0 E E',
              'C 0 0 0 D 0 D D 0 0 E E',
              'C 0 0 0 D 0 D D 0 0 E E',
              'C 0 0 0 D 0 D D 0 0 E E',
              'C 0 0 0 D 0 D D 0 0 E E',
              'C 0 0 0 D 0 D D 0 0 E E',
              'C 0 0 0 D 0 D D 0 0 E E',
              'C 0 0 0 D 0 D D 0 0 0 B',
              'C 0 0 G G 0 G G G 0 0 Z']
levels[11] = ['Super Blocks',
              'G F 7 1 C C C 1 A F G B',
              '0 0 0 1 C C C 1 0 0 0 0',
              '0 0 0 1 1 E 1 1 0 0 0 0',
              '0 0 0 G 1 E 1 G 0 0 0 0',
              '0 0 0 0 1 E 1 0 0 0 0 0',
              '0 1 1 0 1 E 1 0 1 1 0 0',
              '0 0 0 0 0 0 0 0 0 0 0 0',
              '0 0 0 0 0 0 0 0 0 0 0 0',
              '0 0 0 0 0 0 0 0 0 0 0 0',
              '0 0 2 2 2 2 2 2 2 2 2 0',
              '0 0 3 3 3 6 6 6 3 3 3 0',
              'D 0 3 D 3 6 D 6 3 D 3 Z']
levels[12] = ['Locksmith',
              '2 0 0 2 1 2 0 2 1 2 0 0',
              '0 1 1 0 1 0 1 0 1 0 1 0',
              '0 G 1 2 0 2 1 0 1 0 1 0',
              '0 8 4 1 2 1 1 0 1 0 1 0',
              '0 6 4 G 1 1 1 0 1 0 1 2',
              '0 6 4 9 5 1 1 0 1 0 1 0',
              '0 6 4 3 5 G 1 2 0 2 1 0',
              '0 6 4 3 5 B 1 1 2 1 2 0',
              '0 6 4 3 5 0 1 C 1 D 2 0',
              '0 6 4 3 5 0 1 C C 1 2 0',
              '0 6 7 3 5 0 1 C C C 1 0',
              'A 6 G 3 G 0 E C C C 1 Z']

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
