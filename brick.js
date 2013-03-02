function brickIsPaddle (type) {
  console.log(type);
  return (type > 5 && type < 10);
}

function onBrickHit (ball) {
  if (ball.color() === this.color()) {
    this.destroy();
  } else if (brickIsPaddle(this.type)) {
    // shift type down to change to proper color
    ball.color(brickColors[this.type - 4]);
  }
}

Crafty.c('Brick', {
  init: function () {
  },

  brick: function (type) {
    this.type = type;

    return this.attr({
      onHit: onBrickHit
    })
  }
});
