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

        this.vy = 0;
        this.weight = 1;
    }

    update(input){

        // KEYBOARD
        if (input.keys.indexOf('ArrowRight') > - 1){
            this.speed = 5;
        } else if(input.keys.indexOf('ArrowLeft') > -1) {
            this.speed = -5;
        } else if (input.keys.indexOf('ArrowUp') > -1 && this.onGround()) {
            this.vy -= 32;
        } else {
            this.speed = 0;
        }

        // HORIZONTAL MV
        this.x += this.speed;

        if (this.x < 0) this.x = 0;
        else if (this.x > this.gameWidth - this.width) this.x = this.gameWidth - this.width;

        // VERTICAL MV
        this.y += this.vy;

        if (!this.onGround()){
            this.vy += this.weight;
            this.frameY = 200;
        } else {
            this.vy = 0;
            this.frameY = 0;
        }

        if (this.y > this.gameHeight - this.height) {               // Keeps from going through a floor
            this.y = this.gameHeight - this.height
        }
    }

    draw(context){
        context.drawImage(this.image, this.frameX, this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);

    }

    // UTILS
    onGround(){
        return this.y >= this.gameHeight - this.height;
    }

}