// 1) do not go beyond the edges of the zone
// 2) made a normal functionalaty of kapibara
//    - jump up 
//    - jump forward
//    -  gravity 
//    - and rotation
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const kapiPos = {x: 100, y: canvas.height/2, speed: 5, size: 70, jump: 70};
let leftPressed = false;
let rightPressed = false;
let jumpPressed = false;
let jumpCount = 0;
let jumpLength = 50;
let jumpHeight = 0;
let kapibaraDirection;
// let x = canvas.width/2;
// let y = canvas.height-35;
let playerHeight = kapiPos.size;
let playerWidth = kapiPos.size;
let paddleX = kapiPos.x;
const game = {req: 0};
game.req = requestAnimationFrame(kapibaraDraw);

	document.addEventListener("keydown", keyRightHandler, false);
	document.addEventListener("keyup", keyLeftHandler, false);

	function keyRightHandler(e){
		if(e.keyCode == 39){
			rightPressed = true;
            kapibaraDirection = true;
		}
		if(e.keyCode == 37){
			leftPressed = true;
            kapibaraDirection = false;
		}
		if(e.keyCode == 38){
		  jumpPressed = true;
		}
    
	}

	function keyLeftHandler(e){
		if(e.keyCode == 39){
			rightPressed = false;
		}
		if(e.keyCode == 37){
			leftPressed = false;
		}
	}
function kapibaraDraw (){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
    earth();
/////////////////////// BODY 
ctx.beginPath();
    ctx.fillStyle = 'Sienna';
    ctx.ellipse(paddleX, canvas.height/2-playerHeight-jumpHeight, 30, 50, 80, 0, Math.PI*2);
    ctx.fill();

 /////////////////////// HEAD
ctx.beginPath();
if( !kapibaraDirection){
      ctx.ellipse(paddleX - 48, canvas.height/2-playerHeight-jumpHeight-50, 20, 30, 80, 0, Math.PI*2);
      ctx.rect(paddleX-48, canvas.height/2-playerHeight-jumpHeight - 50, 30, 45);
}else if(kapibaraDirection){
      ctx.ellipse(paddleX +48, canvas.height/2-playerHeight-jumpHeight-50, 20, 30, 80, 0, Math.PI*2);
      ctx.rect(paddleX +20, canvas.height/2-playerHeight-jumpHeight - 50, 30, 45);
}
    ctx.fill();
//////////////////// TAIL
ctx.beginPath();
    ctx.strokeStyle = "Sienna"
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
if(!kapibaraDirection){
  ctx.moveTo(paddleX +30, canvas.height/2-playerHeight-jumpHeight);
  ctx.lineTo(paddleX +60, canvas.height/2-playerHeight-jumpHeight -20);
}else if(kapibaraDirection){
  ctx.moveTo(paddleX -30, canvas.height/2-playerHeight-jumpHeight);
  ctx.lineTo(paddleX -60, canvas.height/2-playerHeight-jumpHeight -20);
}
     ctx.stroke();
/////////////////// EYES
ctx.beginPath();
ctx.fillStyle = 'black';
 if( !kapibaraDirection ){
   ctx.arc(paddleX-50, canvas.height/2-playerHeight-jumpHeight -50, 5,0, Math.PI*2)
 }else if(kapibaraDirection){
   ctx.arc(paddleX +50, canvas.height/2-playerHeight-jumpHeight -50, 5,0, Math.PI*2)
 }
   ctx.fill();
///////////////////  EARS         
ctx.beginPath();
    ctx.fillStyle = 'Sienna';
if (!kapibaraDirection){
    ctx.ellipse(paddleX -30, canvas.height/2-playerHeight-jumpHeight - 70, 7, 4, 80, 0, Math.PI*2);
    ctx.ellipse(paddleX -40, canvas.height/2-playerHeight-jumpHeight - 73, 7, 4, 80, 0, Math.PI*2);
}else if(kapibaraDirection){
    ctx.ellipse(paddleX +30, canvas.height/2-playerHeight-jumpHeight - 70, 7, 4, 80, 0, Math.PI*2);
    ctx.ellipse(paddleX +40, canvas.height/2-playerHeight-jumpHeight- 73, 7, 4, 80, 0, Math.PI*2);
}
    ctx.fill();
////////////////////// FEET
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.moveTo(paddleX -30, canvas.height/2-playerHeight-jumpHeight +10);
    ctx.lineTo(paddleX -40, canvas.height/2-playerHeight-jumpHeight + 50);
    ctx.moveTo(paddleX+20, canvas.height/2-playerHeight-jumpHeight +10);
    ctx.lineTo(paddleX +30, canvas.height/2-playerHeight-jumpHeight +50);
    ctx.stroke();    
////////////////////
game.req = requestAnimationFrame(kapibaraDraw);
};
function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    earth();
	if(rightPressed && paddleX < canvas.width-playerWidth){
		paddleX += 7;
	}
	else if(leftPressed && paddleX > 0){
		paddleX -= 7;
	}
	if(jumpPressed){
    jumpCount++;
    jumpHeight = 4*jumpLength*Math.sin(Math.PI*jumpCount/jumpLength);
    }
	if(jumpCount>jumpLength){
    jumpCount=0;
    jumpPressed=false;
    jumpHeight=0;
	}
    if(paddleX > 300){
    canvas.height/2-playerHeight-jumpHeight/2;
   }
	kapibaraDraw();
    kapiEarth ();
}
setInterval(draw, 10);

function kapiEarth () {
   
}



function earth(){
    ctx.fillStyle = "green";
    ctx.fillRect(0, 400, 300, 500);
    ctx.fillRect(300, 600, 300, 300);
}