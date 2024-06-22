export default class Player{
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;                                 // Canvas or "stage"
        this.gameHeight = gameHeight;

        this.states = [];                                           // Player state
        this.currentState = this.states[0];

        this.image = document.getElementById('dog-image')           // Image Sheet Location
        this.width = 200;
        this.height = 181.83;

        this.x = 0;                                                 // Canvas location
        this.y = 0;
    }

    draw(context){
        context.drawImage(this.image, this.x, this.y);
    }
}

