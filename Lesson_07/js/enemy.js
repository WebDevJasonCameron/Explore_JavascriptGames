class Enemy {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.width = 160;
        this.height = 119;

        this.image = document.getElementById("enemy-1");

        this.x = this.gameWidth;
        this.y = this.gameHeight - this.height;

        this.frameX = 0;
    }

    draw(context) {
        context.drawImage(
            this.image,
            this.frameX * this.width,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height);
    }

    update(){
        this.x--;
    }
}

