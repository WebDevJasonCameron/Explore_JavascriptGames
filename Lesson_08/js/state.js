export const states = {                                     // states
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    SITTING_LEFT: 2,
    SITTING_RIGHT: 3,
}

class State {                                               // PARENT
    constructor(state){
        this.state = state;
    }
}

export class StandingLeft extends State {                          // CHILDREN
    constructor(player){
        super('STANDING_LEFT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 1;
    }

    handleInput(input) {
        if (input === 'PRESS Right') this.player.setState(states.STANDING_RIGHT);
        else if (input === 'PRESS Down') this.player.setState(states.SITTING_LEFT);
    }
}

export class StandingRight extends State {
    constructor(player){
        super('STANDING_Right');
        this.player = player;
    }
    enter() {
        this.player.frameY = 0;
    }

    handleInput(input) {
        if (input === 'PRESS Left') this.player.setState(states.STANDING_LEFT);
        else if (input === 'PRESS Down') this.player.setState(states.SITTING_RIGHT);
    }
}

export class SittingLeft extends State {
    constructor(player){
        super('SITTING_LEFT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 9;
    }

    handleInput(input) {
        if (input === 'PRESS Left') this.player.setState(states.SITTING_RIGHT);
        else if(input === 'PRESS UP') this.player.setState(states.STANDING_LEFT)
    }
}

export class SittingRight extends State {                          // CHILDREN
    constructor(player){
        super('SITTING_RIGHT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 8;
    }

    handleInput(input) {
        if (input === 'PRESS Left') this.player.setState(states.SITTING_LEFT);
        else if(input === 'PRESS UP') this.player.setState(states.STANDING_RIGHT)
    }
}