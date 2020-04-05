var KEY = {
  UP:38,
  DOWN:40,
  W:87,
  S:83
}
var pingpong = {}
pingpong.pressedKeys = [];
pingpong.ball = {
  speed:5,
  x:150,
  y:100,
  directionX:1,
  directionY:1
}


$(function() {
  //set an interval to call gameloop every 30 milliseconds
  pingpong.timer=setInterval(gameloop, 30);
  //mark which key is down and up and store into array
  "pressedKeys"
  $(document).keydown(function(e) {
    pingpong.pressedKeys[e.which]=true;
  });
  $(document).keyup(function(e) {
    pingpong.pressedKeys[e.which]=false;
  });

});

function gameloop() {
  movePaddles();
  moveBall();
}

function movePaddles() {
  //use the timer to keep chekcing if a key is pressedKeys
  if (pingpong.pressedKeys[KEY.UP]) {
    var top = parseInt($("#paddleB").css("top"));
    $("#paddleB").css("top", top - 5);
  }
  if(pingpong.pressedKeys[KEY.DOWN]) {
    var top = parseInt($("#paddleB").css("top"));
    $("#paddleB").css("top", top + 5);
  }
  if(pingpong.pressedKeys[KEY.W]) {
    var top = parseInt($("#paddleA").css("top"));
    $("#paddleA").css("top", top - 5);
  }
  if(pingpong.pressedKeys[KEY.S]) {
    var top = parseInt($("#paddleA").css("top"));
    $("#paddleA").css("top", top + 5);
  }

}

function moveBall() {
  //define some useful variables
  var playgroundHeight = parseInt($("#playground").height());
  var playgroundWidth = parseInt($("#playground").width());
  var ball = pingpong.ball;

  //check the boundary
  // bottom edge
  if(ball.y + ball.speed*ball.directionY > playgroundHeight) {
    ball.directionY = -1;
  }
  // top edge
  if(ball.y + ball.speed*ball.directionY < 0) {
    ball.directionY = 1;
  }
  //right edge
  if(ball.x + ball.speed*ball.directionX > playgroundWidth) {
    ball.directionX = -1;
  }
  // left edge
  if(ball.x + ball.speed*ball.directionX < 0) {
    ball.directionX = 1;
  }
  ball.x += ball.speed * ball.directionX;
  ball.y += ball.speed * ball.directionY;

  //check the paddle (TODO)


  //move the ball
  $("#ball").css({
    "left":ball.x,
    "top":ball.y
  });

}
