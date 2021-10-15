const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const kapiPos = {x: canvas.width/2, y: canvas.height/2, speed: 5};
console.log(kapiPos);

const game = {req: 0};
game.req = requestAnimationFrame(kapibaraDraw);
const keyz = {ArrowLeft: false, ArrowRight: false, ArrowUp: false, ArrowDown: false};
document.addEventListener('keydown', (e)=> {
    if(e.code in keyz){keyz[e.code] = true};
});
document.addEventListener('keyup', (e)=> {
    if(e.code in keyz){keyz[e.code] = false};
});

function movementPlayer() {
    if(keyz['ArrowLeft']){kapiPos.x += kapiPos.speed};
    if(keyz['ArrowRight']){kapiPos.x -=kapiPos.speed};
    if(keyz['ArrowUp']){kapiPos.y += kapiPos.speed};
    if(keyz['ArrowDown']){kapiPos.y -= kapiPos.speed};
}

function kapibaraDraw (){
    movementPlayer();
    ctx.beginPath();
        ctx.beginPath();
        ctx.fillStyle = 'Sienna';
        ctx.ellipse(kapiPos.x + 50, kapiPos.y-50, 20, 30, 80, 0, Math.PI*2);
        ctx.rect(kapiPos.x+20, kapiPos.y - 50, 30, 45);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(kapiPos.x, kapiPos.y, 30, 50, 80, 0, Math.PI*2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(kapiPos.x +50, kapiPos.y -50, 5,0, Math.PI*2)
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = 'Sienna';
        ctx.ellipse(kapiPos.x +30, kapiPos.y - 70, 7, 4, 80, 0, Math.PI*2);
        ctx.ellipse(kapiPos.x +40, kapiPos.y - 73, 7, 4, 80, 0, Math.PI*2);
        ctx.fill();
        ctx.beginPath();
        ctx.strokeStyle = "Sienna"
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.moveTo(kapiPos.x -30, kapiPos.x);
        ctx.lineTo(kapiPos.x -60, kapiPos.y -20);
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = 14;
        ctx.moveTo(kapiPos.x -30, kapiPos.y +10);
        ctx.lineTo(kapiPos.x -40, kapiPos.y + 50);
        ctx.moveTo(kapiPos.x +20, kapiPos.y +10);
        ctx.lineTo(kapiPos.x +30, kapiPos.y +50);
        ctx.stroke();    
    ctx.closePath();
    game.req = requestAnimationFrame(kapibaraDraw ());
};

