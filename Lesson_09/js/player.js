import {Sitting, Running, Jumping, Falling} from "./playerStates.js";


export default class Player {
    constructor(game) {
        this.game = game;                                       // Relation to the Game
        this.width = 100;
        this.height = 91.3;

        this.x = 0;                                             // Placement on game
        this.y = this.game.height - this.height;

        this.vy = 0;                                            // Vertical movement
        this.weight = 1;

        this.image = document.getElementById('player');         // Image mapping
        this.frameX = 0;
        this.frameY = 0;

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

    update(input) {
        // Input mng
        this.currentState.handleInput(input)

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
        else this.vy = 0
    }

    draw(context) {
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
        return this.y >= this.game.height - this.height
    }

    setState(state){
        this.currentState = this.states[state]
        this.currentState.enter();
    }

}