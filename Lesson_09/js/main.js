import Player  from "./Player.js";
import InputHandler from "./Input.js";

window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    loading.style.display = 'none';

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;

            // OBJs
            this.player = new Player(this);
            this.input = new InputHandler();
        }

        update(deltaTime) {
            this.player.update(this.input.keys, deltaTime)
        }

        draw(context){
            this.player.draw(context)
        }
    }

    const game = new Game(canvas.width, canvas.height);

    let lastTime = 0;

    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;                 // Controlling animation speed
        lastTime = timeStamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime)
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate(0);
});