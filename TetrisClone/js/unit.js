import InputHandler from './input.js';

export default class Unit {
    constructor(game, unitType) {
        this.game = game;
        this.startingPosition = this.getStartingPosition(unitType);

        this.gridX = this.startingPosition[0];
        this.gridY = this.startingPosition[1];

        this.blockSize = 30;

        this.blockSpeed = 0;
        this.blockBreakSpeed = 500;

        this.matrix = this.createUnit(unitType);
        this.bounds = this.getUnitBounds(this.matrix)
        this.left = this.bounds[0];
        this.right = this.bounds[1] + 1;
        this.bottom = this.bounds[2] + 1;

        this.input = new InputHandler(this.game);

        this.inPlay = true;
    }

    update(deltaTime) {
        // shift unit

        // movement
        if (this.blockSpeed < this.blockBreakSpeed) {
            this.blockSpeed += deltaTime;

        } else if (this.game.unit.gridY + 1 + this.game.unit.bottom <= 20) {

            // move by input
            if (this.input.keys.indexOf('ArrowRight') !== -1) {
                if (!(this.game.unit.gridX + this.game.unit.right >= 10)) {
                    this.game.unit.gridX += 1
                    this.input.keys = []
                }

            }
            if (this.input.keys.indexOf('ArrowLeft') !== -1) {
                if (!(this.game.unit.gridX + this.game.unit.left <= 0)) {
                    this.game.unit.gridX -= 1
                    this.input.keys = []
                }

            }
            if (this.input.keys.indexOf('ArrowDown') !== -1) {
                if (!(this.game.unit.gridY + this.game.unit.bottom + 1 <= 10)) {
                    this.game.unit.gridY += 1
                    this.input.keys = []
                }
            }

            // auto move down
            this.blockSpeed = 0;
            this.gridY += 1;

            console.log('unit X is: ', this.game.unit.gridX)
            console.log('unit left is: ', this.game.unit.left)
            console.log('unit X - left is: ', this.game.unit.gridX + this.game.unit.left)
            console.log('------------------------------------')

        } else {
            // merge unit and grid

            // out of play
            this.inPlay = false;
        }

    }

    draw(context) {

        for (let i = 0; i < this.matrix.length; i++) {                                      // Color Blocks
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[j][i] === 1) {
                    context.fillStyle = 'white';
                    context.fillRect(i * 30 + (this.blockSize * this.gridX), j * 30 + (this.blockSize * this.gridY), this.blockSize, this.blockSize);
                }
            }
        }
    }

    createUnit(type) {
        switch (type) {
            case 'I':
                return [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                ];
            case 'L':
                return [
                    [0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1],
                ];
            case 'J':
                return [
                    [0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 0],
                ];
            case 'O':
                return [
                    [1, 1],
                    [1, 1],
                ];
            case 'T':
                return [
                    [0, 1, 0],
                    [1, 1, 1],
                    [0, 0, 0],
                ];
            case 'S':
                return [
                    [0, 1, 1],
                    [1, 1, 0],
                    [0, 0, 0],
                ];
            case 'Z':
                return [
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 0, 0],
                ];
        }
    }

    getStartingPosition(type) {
        switch (type) {
            case 'I':
                return [3, -1];
            case 'L':
                return [3, -1];
            case 'J':
                return [4, -1];
            case 'O':
                return [4, 0];
            case 'T':
                return [4, -1];
            case 'S':
                return [4, -1];
            case 'Z':
                return [4, -1];
        }
    }

    getUnitBounds(matrix) {
        let left = matrix[0].length; // Initialize to the maximum possible value
        let right = 0; // Initialize to the minimum possible value
        let bottom = 0; // Initialize to the minimum possible value

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 1) {
                    if (j < left) left = j;
                    if (j > right) right = j;
                    if (i > bottom) bottom = i;
                }
            }
        }

        // If no '1' was found, set left to 0
        if (left === matrix[0].length) left = 0;

        return [left, right, bottom];
    }
}