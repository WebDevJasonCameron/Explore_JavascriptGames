class Spider extends Enemy {
    constructor(game) {
        super(game);                                    // Must call super first!

        this.spriteWidth = 310;
        this.spriteHeight = 175;

        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;

        this.x = Math.random() * this.game.width;
        this.y = 0 - this.height;

        this.vx = 0;
        this.vy = Math.random() * 0.1 + 0.1;                                    // Move up and down
        this.maxLength = Math.random() * game.height;

        this.image = spider;
    }

    update(deltaTime) {
        super.update(deltaTime);
        this.y += this.vy * deltaTime;

        if (this.y > this.maxLength) this.vy *= -1;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(this.x + this.width / 2, 0);
        ctx.lineTo(this.x + this.width / 2, this.y + 10 );
        ctx.stroke();
        super.draw(ctx);
    }
}