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

        this.image = ghost;
    }

    draw(ctx){
        ctx.save()
        ctx.globalAlpha = 0.5;
        super.draw(ctx);
        ctx.restore()
    }
}