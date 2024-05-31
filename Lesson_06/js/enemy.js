class Enemy {
    constructor(game){
        this.game = game;
        this.markedForDeletion = false;

        this.frameX;
        this.maxFrame = 5;
        this.frameInterval = 100;
        this.frameTimer = 0;
    }

    update(deltaTime){
        this.x -= this.vx * deltaTime;
        // remove enemies
        if (this.x < 0 - this.width) this.markedForDeletion = true;
        if (this.y < 0 - this.height * 2) this.markedForDeletion = true;

        // Animate
        if (this.frameTimer > this.frameInterval){
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }
    }

    draw(ctx){
        ctx.drawImage(
                        this.image,
                        this.frameX * this.spriteWidth,
                        0,
                        this.spriteWidth,
                        this.spriteHeight,
                        this.x,
                        this.y,
                        this.width,
                        this.height)
    }
}
