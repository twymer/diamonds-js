var brickTypes = {
  empty: 0,
  wall: 1,
  ltblue: 2,
  blue: 3,
  green: 4,
  brown: 5,
  pink: 6,
  blueBrush: 7,
  greenBrush: 8,
  brownBrush: 9,
  pinkBrush: 10,
  orangeBrush: 11,
  diamond: 12,
  key: 13,
  lock: 14,
  reverse: 15,
  death: 16 }

var brickColors = [
  "#333333",
  "#767776",
  "#B1C0D2", // 'ltblue'
  "#587498", // 'blue'
  "#FFD800", // 'green'
  "#587058", // 'brown'
  "#E86850", // 'pink'
  "#ff0000", // red makes it easy to spot problems with resources :)
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000", //key
  "#00ff00", //lock
  "#ff00ff", //reverse
  "#ff0000"]

window.onload = function () {
  blockScale = 10;
  blockHeight = 3 * blockScale;
  blockWidth = 5 * blockScale;
  maxVerticalBlocks = 12;
  maxHorizontalBlocks = 12;
  hudSize = 50;

  ballSize = 14;

  // disable craftys mobile magic
  Crafty.mobile = false;

  Crafty.init(12 * blockWidth, 12 * blockHeight + hudSize);

  defineSprites();

  Crafty.scene("loading");
};
