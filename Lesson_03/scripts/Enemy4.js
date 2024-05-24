
class Enemy4 {
    constructor() {

        this.image = new Image();
        this.image.src = './assets/enemy4.png'
        this.speed = Math.random() * 4 + 2;
        this.spriteWidth = 210;
        this.spriteHeight = 210;

        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;

        this.x = Math.random() * (canvas4.width - this.width);
        this.y = Math.random() * (canvas4.height - this.height);

        this.newX = Math.random() * (canvas4.width - this.width);
        this.newY = Math.random() * (canvas4.height - this.height);

        this.ctx = canvas4.getContext('2d');

        this.frame = 0;                                             //   Movements
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.interval = Math.floor(Math.floor(Math.random() * 200 + 50));

    }

    update(){
        if (gameFrame % this.interval === 0) {
            this.newX = Math.random() * (canvas4.width - this.width);
            this.newY = Math.random() * (canvas4.height - this.height);
        }

        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx/70;
        this.y -= dy/70;


        if (this.x + this.width < 0) this.x = canvas4.width;
        // animate sprites
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){
        this.ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,  this.x, this.y, this.width, this.height);
    }
}
