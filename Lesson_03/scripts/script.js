/** @type {HTMLCanvasElement} */
import Enemy from "./Enemy.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;

const numberOfEnemies = 100;
const enemiesArray = [];

let gameFrame = 0;

for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy(gameFrame, './assets/enemy1.png'));
}

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();