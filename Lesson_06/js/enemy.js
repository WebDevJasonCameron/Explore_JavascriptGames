class Enemy {
    constructor(game){
        this.game = game;

        this.markedForDeletion = false;
    }

    update(deltaTime){
        this.x -= this.vx * deltaTime;
        // remove enemies
        if (this.x < 0 - this.width) this.markedForDeletion = true;
    }

    draw(ctx){
        ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}
