window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    let enemies = [];

    // Loading Classes from other js files
    enemies.push(new Enemy(canvas.width, canvas.height));

    function handleEnemies(){
        enemies.forEach(enemy => {
            enemy.draw(ctx);
            enemy.update();
        })
    }

    function displayStatusText(){

    }

    // BLD INSTANCES
    const input = new InputHandler()
    const player = new Player(canvas.width, canvas.height)
    const background = new Background(canvas.width, canvas.height);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        background.draw(ctx);
        background.update();

        player.draw(ctx);
        player.update(input);

        handleEnemies();

        requestAnimationFrame(animate);
    }

    animate()
})