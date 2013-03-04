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
  "#B1C0D2", // 'ltblue'
  "#587498", // 'blue'
  "#FFD800", // 'green'
  "#587058", // 'brown'
  "#E86850", // 'pink'
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

  defineSprites();

  Crafty.scene("loading");
};
