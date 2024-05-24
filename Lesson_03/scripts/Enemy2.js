
class Enemy2 {
    constructor() {

        this.image = new Image();
        this.image.src = './assets/enemy2.png'
        this.speed = Math.random() * 4 + 2;
        this.spriteWidth = 266;
        this.spriteHeight = 188;

        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;

        this.x = Math.random() * (canvas2.width - this.width);
        this.y = Math.random() * (canvas2.height - this.height);

        this.ctx = canvas2.getContext('2d');

        this.frame = 0;                                             //   Movements
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = Math.random() * 5;                             //   Wave pattern
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 7;
    }

    update(){
        this.x -= this.speed;
        this.y += this.curve * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = canvas2.width;
        // animate sprites
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){
        this.ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,  this.x, this.y, this.width, this.height);
    }
}
