import Game from './game.js';

window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    loading.style.display = 'none';

    const canvas = document.getElementById('canvas-1');
    const ctx = canvas.getContext('2d');

    canvas.width = 300;
    canvas.height = 600;

    const game = new Game(canvas.width, canvas.height);

    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;;
        lastTime = timeStamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);

        requestAnimationFrame(animate)
    }

    animate(0)

})

