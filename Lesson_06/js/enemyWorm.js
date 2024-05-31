class Worm extends Enemy {
    constructor(game) {
        super(game);                        //  Must call super first!

        this.spriteWidth = 229;
        this.spriteHeight = 171;

        this.width = this.spriteWidth / 2;
        this.height = this.spriteHeight / 2;

        this.x = this.game.width;
        this.y = Math.random() * this.game.height;

        this.vx = Math.random() * 0.1 + 0.1;        // vx = vertical x (speed)

        this.image = worm;

    }
}