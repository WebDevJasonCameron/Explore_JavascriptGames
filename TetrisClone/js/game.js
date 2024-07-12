import Grid from './grid.js';

export default class Game {
    constructor(width, height){
        this.width = width;
        this.height = height;

        this.grid = new Grid(width, height);
    }

    update(deltaTime) {

    }

    draw(context) {
        this.grid.draw(context);
    }
}