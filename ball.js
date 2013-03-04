Crafty.c('Ball', {
  checkBrickCollision: function () {
    var hit = this.hit('Brick')[0];

    if (!hit) {
      return;
    }

    var brick = hit.obj;

    brick.onHit(this);

    var dy = brick.y - this.y;
    if (this.centerY < brick.centerY) {
      dy -= this.h;
    } else {
      dy += brick.h;
    }

    this.prevY = this.y;
    this.vel.y *= -1;
  },

  checkOutOfBounds: function () {
    if (this.y < 0 || this.y + ballSize > maxVerticalBlocks * blockHeight) {
      this.y = this.prevY;
      this.vel.y *= -1;
    }
  },

  enterFrame: function () {
    this.prevY = this.y;

    this.y += this.vel.y;

    this.checkBrickCollision();
    this.checkOutOfBounds();
  },

  init: function () {
    this.requires('Ball, 2D, Canvas, Color, Collision, Edges');
  },

  ball: function () {
    this.speed = 4;

    return this.attr({
      vel: {
        x: this.speed,
        y: this.speed
      }
    })
    .bind('EnterFrame', this.enterFrame)
    .bind('Moved', function (from) {
      brick = this.hit('Brick')[0];
      if (brick || this.x < 0 || this.x + ballSize > maxHorizontalBlocks * blockWidth) {
        if (brick) {
          brick.obj.onHit(this);
        }
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
