class Enemy {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.width = 160;
        this.height = 119;

        this.image = document.getElementById("enemy-1");

        this.x = 0;
        this.y = 0;
    }

    draw(context) {
        context.drawImage(this.image, 0 * this.width, 0 * this.height, this.width, this.height this.x, this.y);
    }
}

