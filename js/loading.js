function defineSprites() {
  Crafty.sprite(50, 30, "img/diamond.png", {
    diamond: [0, 0]
  });
  Crafty.sprite(50, 30, "img/death.png", {
    death: [0, 0]
  });
  Crafty.sprite(50, 30, "img/blueBrush.png", {
    blueBrush: [0, 0]
  });
  Crafty.sprite(50, 30, "img/greenBrush.png", {
    greenBrush: [0, 0]
  });
  Crafty.sprite(50, 30, "img/brownBrush.png", {
    brownBrush: [0, 0]
  });
  Crafty.sprite(50, 30, "img/pinkBrush.png", {
    pinkBrush: [0, 0]
  });
  Crafty.sprite(50, 30, "img/orangeBrush.png", {
    orangeBrush: [0, 0]
  });
  Crafty.sprite(50, 30, "img/key.png", {
    key: [0, 0]
  });
  Crafty.sprite(50, 30, "img/lock.png", {
    lock: [0, 0]
  });
  Crafty.sprite(50, 30, "img/reverse.png", {
    reverse: [0, 0]
  });
}

Crafty.scene("loading", function () {
  Crafty.load(['img/diamond.png', 'img/ltblue.png', 'img/death.png',
               'img/blueBrush.png', 'img/brownBrush.png', 'img/pinkBrush.png',
               'img/greenBrush.png', 'img/orangeBrush.png',
               'img/reverse.png', 'img/key.png', 'img/lock.png'], function () {
    Crafty.scene("game");
  });
});
