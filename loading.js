function defineSprites() {
  Crafty.sprite(50, 30, "assets/diamond.png", {
    diamond: [0, 0]
  });
  Crafty.sprite(50, 30, "assets/death.png", {
    death: [0, 0]
  });
  Crafty.sprite(50, 30, "assets/bluePaddle.png", {
    bluePaddle: [0, 0]
  });
  Crafty.sprite(50, 30, "assets/greenPaddle.png", {
    greenPaddle: [0, 0]
  });
  Crafty.sprite(50, 30, "assets/brownPaddle.png", {
    brownPaddle: [0, 0]
  });
  Crafty.sprite(50, 30, "assets/pinkPaddle.png", {
    pinkPaddle: [0, 0]
  });
}

Crafty.scene("loading", function () {
  Crafty.load(['assets/diamond.png', 'assets/ltblue.png', 'assets/death.png',
               'assets/bluePaddle.png', 'assets/brownPaddle.png', 'assets/pinkPaddle.png',
               'assets/greenPaddle.png'], function () {
    Crafty.scene("game");
  });
});
