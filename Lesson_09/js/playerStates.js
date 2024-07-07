// Enum
const states = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
}

// Parent State Class
class State {
    constructor(state) {
        this.state = state;
    }
}

// Child State Classes
export class Sitting extends State {
    constructor(player) {
        super('SITTING');
        this.player = player;
    }

    enter() {

    }

    handleInput(input) {

    }
}