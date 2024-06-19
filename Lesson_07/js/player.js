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
        this.maxFrame = 8;
        this.frameTimer = 0;
        this.fps = 20;
        this.frameInterval = 1000/this.fps;

        this.speed = 0;

        this.vy = 0;
        this.weight = 1;
    }

    draw(context){
        context.strokeStyle = 'white'
        context.strokeRect(this.x, this.y, this.width, this.height);

        context.beginPath();
        context.arc(
                    this.x + this.width/2,
                    this.y + this.height/2,
                    this.width/2,
                    0,
                    2 * Math.PI
        );
        context.stroke();

        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );

    }

    update(input, deltaTime, enemies){
        // ANIMATION
        if (this.frameTimer > this.frameInterval){
            if (this.frameX >= this.maxFrame) this.frameX = 0;
            else this.frameX++;

            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }



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
            this.maxFrame = 5;
            this.frameY = 200;
        } else {
            this.vy = 0;
            this.maxFrame = 8;
            this.frameY = 0;
        }

        if (this.y > this.gameHeight - this.height) {               // Keeps from going through a floor
            this.y = this.gameHeight - this.height
        }
    }

    // UTILS
    onGround(){
        return this.y >= this.gameHeight - this.height;
    }

}