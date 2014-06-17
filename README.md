# Responsive Snake

A Responsive HTML5 Snake Game with a particle explosion on food impact!


## Requirements

  You must have `Zepto` or `jQuery` attached to the Window Global


## Usage

  You may define a width / height on the canvas tag itself or use the dat attribute `data-full-screen="true"` for fullscreen

## Sample Markup

  ```
  <script src="../build/snake.build.js"></script>

  <canvas id="snake-canvas" autofocus="autofocus" data-full-screen="true"></canvas>

  <div id="scoreboard">
      <div id="score">
          Score :
          <span>0</span>
      </div>

      <div id="hi-score">
          Hi Score :
          <span>0</span>
      </div>

      <div id="bot-hi-score">
          Bot Hi Score :
          <span>0</span>
      </div>
  </div>
  ```

## To View The Example

  `npm install`

  `grunt dev`

  `open http://127.0.0.1:8000/example/`


## Release History

 * 2014-06-17   v0.1.0   Initial Release

---
