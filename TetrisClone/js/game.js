import Grid from './grid.js';
import Unit from './unit.js';

export default class Game {
    constructor(width, height){
        this.width = width;
        this.height = height;

        this.grid = new Grid(width, height);
        this.unit = new Unit(this, 'Z');

    }

    update(deltaTime) {
        this.grid.update(deltaTime)
        this.unit.update(deltaTime)
    }

    draw(context) {
        this.grid.draw(context);
        this.unit.draw(context);
    }
}