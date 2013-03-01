window.onload = function(){
  blockScale = 10;
  blockHeight = 3 * blockScale;
  blockWidth = 5 * blockScale;

  Crafty.init(12 * blockWidth, 12 * blockHeight);

  // Will be needed later maybe, currently just serving as a reference
  //var brickType = {
    //empty: 0,
    //ltblue: 1,
    //blue: 2,
    //green: 3,
    //brown: 4,
    //pink: 5,
    //bluePaddle: 6,
    //greenPaddle: 7,
    //brownPaddle: 8,
    //pinkPaddle: 9,
    //wall: 10,
    //diamond: 11,
    //death: 12 }

  var brickColors = [
    "#333",
    "#2f9cfb",
    "#0002c0",
    "#06a407",
    "#663200",
    "#9e00c4",
    "#ff0000",
    "#ff0000",
    "#ff0000",
    "#ff0000",
    "#767776",
    "#32fd97",
    "#fdfdfd"]

  function createLevel() {
    // This will eventually be packed up better or read from
    // file and sent by server.
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
        color = brickColors[parseInt(bricks[j], 16)];
        Crafty.e("Brick, 2D, Canvas, Color")
          .color(color)
          .attr({w:blockWidth-2, h:blockHeight-2, x:(blockWidth)*j+1, y:(blockHeight)*i+1})
      }
    }
  }

  Crafty.scene("main", function() {
    Crafty.background("#222");

    createLevel();
  });

  Crafty.scene("main");
};
