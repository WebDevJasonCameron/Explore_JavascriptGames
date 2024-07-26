import Grid from './grid.js';
import Unit from './unit.js';

export default class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.units = ['I', 'L', 'J', 'O', 'T', 'S', 'Z'];

        this.grid = new Grid(width, height);
        this.unit = new Unit(this, this.units[(Math.floor(Math.random() * this.units.length))]);

    }

    update(deltaTime) {
        this.grid.update(deltaTime)

        if (this.unit.inPlay) {
            this.unit.update(deltaTime)
        } else {
            this.unit = new Unit(this, this.units[(Math.floor(Math.random() * this.units.length))]);
        }
    }

    draw(context) {
        this.grid.draw(context);
        this.unit.draw(context);
    }
}