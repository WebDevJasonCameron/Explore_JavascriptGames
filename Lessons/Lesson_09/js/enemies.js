// Parent Class
class Enemy {
    constructor() {
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 20;
        this.frameInterval =  1000/this.fps;
        this.frameTimer = 0;
        this.markedForDeletion = false;
    }

    update(deltaTime) {
        // Movement
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;

        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0
        } else {
            this.frameTimer += deltaTime;
        }

        // Offscreen Check
        if (this.x + this.width < 0) this.markedForDeletion = true;
    } 

    draw(context) {
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height)

        context.drawImage(
            this.image,
            this.frameX * this.width,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height,
        )
    }
}

// Children Classes
export class FlyingEnemy extends Enemy {
    constructor(game) {
        super();
        this.game = game;
        this.width = 60;
        this.height = 44;
        this.x = this.game.width + Math.random() * 0.5;
        this.y = Math.random() * this.game.height * 0.5;
        this.speedX = Math.random() + 1;
        this.speedY = 0;
        this.maxFrame = 5;
        this.image = document.getElementById('enemy-fly')

        this.angle = 0;                                                     // Vertical Wobble
        this.va = Math.random() *  0.1 + 0.7;
    }

    update(deltaTime){
        super.update(deltaTime);
        this.angle += Math.sin(this.angle);

    }
}

export class GroundEnemy extends Enemy {
    constructor(game) {
        super();
        this.game = game;
        this.width = 60;
        this.height = 87;
        this.x = this.game.width;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.image = document.getElementById('enemy-plant')
        this.speedX = 0;
        this.speedY = 0;
        this.maxFrame = 1;
    }
}

export class ClimbingEnemy extends Enemy {
    constructor(game) {
        super();
        this.game = game;
        this.width = 120;
        this.height = 144;
        this.x = this.game.width;
        this.y = Math.random() * this.game.height * 0.5;
        this.image = document.getElementById('enemy-spider')
        this.speedX = 0;
        this.speedY = Math.random() > 0.5 ? 1 : -1;
    }
    update(deltaTime) {
        super.update(deltaTime);
        if (this.y > this.game.height - this.height - this.game.groundMargin) this.speedY *= -1;
        if (this.y < -this.height) this.markedForDeletion = true;
    }

    draw(context) {
        super.draw(context);
        context.beginPath();
        context.moveTo(this.x + this.width/2, 0)
        context.lineTo(this.x + this.width/2, this.y + 50);
        context.stroke();
    }

}


