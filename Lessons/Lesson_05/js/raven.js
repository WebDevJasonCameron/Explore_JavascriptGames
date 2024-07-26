class Raven {
    constructor() {
        this.spriteWidth = 271;
        this.spriteHeight = 194;

        this.sizeModifier = Math.random() * 0.6 + 0.4;

        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;

        this.x = canvas.width;                                          //   Placement of the ravens
        this.y = Math.random() * (canvas.height - this.height);

        this.directionX = Math.random() * 5 + 3;
        this.directionY = Math.random() * 5 - 2.5;

        this.markedForDeletion = false;

        this.image = new Image();
        this.image.src = './assets/ravens.png'

        this.frame = 0;
        this.maxframe = 4;

        this.timeSinceFlap = 0;
        this.flapInterval = Math.random() * 50 + 50;

        this.randomColors = [Math.floor(Math.random() * 255),            //   For Collisions
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255)]
        this.color = 'rgb(' + this.randomColors[0] + ',' + this.randomColors[1] + ',' + this.randomColors[2] + ')';

        this.hasTrail = Math.random() > 0.5;
    }

    update(deltaTime){
        if (this.y < 0 || this.y > canvas.height){                      //   Floor & Ceiling bounce
            this.directionY = this.directionY * - 1;
        }

        this.x -= this.directionX;
        this.y -= this.directionY;

        if (this.x < 0 - this.width) this.markedForDeletion = true;

        this.timeSinceFlap += deltaTime;

        if (this.timeSinceFlap > this.flapInterval) {
            if (this.frame > this.maxframe) this.frame = 0;
            else this.frame++;
            this.timeSinceFlap = 0;

            if (this.hasTrail) {
                particles.push(new Particle(
                                                this.x,
                                                this.y,
                                                this.width,
                                                this.color)
                );
            }

        }

        if (this.x < 0 -this.width) gameOver = true;

    }

    draw(){
        collisionCTX.fillStyle = this.color;
        collisionCTX.fillRect(this.x, this.y, this.width, this.height);

        ctx.drawImage(
            this.image,
            this.frame * this.spriteWidth,
            0,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height);

    }
}
