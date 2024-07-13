export default class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.blockSize = 30;

        this.matrix = this.createMatrix();
    }

    update() {

    }

    draw(context) {

        for (let x = 0; x <= this.width; x += 30) {                                       // Vertical Lines
            context.moveTo(x, 0);
            context.lineTo(x, this.height + 30);
        }

        for (let y = 0; y <= this.height; y += 30) {                                        // Horizontal Lines
            context.moveTo(0, y);
            context.lineTo(this.height + 30, y);
        }

        context.strokeStyle = "white";
        context.stroke();

        for (let i = 0; i < this.matrix.length; i++) {                                      // Color Blocks
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] === 1){
                    context.fillStyle = 'white';
                    context.fillRect(i * 30, j * 30, this.blockSize, this.blockSize);
                }
            }
        }
    }

    createMatrix(){
        return Array.from({length: this.height / 30}, () => Array(this.width / 30).fill(0));
    }
}