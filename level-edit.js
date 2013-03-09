Crafty.scene("edit", function () {
  var activeType = 0;

  window.gameBoard = [];

  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
      gameBoard[12 * j + i] = 0;
    }
  }

  var clickHandler = function () {
    var typeName = '';
    // TODO: need to redo the way brick types are handled, hacking this for now
    // when brick sprites are in one file I can hit them by index too so wouldn't
    // need this
    for (var k = 0; k < Object.keys(brickTypes).length; k++) {
      if (brickTypes[Object.keys(brickTypes)[k]] === activeType) {
        typeName = Object.keys(brickTypes)[k];
        break;
      }
    }
    Crafty.e("Brick, 2D, Canvas, Mouse, Color, " + typeName)
      .color(brickColors[activeType])
      .attr({w: blockWidth-2, h: blockHeight-2,
             x: this.x, y: this.y})
      .brick(activeType, this.board_pos.x, this.board_pos.y)
      .bind('Click', clickHandler);

    gameBoard[this.board_pos.x + 12 * this.board_pos.y] = activeType;

    this.destroy();
  }

  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
      Crafty.e("2D, Canvas, Color, Brick, Mouse")
        .color(brickColors[0])
        .attr({w: blockWidth-2, h: blockHeight-2,
               x: (blockWidth)*j+1, y: (blockHeight)*i+1})
        .brick(0, j, i)
        .bind('Click', clickHandler);
    }
  }

  for (var brickType = 0; brickType < Object.keys(brickTypes).length; brickType++) {
    var typeName = '';
    // TODO: need to redo the way brick types are handled, hacking this for now
    // when brick sprites are in one file I can hit them by index too so wouldn't
    // need this
    for (var k = 0; k < Object.keys(brickTypes).length; k++) {
      if (brickTypes[Object.keys(brickTypes)[k]] === brickType) {
        typeName = Object.keys(brickTypes)[k];
        break;
      }
    }

    color = brickColors[brickType];
    Crafty.e("Brick, 2D, Canvas, Color, Mouse, Collision, " + typeName)
      .color(color)
      .attr({w: blockWidth - 2, h: blockHeight - 2,
             x: blockHeight * brickType * 1.2 + blockHeight * 1.2 + 1,
             y: blockHeight * 12 + 1,
             rotation: 90})
      .brick(brickType)
      .collision()
      .bind('Click', function (e) {
        activeType = this.type;
      });
  }

  Crafty.e("2D, DOM, Mouse, Text")
    .attr({x: blockHeight * 1.2 * 13,
           y: blockHeight * 12.5,
           h: 100,
           w: 100,
           z: 10})
    .textColor('#FFF')
    .css('text-align', 'center')
    .text('Play it!')
    .bind('Click', function (e) {
      if (Modernizr.localstorage) {
        // level editor can't place ball yet so default it to bottom right
        window.gameBoard[window.gameBoard.length-1] = 15;
        localStorage['diamonds-game-custom-level'] = window.gameBoard;
        Crafty.scene('game');
      } else {
        // TODO: Show an error I guess?
        // should have checked this before letting them come to this page
      }

      // Crafty storage has been broken for a while..
      // Crafty.storage.open("diamonds-game");
      // Crafty.storage.save("custom-level", "save", window.gameBoard);
    });
});
