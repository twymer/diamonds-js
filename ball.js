Crafty.c('Ball', {
  _checkBrickCollision: function () {
    var hit = this.hit('Brick')[0];

    if (!hit) {
      return;
    }

    var brick = hit.obj;

    var dy = brick.y - this.y;
    if (this.centerY < brick.centerY) {
      dy -= this.h;
    } else {
      dy += brick.h;
    }

    this.prevY = this.y;
    this.vel.y *= -1;
  },

  _checkOutOfBounds: function () {
    if (this.y < 0 || this.y + ballSize > maxVerticalBlocks * blockHeight) {
      this.y = this.prevY;
      this.vel.y *= -1;
    }
  },

  _enterFrame: function () {
    this.prevY = this.y;

    this.y += this.vel.y;

    this._checkBrickCollision();
    this._checkOutOfBounds();
  },

  init: function () {
    this.requires('Ball, 2D, Canvas, Color, Collision, Edges');
  },

  ball: function () {
    this.speed = 170 / 60;

    return this.attr({
      vel: {
        x: this.speed,
        y: this.speed
      }
    })
    .bind('EnterFrame', this._enterFrame)
    .bind('Moved', function (from) {
      if (this.hit('Brick') || this.x < 0 || this.x + ballSize > maxHorizontalBlocks * blockWidth) {
        this.attr({x: from.x});
      }
    });
  }
});

Crafty.c("BallControls", {
  init: function () {
    this.requires('Multiway');
  },

  ballControls: function () {
    this.multiway(170/60, {RIGHT_ARROW: 0, LEFT_ARROW: 180});
    return this;
  }
});
