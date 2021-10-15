const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function kapibaraDraw (){
    ctx.beginPath();
    ctx.fillStyle = 'Sienna';
    ctx.ellipse(canvas.width/2 + 50, canvas.height/2 -50, 20, 30, 80, 0, Math.PI*2);
    ctx.rect(420, 350, 30, 45);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(canvas.width/2, canvas.height/2, 30, 50, 80, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(450, 350, 5,0, Math.PI*2)
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'Sienna';
    ctx.ellipse(430, 330, 7, 4, 80, 0, Math.PI*2);
    ctx.ellipse(440, 327, 7, 4, 80, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "Sienna"
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.moveTo(370, 400);
    ctx.lineTo(340, 380);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.moveTo(370, 410);
    ctx.lineTo(360, 450);
    ctx.moveTo(420, 410);
    ctx.lineTo(430, 450);
    ctx.stroke();    
}

kapibaraDraw();