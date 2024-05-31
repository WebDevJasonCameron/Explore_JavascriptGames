document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 800;

    // Classes moved external js


    const game = new Game(ctx, canvas.width, canvas.height);

    let lastTime = 1;
    function animate(timeStamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const deltaTime = timeStamp - lastTime;            // DT is to keep old & new PCs relevant (animation speed)
        lastTime = timeStamp;

        game.update(deltaTime);
        game.draw();

        requestAnimationFrame(animate);                     // This will provide the timeStamp when it calls itself
    }

    animate(0);

})

