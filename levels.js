function levelOne () {
  // This will eventually be packed up better or read from file
  levelOne = [
    'C 0 0 0 0 4 4 0 0 0 0 C',
    'A 0 0 0 A 3 3 A 0 0 0 A',
    '0 0 0 B 3 3 3 3 B 0 0 0',
    '0 8 B 2 2 2 2 2 2 B 8 0',
    '0 A 1 1 0 0 0 0 1 1 A 0',
    '0 0 0 0 0 B B 0 0 0 0 0',
    '0 0 0 0 0 B B 0 0 0 0 0',
    '0 A 1 1 0 0 0 0 1 1 A 0',
    '0 8 B 3 3 3 3 3 3 B 8 0',
    '0 0 0 B 2 2 2 2 B 0 0 0',
    'A 0 0 0 A 2 2 A 0 0 0 A',
    'C 0 0 0 0 5 5 0 0 0 0 C']

  for (var i = 0; i < levelOne.length; i++) {
    bricks = levelOne[i].split(' ');
    for (var j = 0; j < bricks.length; j++) {
      brickType = parseInt(bricks[j], 16);
      color = brickColors[brickType];
      if (brickType === 0) {
        // Currently just drawing blank blocks to keep the grid appearance.
        // This will eventually be an image based backgrond.
        Crafty.e("2D, Canvas, Color")
          .color(color)
          .attr({w: blockWidth-2, h: blockHeight-2, x: (blockWidth)*j+1, y: (blockHeight)*i+1});
      } else {
        Crafty.e("Brick, 2D, Canvas, Color")
          .color(color)
          .attr({w: blockWidth-2, h: blockHeight-2, x: (blockWidth)*j+1, y: (blockHeight)*i+1})
          .brick();
      }
    }
  }
}
