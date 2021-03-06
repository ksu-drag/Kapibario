// 1) do not go beyond the edges of the zone
// 2) made a normal functionalaty of kapibara
//    - jump up 
//    - jump forward
//    -  gravity 
//    - and rotation
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let callCollege;
const kapiPos = {
  x: canvas.width / 7,
  y: canvas.height / 2 -50,
  speed: 5,
  size: 70,
  jump: 70
};
let firstPart = false;
let leftPressed = false;
let rightPressed = false;
let jumpPressed = false;
let jumpCount = 0;
let jumpLength = 51;
let jumpHeight = 0;
let kapibaraDirection;
let x = canvas.width / 2;
let y = canvas.height - 35;
let playerHeight = kapiPos.size;
let playerWidth = kapiPos.size;
let paddleX = kapiPos.x;
const game = { req: 0, req2: 0 };
game.req = requestAnimationFrame(kapibaraDraw);
game.req2 = requestAnimationFrame(drawTurt);

document.addEventListener("keydown", keyRightHandler, false);
document.addEventListener("keyup", keyLeftHandler, false);
function keyRightHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
    kapibaraDirection = true;
  }
  if (e.keyCode == 37) {
    leftPressed = true;
    kapibaraDirection = false;
  }
  if (e.keyCode == 38) {
    jumpPressed = true;
  }
}

function keyLeftHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  }
  if (e.keyCode == 37) {
    leftPressed = false;
  }
}

function kapibaraDraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  kapiEarth();
  kapiWater();
  if(callCollege === true) setTimeout(buttonAngel(),100);
  if(paddleX > 1200){
    setTimeout(drawTurt(),900);
  }

 
  /////////////////////// BODY
  ctx.beginPath();
  ctx.fillStyle = "Sienna";
  ctx.ellipse(
    paddleX,
    kapiPos.y - playerHeight - kapiPos.size - jumpHeight + 130,
    30,
    50,
    80,
    0,
    Math.PI * 2
  );
  ctx.fill();
  /////////////////////// HEAD
  ctx.beginPath();
  if (!kapibaraDirection) {
    ctx.ellipse(
      paddleX - 48,
      kapiPos.y - kapiPos.size - jumpHeight + 10,
      20,
      30,
      80,
      0,
      Math.PI * 2
    );
    ctx.rect(paddleX - 48, kapiPos.y - kapiPos.size - jumpHeight + 10, 30, 45);
  } else if (kapibaraDirection) {
    ctx.ellipse(
      paddleX + 48,
      kapiPos.y - kapiPos.size - jumpHeight + 10,
      20,
      30,
      80,
      0,
      Math.PI * 2
    );
    ctx.rect(paddleX + 20, kapiPos.y - kapiPos.size - jumpHeight + 10, 30, 45);
  }
  ctx.fill();
  //////////////////// TAIL
  ctx.beginPath();
  ctx.strokeStyle = "Sienna";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  if (!kapibaraDirection) {
    ctx.moveTo(paddleX + 30, kapiPos.y - kapiPos.size - jumpHeight + 60);
    ctx.lineTo(paddleX + 60, kapiPos.y - kapiPos.size - jumpHeight + 30);
  } else if (kapibaraDirection) {
    ctx.moveTo(paddleX - 30, kapiPos.y - kapiPos.size - jumpHeight + 60);
    ctx.lineTo(paddleX - 60, kapiPos.y - kapiPos.size - jumpHeight + 30);
  }
  ctx.stroke();
  /////////////////// EYES
  ctx.beginPath();
  ctx.fillStyle = "black";
  if (!kapibaraDirection) {
    ctx.arc(
      paddleX - 50,
      kapiPos.y - kapiPos.size - jumpHeight + 10,
      5,
      0,
      Math.PI * 2
    );
  } else if (kapibaraDirection) {
    ctx.arc(
      paddleX + 50,
      kapiPos.y - kapiPos.size - jumpHeight + 10,
      5,
      0,
      Math.PI * 2
    );
  }
  ctx.fill();
  ///////////////////  EARS
  ctx.beginPath();
  ctx.fillStyle = "Sienna";
  if (!kapibaraDirection) {
    ctx.ellipse(
      paddleX - 30,
      kapiPos.y - kapiPos.size - jumpHeight - 10,
      7,
      4,
      80,
      0,
      Math.PI * 2
    );
    ctx.ellipse(
      paddleX - 40,
      kapiPos.y - kapiPos.size - jumpHeight - 13,
      7,
      4,
      80,
      0,
      Math.PI * 2
    );
  } else if (kapibaraDirection) {
    ctx.ellipse(
      paddleX + 30,
      kapiPos.y - kapiPos.size - jumpHeight - 10,
      7,
      4,
      80,
      0,
      Math.PI * 2
    );
    ctx.ellipse(
      paddleX + 40,
      kapiPos.y - kapiPos.size - jumpHeight - 13,
      7,
      4,
      80,
      0,
      Math.PI * 2
    );
  }
  ctx.fill();
  ////////////////////// FEET
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.moveTo(paddleX - 30, kapiPos.y - kapiPos.size - jumpHeight + 60);
  ctx.lineTo(paddleX - 40, kapiPos.y - kapiPos.size - jumpHeight + 115);
  ctx.moveTo(paddleX + 20, kapiPos.y - kapiPos.size - jumpHeight + 60);
  ctx.lineTo(paddleX + 30, kapiPos.y - kapiPos.size - jumpHeight + 115);
  ctx.stroke();
  ////////////////////
  game.req = requestAnimationFrame(kapibaraDraw);
}
function draw() {
function update (){
  window.location.reload();
}// 1160, 605
if (paddleX > 640 && paddleX < 860 && !jumpPressed && kapiPos.y <850){
  kapiPos.y += 10;
  setTimeout(update,900);
}

  if (paddleX >= 300 && kapiPos.y <= 600) {
    kapiPos.y += 5;
  }else if (leftPressed && paddleX > 0 && paddleX < 350 && kapiPos.y <= 400) {
    paddleX -= 7;
  }
  if (leftPressed && paddleX<= 376 && jumpPressed && kapiPos.y <= 605 && paddleX >0){
    kapiPos.y = canvas.height/2- kapiPos.size +20;
  }else if(leftPressed && kapiPos.y >= 600 && paddleX >= 380 && kapiPos.y<=700 ){
    paddleX -= 7;
  }
  if(paddleX >= 1000 && kapiPos.y <= 605 && paddleX <1500 && jumpPressed){
    kapiPos.y = canvas.height/2- kapiPos.size +30;
    paddleX = 1300;
    jumpCount = 0;
    callCollege = true;

  }else if(rightPressed && kapiPos.y >= 600 && paddleX <= 1110 && kapiPos.y <=700){
    paddleX +=7;
  }else if (rightPressed && paddleX < canvas.width - playerWidth && kapiPos.y<=605&& paddleX <1130) {
    paddleX += 7;
  }
  if (leftPressed && paddleX > 0 && paddleX < 350 && kapiPos.y <= 450) {
    paddleX -= 7;
  }else if(leftPressed && kapiPos.y > 450 && paddleX >= 350 && kapiPos.y<=700){
    paddleX -= 7;
  }
  if (jumpPressed) {
    jumpCount++;
    jumpHeight = 4.5 * jumpLength * Math.sin((Math.PI * jumpCount) / jumpLength);
  }
  if (jumpCount > jumpLength) {
      jumpCount = 0;
      jumpPressed = false;
      jumpHeight = 0;
  }
 
  kapibaraDraw();
  kapiEarth();
  kapiWater();
}
setInterval(draw, 10);

function kapiEarth() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 450, 300, 600);
  ctx.fillRect(300, 650, 300, 300);
  ctx.fillRect(1500, 300, 300, 600);
  ctx.fillRect(1200, 450, 300, 500);
  ctx.fillRect(900, 650, 300, 300);
}

function kapiWater() {
  ctx.fillStyle = "rgba(55, 200, 200, 0.5)";
  ctx.fillRect(600, 700, 300, 200);
}

function drawTurt (){
  const tort = document.querySelector('img');
  tort.style.display = 'none';
  ctx.drawImage(tort, 1600, 150,150, 150);
} 


function buttonAngel (){
  ctx.beginPath();
  ctx.font = 'italic 30px Noto Sans Japanese'
  const text = "Go to College";
  ctx.fillStyle = "grey";
  ctx.font = 'italic 30px Noto Sans Japanese'
  ctx.fillText(text, 1390, 370, 100);
  ctx.lineWidth = 5;
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.strokeStyle ="grey";
  ctx.fillStyle = "lightpink"; 
  ctx.rect(1385, 330, 110, 60);
  ctx.stroke();
  ctx.closePath();
};