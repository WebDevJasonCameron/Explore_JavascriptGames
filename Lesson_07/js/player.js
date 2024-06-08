class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.width = 200;
        this.height = 200;

        this.x = 10;
        this.y = this.gameHeight - this.height;

        this.image = document.getElementById('player')
        this.frameX = 0;
        this.frameY = 0;

        this.speed = 0;
    }

    update(input){
        // HORIZONTAL
        this.x += this.speed;
        if (input.keys.indexOf('ArrowLeft') > - 1){
            this.speed = 5;
        } else if(input.keys.indexOf('ArrowRight') > -1){
            this.speed = -5;
        } else {
            this.speed = 0;
        }

    }

    draw(context){
        context.fillStyle = 'white'
        context.drawImage(this.image, this.frameX, this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);

    }

}