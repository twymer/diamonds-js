Crafty.c('Ball', {
  checkBrickCollision: function () {
    var hit = this.hit('Brick')[0];

    if (!hit) {
      return;
    }

    var brick = hit.obj;

    ballLeft = this.x;
    ballRight = this.x + this.w;
    ballTop = this.y;
    ballBottom = this.y + this.h;

    oldBallLeft = this.prevX;
    oldBallRight = this.prevX + this.w;
    oldBallTop = this.prevY;
    oldBallBottom = this.prevY + this.h;

    brickLeft = brick.x;
    brickRight = brick.x + brick.w;
    brickTop = brick.y;
    brickBottom = brick.y + brick.h;

    var biggestCollision = 0;
    var horizontalHit = false;
    if (ballRight > brickLeft && ballLeft < brickLeft) { // from left
      if (oldBallRight < brickLeft) {
        horizontalHit = true;
        this.x = this.prevX;
        this.triggerBounce(1);
      }
    }
    if (ballLeft < brickRight && ballRight > brickRight) { // from right
      if (oldBallLeft > brickRight) {
        horizontalHit = true;
        this.x = this.prevX;
        this.triggerBounce(-1);
      }
    }
    if (!horizontalHit) {
      this.y = this.prevY;
      this.vel.y *= -1;
    }

    // Do brick hit last so that the bounce timer is activated
    // before we attempt to destroy it and the ball
    brick.onHit(this);
  },

  checkOutOfBounds: function () {
    if (this.y < 0 || this.y + this.h > maxVerticalBlocks * blockHeight) {
      this.y = this.prevY;
      this.vel.y *= -1;
    }

    if (this.x < 0) {
      this.x = this.prevX;
      this.triggerBounce(-1);
    } else if (this.x + this.w > maxHorizontalBlocks * blockWidth) {
      this.x = this.prevX;
      this.triggerBounce(1);
    }
  },

  enterFrame: function () {
    // cancel movements if ball isn't active yet
    if (!this.active) { return; }

    this.prevX = this.x;
    this.prevY = this.y;

    this.y += this.vel.y;
    // check brick collision seperate for y and x movements
    // to prevent order issues
    this.checkBrickCollision();

    if (this.bounceDir !== 0) {
      this.x += this.vel.x * this.bounceDir;
      this.checkBrickCollision();
    } else if (this.targetX !== null) {
      var distance = this.x - this.targetX;

      if (Math.abs(distance) > 5) {
        this.x += this.vel.x * ((distance > 0) ? -1 : 1);
        this.checkBrickCollision();
      }
    }

    this.checkOutOfBounds();
  },

  init: function () {
    this.requires('Ball, 2D, Canvas, Color, Collision, Edges');

    // on destroy, make sure the timer is turned off
    this.bind('Remove', function () {
      if (this.bounceTimer) {
        clearInterval(this.bounceTimer);
      }
    });
  },

  triggerBounce: function (previousDir) {
    this.multiway().disableControl();
    this.bounceDir = previousDir * -1;
    var self = this;
    this.bounceTimer = setTimeout(function () {
                         self.bounceDir = 0;
                         self.ballControls(game.reversed);
    }, 60);
  },

  setActive: function () {
    this.active = true;
    this.ballControls();
  },

  ball: function () {
    return this.attr({
      targetX: null,
      bounceDir: 0,
      active: false,
      vel: {
        x: Crafty.mobile ? 3 : 5,
        y: Crafty.mobile ? 3 : 5
      }
    })
    .bind('EnterFrame', this.enterFrame)
    .bind('Moved', function (from) {
      // check on moved event from multiway
      this.checkBrickCollision();
    });
  }
});

Crafty.c("BallControls", {
  init: function () {
    this.requires('Multiway');
  },

  ballControls: function (isReversed) {
    if (!isReversed) {
      this.multiway(this.vel.x, {RIGHT_ARROW: 0, LEFT_ARROW: 180}).enableControl();
    } else {
      this.multiway(this.vel.x, {RIGHT_ARROW: 180, LEFT_ARROW: 0}).enableControl();
    }

    return this;
  }
});
