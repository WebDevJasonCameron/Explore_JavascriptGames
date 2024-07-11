import {Sitting, Running, Jumping, Falling} from "./playerStates.js";


export default class Player {
    constructor(game) {
        this.game = game;                                       // Relation to the Game
        this.width = 100;
        this.height = 91.3;

        this.x = 0;                                             // Placement on game
        this.y = this.game.height - this.height - this.game.groundMargin;

        this.vy = 0;                                            // Vertical movement
        this.weight = 1;

        this.image = document.getElementById('player');         // Image mapping
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame;
        this.fps = 20;
        this.frameInterfal = 1000/this.fps
        this.frameTimer = 0;

        this.speed = 0;                                         // Movement
        this.maxSpeed = 10;

        this.states = [                                         // Player state mng
            new Sitting(this),
            new Running(this),
            new Jumping(this),
            new Falling(this),
        ];
        this.currentState = this.states[0];
        this.currentState.enter();
    }

    update(input, deltaTime) {
        // Collision detection
        this.checkCollision();

        // Input mng
        this.currentState.handleInput(input);

        // Horizontal Movement
        this.x += this.speed;

        if (input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;

        // Boundaries
        if (this.x < 0) this.x = 0;
        if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;

        // Vertical Movement
        this.y += this.vy;
        if (!this.onGround()) this.vy += this.weight;
        else this.vy = 0;

        // Sprite Animation
        if (this.frameTimer > this.frameInterfal) {
            this.frameTimer = 0;

            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
    }

    draw(context) {
        if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height)

        context.drawImage(
                            this.image,
                            this.frameX * this.width,
                            this.frameY * this.height,
                            this.width,
                            this.height,
                            this.x,
                            this.y,
                            this.width,
                            this.height
        );
    }

    onGround(){
        return this.y >= this.game.height - this.height - this.game.groundMargin;
    }

    setState(state, speed){
        this.currentState = this.states[state];
        this.game.speed = this.game.maxSpeed * speed;
        this.currentState.enter();
    }

    checkCollision() {
        this.game.enemies.forEach(enemy => {
            if (
                enemy.x < this.x + this.width &&
                enemy.x + enemy.width > this.x &&
                enemy.y < this.y + this.height &&
                enemy.y + enemy.height > this.y
            ) {
                enemy.markedForDeletion = true;
                this.game.score++;
            } else {

            }
        })
    }

}