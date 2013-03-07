function defineSprites() {
  Crafty.sprite(50, 30, "assets/diamond.png", {
    diamond: [0, 0]
  });
  Crafty.sprite(50, 30, "assets/death.png", {
    death: [0, 0]
  });
  Crafty.sprite(50, 30, "assets/blueBrush.png", {
    blueBrush: [0, 0]
  });
  Crafty.sprite(50, 30, "assets/greenBrush.png", {
    greenBrush: [0, 0]
  });
  Crafty.sprite(50, 30, "assets/brownBrush.png", {
    brownBrush: [0, 0]
  });
  Crafty.sprite(50, 30, "assets/pinkBrush.png", {
    pinkBrush: [0, 0]
  });
}

Crafty.scene("loading", function () {
  Crafty.load(['assets/diamond.png', 'assets/ltblue.png', 'assets/death.png',
               'assets/blueBrush.png', 'assets/brownBrush.png', 'assets/pinkBrush.png',
               'assets/greenBrush.png'], function () {
    Crafty.scene("game");
  });
});
