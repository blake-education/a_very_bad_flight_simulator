(function() {
  var Game, KEYCODE_A, KEYCODE_D, KEYCODE_LEFT, KEYCODE_RIGHT, KEYCODE_SPACE, KEYCODE_UP, KEYCODE_W, Player, spriteData, widths;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  console.log("app cawfee");
  widths = [29, 32, 29, 31, 31];
  spriteData = {
    images: ["images/mario.png"],
    frames: {
      width: 30,
      height: 16,
      count: 10
    },
    animations: {
      run: {
        frames: [6, 7, 8],
        next: true
      }
    }
  };
  console.log("sd", spriteData.frames);
  Player = (function() {
    function Player() {
      this.spriteSheet = new SpriteSheet(spriteData);
      this.anim = new BitmapAnimation(this.spriteSheet);
      this.anim.gotoAndPlay('run');
    }
    Player.prototype.addChildren = function(stage) {
      return stage.addChild(this.anim);
    };
    return Player;
  })();
  KEYCODE_SPACE = 32;
  KEYCODE_UP = 38;
  KEYCODE_LEFT = 37;
  KEYCODE_RIGHT = 39;
  KEYCODE_W = 87;
  KEYCODE_A = 65;
  KEYCODE_D = 68;
  Game = (function() {
    function Game(stage) {
      var scoreField;
      this.stage = stage;
      this.handleKeyUp = __bind(this.handleKeyUp, this);
      this.handleKeyDown = __bind(this.handleKeyDown, this);
      scoreField = new Text("Hello again", "bold 12px Arial", "#FF0000");
      scoreField.x = 300;
      scoreField.y = 300;
      scoreField.text = "Hello cruel World";
      this.stage.addChild(scoreField);
      this.player = new Player;
      this.player.addChildren(this.stage);
      document.onkeydown = this.handleKeyDown;
      document.onkeyup = this.handleKeyUp;
    }
    Game.prototype.handleKeyDown = function(e) {
      e || (e = window.event);
      switch (e.keyCode) {
        case KEYCODE_SPACE:
          return this.jumpHeld = true;
      }
    };
    Game.prototype.handleKeyUp = function(e) {
      e || (e = window.event);
      switch (e.keyCode) {
        case KEYCODE_SPACE:
          return this.jumpHeld = false;
      }
    };
    Game.prototype.tick = function() {
      console.log("jumping", this.jumpHeld);
      return this.stage.update();
    };
    return Game;
  })();
  $(function() {
    var canvas, game, stage;
    console.log("app cawfee");
    canvas = document.getElementById("testCanvas");
    console.log("c", canvas);
    stage = new Stage(canvas);
    game = new Game(stage);
    Ticker.setFPS(10);
    return Ticker.addListener(game);
  });
}).call(this);
