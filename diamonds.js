window.onload = function () {
  blockScale = 10;
  blockHeight = 3 * blockScale;
  blockWidth = 5 * blockScale;
  maxVerticalBlocks = 12;
  maxHorizontalBlocks = 12;

  ballSize = 14;

  Crafty.init(12 * blockWidth, 12 * blockHeight);

  // Will be needed later maybe, currently just serving as a reference
  //var brickType = {
    //empty: 0,
    //ltblue: 1,
    //blue: 2,
    //green: 3,
    //brown: 4,
    //pink: 5,
    //bluePaddle: 6,
    //greenPaddle: 7,
    //brownPaddle: 8,
    //pinkPaddle: 9,
    //wall: 10,
    //diamond: 11,
    //death: 12 }

  var brickColors = [
    "#333",
    "#2f9cfb",
    "#0002c0",
    "#06a407",
    "#663200",
    "#9e00c4",
    "#ff0000",
    "#ff0000",
    "#ff0000",
    "#ff0000",
    "#767776",
    "#32fd97",
    "#fdfdfd"]

  function createLevel () {
    // This will eventually be packed up better or read from
    // file and sent by server.
    levelOne = [
      'C 0 0 0 0 4 4 0 0 0 0 C',
      'A 0 0 0 A 3 3 A 0 0 0 A',
      '0 0 0 B 3 3 3 3 B 0 0 0',
      '0 8 B 2 2 2 2 2 2 B 8 0',
      '0 A 1 1 0 0 0 0 1 1 A 0',
      '0 0 0 0 0 B B 0 0 0 0 0',
      '0 0 0 0 0 B B 0 0 0 0 0',
      '0 A 1 1 0 0 0 0 1 1 A 0',
      '0 8 B 3 3 3 3 3 3 B 8 0',
      '0 0 0 B 2 2 2 2 B 0 0 0',
      'A 0 0 0 A 2 2 A 0 0 0 A',
      'C 0 0 0 0 5 5 0 0 0 0 C']

    for (var i = 0; i < levelOne.length; i++) {
      bricks = levelOne[i].split(' ');
      for (var j = 0; j < bricks.length; j++) {
        color = brickColors[parseInt(bricks[j], 16)];
        if (bricks[j] != '0') {
          Crafty.e("Brick, 2D, Canvas, Color")
            .color(color)
            .attr({w: blockWidth-2, h: blockHeight-2, x: (blockWidth)*j+1, y: (blockHeight)*i+1});
        } else {
          // Currently just drawing blank blocks to keep the grid appearance.
          // This will eventually be an image based backgrond.
          Crafty.e("2D, Canvas, Color")
            .color(color)
            .attr({w: blockWidth-2, h: blockHeight-2, x: (blockWidth)*j+1, y: (blockHeight)*i+1});
        }
      }
    }
  }

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

  Crafty.scene("main", function () {
    Crafty.background("#222");

    createLevel();
    Crafty.e("Ball, 2D, Canvas, Color, Collision, Edges, BallControls")
      .color("#fff")
      .ballControls(1)
      .attr({w: ballSize, h: ballSize, x: 3*blockWidth, y: 1*blockHeight})
      .ball();
  });



  Crafty.scene("main");
};
