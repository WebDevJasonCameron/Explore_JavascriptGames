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
    }

    update(deltaTime) {
        // shift unit

        // movement
        if (this.blockSpeed < this.blockBreakSpeed) this.blockSpeed += deltaTime;
        else {
            this.blockSpeed = 0;

            if (!this.checkOutOfBounds(this.game.grid, this.game.unit)) this.gridY += 1;
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

    checkOutOfBounds(grid, unit) {

        let breakOutFlag = false

        for (let i = 0; i < unit.matrix.length; i++)

            if (breakOutFlag) return true;
            else {
                for (let j = 0; j < unit.matrix[i].length; j++) {

                    if (unit.matrix[i][j] === 1){
                        console.log('Found 1 in: ', unit.matrix[i], unit.matrix[i][j], ' checking...')

                        if (unit.gridY + 1 + unit.matrix[i].length <= grid.matrix.length) {
                            console.log('Yes, out of bounds with', unit.matrix[i][j])
                            breakOutFlag = false
                        }
                        else breakOutFlag = true
                    }
                }
            }

        }
    }
