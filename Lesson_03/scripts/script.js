/** @type {HTMLCanvasElement} */
const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");
const canvas3 = document.getElementById("canvas3");
const canvas4 = document.getElementById("canvas4");

const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");
const ctx4 = canvas4.getContext("2d");

canvas1.width = 500;
canvas1.height = 1000;
canvas2.width = 500;
canvas2.height = 1000;
canvas3.width = 500;
canvas3.height = 1000;
canvas4.width = 500;
canvas4.height = 1000;

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 1000;

const numberOfEnemies = 20;
const enemiesArray1 = [];
const enemiesArray2 = [];
const enemiesArray3 = [];
const enemiesArray4 = [];

let gameFrame = 0;

for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray1.push(new Enemy1());
    enemiesArray2.push(new Enemy2());
    enemiesArray3.push(new Enemy3());
    enemiesArray4.push(new Enemy4());
}

function animate(){
    ctx1.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );
    ctx2.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );
    ctx3.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );
    ctx4.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );

    enemiesArray1.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })

    enemiesArray2.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })

    enemiesArray3.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })

    enemiesArray4.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();