function createLevel () {
  // This will eventually be packed up better or read from file
  levelOne = [
    'C 0 0 0 0 4 4 0 0 0 0 C',
    'A 0 0 0 A 3 3 A 0 0 0 A',
    '0 0 0 B 3 3 3 3 B 0 0 0',
    '0 8 B 2 2 2 2 2 2 B 6 0',
    '0 A 1 1 0 0 0 0 1 1 A 0',
    '0 F 0 0 0 B B 0 0 0 0 0',
    '0 0 0 0 0 B B 0 0 0 0 0',
    '0 A 1 1 0 0 0 0 1 1 A 0',
    '0 7 B 3 3 3 3 3 3 B 9 0',
    '0 0 0 B 2 2 2 2 B 0 0 0',
    'A 0 0 0 A 2 2 A 0 0 0 A',
    'C 0 0 0 0 5 5 0 0 0 0 C']

  for (var i = 0; i < levelOne.length; i++) {
    bricks = levelOne[i].split(' ');
    for (var j = 0; j < bricks.length; j++) {
      brickType = parseInt(bricks[j], 16);

      // If it's the ball, add it and continue as normal
      if (brickType === 15) {
        game.addBall(j, i);
        brickType = 0;
      }

      color = brickColors[brickType];
      if (brickType === 0) {
        // Currently just drawing blank blocks to keep the grid appearance.
        // This will eventually be an image based backgrond.
        Crafty.e("2D, Canvas, Color")
          .color(color)
          .attr({w: blockWidth-2, h: blockHeight-2, x: (blockWidth)*j+1, y: (blockHeight)*i+1});
      } else {
        var typeName = ''
        // TODO: need to redo the way brick types are handled, hacking this for now
        // when brick sprites are in one file I can hit them by index too so wouldn't
        // need this
        for (var k = 0; k < Object.keys(brickTypes).length; k++) {
          if (brickTypes[Object.keys(brickTypes)[k]] === brickType) {
            typeName = Object.keys(brickTypes)[k];
            break;
          }
        }

        Crafty.e("Brick, 2D, Canvas, Color, " + typeName)
          .color(color)
          .attr({w: blockWidth-2, h: blockHeight-2, x: (blockWidth)*j+1, y: (blockHeight)*i+1})
          .brick(brickType);
      }
    }
  }
}
