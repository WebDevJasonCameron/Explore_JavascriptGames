class Ghost extends Enemy {
    constructor(game) {
        super(game);

        this.spriteWidth = 261;
        this.spriteHeight = 209;

        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;

        this.x = this.game.width;
        this.y = Math.random() * this.game.height * 0.6;        // Take only 60% of top space

        this.vx = Math.random() * 0.2 + 0.1;                    // vx = vertical x (speed)
        this.angle = 0;
        this.curve = Math.random() * 3

        this.image = ghost;

    }

    update(deltaTime) {
        super.update(deltaTime);

        this.y += Math.sin(this.angle) * this.curve;                        // Making waves
        this.angle += 0.04;
    }

    draw(ctx){
        ctx.save()
        ctx.globalAlpha = 0.4;
        super.draw(ctx);
        ctx.restore()
    }
}