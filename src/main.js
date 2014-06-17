/*global $, require*/

//Game Container
var GameContainer = require('./GameContainer');

//Snake Game
var SnakeGame = require('./SnakeGame');


var snakeApp = {
  /**
   * Initialize a new Game
   */
  game : new GameContainer({
    canvas : "#canvas",
    inst : new SnakeGame("#canvas"),
    explosion : true
  }),

  /**
   * Start Game and Bind Window Events
   */
  start : function () {
    snakeApp.game.start();
    snakeApp.bindEvents();
  },

  /**
   * Bind Window Events
   */
  bindEvents : function () {
    if (this.game.started) {
      //Pause Game on Window Blur
      $(window)
        .focus(this.game.play.bind(this.game))
        .blur(this.game.pause.bind(this.game));
    }
  }
};

//On Document Ready PreLoad Images
$(document).ready(snakeApp.start);