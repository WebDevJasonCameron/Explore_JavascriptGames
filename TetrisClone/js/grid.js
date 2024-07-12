export default class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.blockSize = 30;

    this.matrix = this.createMatrix();
  }

  update(deltaTime) {
    this.matrix[0][0] = 1;
    this.matrix[1][1] = 1;
    this.matrix[2][2] = 1;
    this.matrix[3][3] = 1;
    this.matrix[4][4] = 1;
    this.matrix[5][5] = 1;
    this.matrix[6][6] = 1;
    this.matrix[7][7] = 1;
    this.matrix[8][8] = 1;
    this.matrix[9][9] = 1;
    this.matrix[0][10] = 1;
    this.matrix[1][11] = 1;
    this.matrix[2][12] = 1;
    this.matrix[3][13] = 1;
    this.matrix[4][14] = 1;
    this.matrix[5][15] = 1;
    this.matrix[6][16] = 1;
    this.matrix[7][17] = 1;
    this.matrix[8][18] = 1;
    this.matrix[9][19] = 1;
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

