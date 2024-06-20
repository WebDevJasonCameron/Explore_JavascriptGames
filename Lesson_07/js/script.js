window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    let score  = 0;
    let gameOver = false;

    let enemies = [];

    // Loading Classes from other js files

    function handleEnemies(deltaTime){
        if (enemyTimer > enemyInterval + randomEnemyInterval){
            enemies.push(new Enemy(canvas.width, canvas.height));
            enemyTimer = 0;
        } else {
            enemyTimer += deltaTime;
        }

        enemies.forEach(enemy => {
            enemy.draw(ctx);
            enemy.update(deltaTime);
        })

        enemies = enemies.filter(enemy => !enemy.markedForDeletion);
    }

    function displayStatusText(context){
        score = 0

        context.font = '40px Helvetica';
        context.fillStyle = 'black';
        context.fillText('Score: ' + score, 20, 50)
        context.fillStyle = 'white';
        context.fillText('Score: ' + score, 22, 52)

        if (gameOver) {
            context.textAlign = 'center';
            context.fillStyle = 'black';
            context.fillText('GAME OVER, try again!', canvas.width / 2, 200);

            context.fillStyle = 'white';
            context.fillText('GAME OVER, try again!', canvas.width / 2 + 2, 202);
            console.log('test')
        }
    }

    // BLD INSTANCES
    const input = new InputHandler()
    const player = new Player(canvas.width, canvas.height)
    const background = new Background(canvas.width, canvas.height);

    let lastTime = 0;
    let enemyTimer = 0;
    let enemyInterval = 1000;
    let randomEnemyInterval = Math.random() * 1000 + 500

    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        background.draw(ctx);
        background.update();

        player.draw(ctx);
        player.update(input, deltaTime, enemies, gameOver);

        handleEnemies(deltaTime);

        displayStatusText(ctx);

        if (!gameOver) requestAnimationFrame(animate);
    }

    animate(0)
})