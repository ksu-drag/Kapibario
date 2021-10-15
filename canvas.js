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
    
    //   for (let i = 0; i< 12; i++){
//       ctx.beginPath();
//       ctx.moveTo(445- (i *7) , 375 -(i *2));
//       ctx.lineTo(435- (i *7), 353+(i*2));
//       ctx.strokeStyle = "SaddleBrown";
//       ctx.stroke();
      
//   }

}



kapibaraDraw();







console.log(canvas.width/2 + 50, canvas.height/2 -50)