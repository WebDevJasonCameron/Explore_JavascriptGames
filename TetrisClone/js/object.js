class Object {
    constructor(game){
        this.game = game;
        this.x = 0;
        this.y = 0;

        this.blockSize = 30;

        this.matrix = null;
    }

    update() {
        // shift object
    }

    draw(context) {

        for (let x = 0; x <= this.matrix.width; x += 30) {                                  // Vertical Lines
            context.moveTo(x, 0);
            context.lineTo(x, this.matrix.height + 30);
        }

        for (let y = 0; y <= this.matrix.height; y += 30) {                                 // Horizontal Lines
            context.moveTo(0, y);
            context.lineTo(this.matrix.height + 30, y);
        }

        context.strokeStyle = "white";
        context.stroke();

        for (let i = 0; i < this.matrix.length; i++) {                                      // Color Blocks
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === 1){
                    context.fillStyle = 'grey';
                    context.fillRect(i * 30, j * 30, this.blockSize, this.blockSize);
                }
            }
        }
    }
}


