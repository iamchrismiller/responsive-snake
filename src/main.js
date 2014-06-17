/*global $, require*/

//Game Container
var GameContainer = require('./GameContainer');

//Snake Game
var SnakeGame = require('./SnakeGame');

/**
 * Attach ResponsiveSnake Game To Window
 * @type {{game: GameContainer, start: start, bindEvents: bindEvents}}
 */
var ResponsiveSnake = {
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
    ResponsiveSnake.game.start();
    ResponsiveSnake.bindEvents();
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

window.ResponsiveSnake = ResponsiveSnake;
