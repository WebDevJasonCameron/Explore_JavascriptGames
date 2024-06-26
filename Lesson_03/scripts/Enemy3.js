class Enemy3 {
    constructor() {

        this.image = new Image();
        this.image.src = './assets/enemy3.png'
        this.speed = Math.random() * 4 + 2;
        this.spriteWidth = 218;
        this.spriteHeight = 177;

        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;

        this.x = Math.random() * (canvas3.width - this.width);
        this.y = Math.random() * (canvas3.height - this.height);

        this.ctx = canvas3.getContext('2d');

        this.frame = 0;                                             //   Movements
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
        this.angle = 0;
        this.angleSpeed = Math.random() * 1.5 + 0.5;
        //this.curve = Math.random() * 200 + 50;
    }

    update(){
        this.x = canvas3.width / 2  * Math.cos(this.angle * Math.PI/90) + canvas3.width / 2 - this.width  /2;
        this.y = canvas3.height / 2 * Math.sin(this.angle * Math.PI/270) + canvas3.height / 2 - this.height  /2;
        this.angle += this.angleSpeed;
        if (this.x + this.width < 0) this.x = canvas3.width;
        // animate sprites
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){
        this.ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,  this.x, this.y, this.width, this.height);
    }
}
