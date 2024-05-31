class Game {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.enemies = [];
        this.enemyInterval = 100;
        this.enemyTimer = 0;
    }

    update(deltaTime){
        this.enemies = this.enemies.filter(object => !object.markedForDeletion);

        if (this.enemyTimer > this.enemyInterval){
            this.#addNewEnemy();
            this.enemyTimer = 0;
        } else {
            this.enemyTimer += deltaTime;
        }

        this.enemies.forEach(object => object.update(deltaTime));
    }

    draw(){
        this.enemies.forEach(object => object.draw(this.ctx));
    }

    #addNewEnemy(){
        this.enemies.push(new Worm(this))
        this.enemies.sort((a, b) => a.y - b.y);
        console.log(this.enemies)
    }
}
