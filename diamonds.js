// Will be needed later maybe, currently just serving as a reference
var brickTypes = {
  empty: 0,
  ltblue: 1,
  blue: 2,
  green: 3,
  brown: 4,
  pink: 5,
  bluePaddle: 6,
  greenPaddle: 7,
  brownPaddle: 8,
  pinkPaddle: 9,
  wall: 10,
  diamond: 11,
  death: 12 }

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

window.onload = function () {
  blockScale = 10;
  blockHeight = 3 * blockScale;
  blockWidth = 5 * blockScale;
  maxVerticalBlocks = 12;
  maxHorizontalBlocks = 12;

  ballSize = 14;

  Crafty.init(12 * blockWidth, 12 * blockHeight);


  Crafty.scene("main", function () {
    Crafty.background("#222");

    levelOne();
    Crafty.e("Ball, 2D, Canvas, Color, Collision, Edges, BallControls")
      .ballControls(1)
      .color(brickColors[brickTypes.ltblue])
      .attr({w: ballSize, h: ballSize, x: 3*blockWidth, y: 1*blockHeight})
      .ball();
  });

  Crafty.scene("main");
};
