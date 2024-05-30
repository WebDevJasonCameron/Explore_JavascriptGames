// ART CANVAS
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// COLLISION CANVAS
const collisionCanvas = document.getElementById('collision-canvas');
const collisionCTX = collisionCanvas.getContext('2d');
collisionCanvas.width = window.innerWidth;
collisionCanvas.height = window.innerHeight;

// VARs
let score = 0;                                                  //   Score
let gameOver = false;                                           //   End game
ctx.font = '50px Impact'

let timeToNextRaven = 0;                                        //   Manage time
let ravenInterval = 500;
let lastTime = 0

let ravens = [];
let explosions = [];
let particles = [];

// DRAWs
function drawScore(){
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 50, 75);
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score, 55, 80);
}

function drawGameOver(){
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';
    ctx.fillText(
                    "GAME OVER, your score is " + score,
                    canvas.width / 2,
                    canvas.height / 2);

    ctx.fillStyle = 'white';
    ctx.fillText(
        "GAME OVER, your score is " + score,
        canvas.width / 2 + 5,
        canvas.height / 2 + 5);
}


// LISTENERs
window.addEventListener('click', function(e){
    const detectPixelColor = collisionCTX.getImageData(e.x, e.y, 1, 1)
    const pc = detectPixelColor.data;

    ravens.forEach(object => {
        if (object.randomColors[0] === pc[0] &&
            object.randomColors[1] === pc[1] &&
            object.randomColors[2] === pc[2]){

            //   Collision Detected by Color
            object.markedForDeletion = true;
            score++;
            explosions.push(new Explosion(object.x, object.y, object.width));
            console.log(explosions);
        }
    })
});

// ANIMATORs
function animate(timestamp){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    collisionCTX.clearRect(0, 0, canvas.width, canvas.height);

    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextRaven += deltaTime;

    if (timeToNextRaven > ravenInterval) {
        ravens.push(new Raven());
        timeToNextRaven = 0;

        ravens.sort(function(a, b){                                 //  Big in front, small in back (dept)
            return a.width - b.width;
        })
    }

    drawScore();
    [...particles, ...ravens, ...explosions].forEach(object => object.update(deltaTime));
    [...particles, ...ravens, ...explosions].forEach(object => object.draw());

    ravens = ravens.filter(object => !object.markedForDeletion);
    particles = particles.filter(object => !object.markedForDeletion);
    explosions = explosions.filter(object => !object.markedForDeletion);

    if (!gameOver) requestAnimationFrame(animate);
    else drawGameOver();
}


// RUN
animate(0);












