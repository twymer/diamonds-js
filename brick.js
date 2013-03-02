function onBrickHit (ball) {
  if (ball.color() === this.color()) {
    this.destroy();
  }
}

Crafty.c('Brick', {
  init: function () {
  },

  brick: function () {
    return this.attr({
      onHit: onBrickHit
    })
  }
});
