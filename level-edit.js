Crafty.scene("edit", function () {
  var activeType = 0;

  window.gameBoard = [];

  Crafty("Brick").destroy();

  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
      gameBoard[12 * j + i] = 0;
    }
  }

  // track whether or not the user is holding the mouse down so we can
  // let mouseHandler paint tiles
  // mouseIsDown can't be locally scoped or the editor breaks if user
  // hits 'e' again to reenter it
  mouseIsDown = false;
  Crafty.addEvent(this, Crafty.stage.elem, "mousedown", function (e) {
    mouseIsDown = true;
  });
  Crafty.addEvent(this, Crafty.stage.elem, "mouseup", function (e) {
    mouseIsDown = false;
  });

  // this function gets called anytime mouse is moved over a block
  // allowing the user to "paint" tiles while they are holding the lmb
  var mouseHandler = function (e) {
    if (e.type === "click" || e.type === "mousedown" || mouseIsDown) {
      var typeName = brickTypeName(activeType);

      Crafty.e("Brick, 2D, Canvas, Mouse, Color, " + typeName)
        .color(brickColors[activeType])
        .attr({w: blockWidth-2, h: blockHeight-2,
               x: this.x, y: this.y})
        .brick(activeType, this.board_pos.x, this.board_pos.y)
        .bind('MouseDown', mouseHandler)
        .bind('MouseOver', mouseHandler);

      gameBoard[this.board_pos.x + 12 * this.board_pos.y] = activeType;

      this.destroy();
    }
  }

  // populate board with gray bricks
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
      Crafty.e("2D, Canvas, Color, Brick, Mouse")
        .color(brickColors[0])
        .attr({w: blockWidth-2, h: blockHeight-2,
               x: (blockWidth)*j+1, y: (blockHeight)*i+1})
        .brick(0, j, i)
        .bind('MouseDown', mouseHandler)
        .bind('MouseOver', mouseHandler);
    }
  }

  // draw the block choices
  for (var brickType = 0; brickType < Object.keys(brickTypes).length; brickType++) {
    var typeName = brickTypeName(brickType);

    color = brickColors[brickType];
    Crafty.e("Brick, 2D, Canvas, Color, Mouse, Collision, " + typeName)
      .color(color)
      .attr({w: blockWidth - 2, h: blockHeight - 2,
             x: blockHeight * (brickType + 1) * 1.05 + 1,
             y: blockHeight * 12 + 1,
             rotation: 90})
      .brick(brickType)
      .collision()
      .bind('Click', function (e) {
        activeType = this.type;
      });
  }

  Crafty.e("2D, DOM, Mouse, Text")
    .attr({x: Crafty.stage.elem.clientWidth - 53,
           y: blockHeight * 12.5,
           h: 100,
           w: 50,
           z: 10})
    .textColor('#FFF')
    .css('text-align', 'center')
    .text('Play!')
    .bind('Click', function (e) {
      if (Modernizr.localstorage) {
        // level editor can't place ball yet so default it to bottom right
        window.gameBoard[window.gameBoard.length-1] = 35;
        localStorage['diamonds-game-custom-level'] = window.gameBoard;
        Crafty.scene('game');
      } else {
        // TODO: Show an error I guess?
        // should have checked this before letting them come to this page
      }
    });
});
