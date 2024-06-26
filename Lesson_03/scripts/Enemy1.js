
class Enemy1 {
    constructor() {

        this.image = new Image();
        this.image.src = './assets/enemy1.png'
        //this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;

        this.x = Math.random() * (canvas1.width - this.width);
        this.y = Math.random() * (canvas1.height - this.height);

        this.ctx = canvas1.getContext('2d');

        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }

    update(){
        this.x += Math.random() * 5 - 2.5;
        this.y += Math.random() * 5 - 2.5;
        // animate sprites
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){
        this.ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,  this.x, this.y, this.width, this.height);
    }
}
