import { StandingLeft, StandingRight, SittingLeft, SittingRight, RunningLeft, RunningRight  } from './state.js'


export default class Player{
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;                                 // Canvas or "stage"
        this.gameHeight = gameHeight;

        this.states = [                                             // Player state
                        new StandingLeft(this),
                        new StandingRight(this),
                        new SittingLeft(this),
                        new SittingRight(this),
                        new RunningLeft(this),
                        new RunningRight(this),
        ];
        this.currentState = this.states[1];

        this.image = document.getElementById('dog-image')           // Image Sheet Location
        this.width = 200;
        this.height = 181.83;

        this.x = this.gameWidth / 2 - this.width / 2;               // Canvas location
        this.y = this.gameHeight - this.height;
        this.frameX = 0;
        this.frameY = 0;
    }

    draw(context){
        context.drawImage(
            this.image,
            this.width * this.frameX,
            this.height * this.frameY,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
        );
    };

    update(input){
        this.currentState.handleInput(input)
    }

    setState(state) {
        this.currentState = this.states[state]
        this.currentState.enter()
    }

};

