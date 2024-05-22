import Player from './Player.js';
import Enemy from './Enemy.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = new Player('Hero', 100, 100);
const enemy = new Enemy(300, 100);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw(ctx);
    enemy.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();
