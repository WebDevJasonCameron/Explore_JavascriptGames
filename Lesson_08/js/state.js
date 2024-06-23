export const states = {                                     // states
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
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
    }
}