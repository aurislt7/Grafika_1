var ctx    = canvas.getContext('2d');
var width  = canvas.width; // size
var center = width/2;      // center

let iterations = 0

function iterate(){
  iterations++;
}

function restart(){
  ctx.fillStyle = "black"
  iterations=0;
}

function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.resetTransform();
    ctx.clearRect(0, 0, 500, 500);
    // Draw border
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(500, 0);
    ctx.lineTo(500, 500);
    ctx.lineTo(0, 500);
    ctx.closePath();
    ctx.stroke();
    // step = 5
    drawF(iterations);
  }
  // Recursive draw
  function drawF(step) {
    if (step > 0) {
      step--;
      if (step == iterations - 1) ctx.fillStyle = "magenta";
      ctx.save();
      if (step == iterations - 1) ctx.fillStyle = "green";
      ctx.save();
      if (step == iterations - 1) ctx.fillStyle = "blue";
      ctx.save();
      if (step == iterations - 1) ctx.fillStyle = "red";

      ctx.transform(0.5, 0, 0, 0.5, 0, 0);
      drawF(step);
      ctx.restore();
      ctx.transform(0.5, 0, 0, -0.5, 250, 250);
      drawF(step);
      ctx.restore();
      ctx.transform(0, 0.5, 0.5, 0, 250, 250);
      drawF(step);
      ctx.restore();
      ctx.transform(0, -0.25, 0.25, 0, 125, 375);
      drawF(step);
    } else drawT();
  }

  function drawT() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 250);
    ctx.lineTo(250, 500);
    ctx.lineTo(500, 500);
    ctx.lineTo(500, 0);
    ctx.lineTo(0, 0);
    ctx.fill();
  }
}
