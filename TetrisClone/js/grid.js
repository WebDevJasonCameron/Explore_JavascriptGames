export default class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.matrix = this.createMatrix();

    console.log(this.matrix)
  }

  update(deltaTime) {
    this.matrix[0][0] = 1;

  }

  draw(context) {

    for (var x = 0; x <= this.width; x += 30) {                                            // Vertical Lines
        context.moveTo(x, 0);
        context.lineTo(x, this.height + 30);
    }

    for (var y = 0; y <= this.height; y += 30) {                                           // Horizontal Lines
        context.moveTo(0, y);
        context.lineTo(this.height + 30, y);
    }

    context.strokeStyle = "white";
    context.stroke();



 }

  createMatrix(){
    return Array.from({length: this.height / 30}, () => Array(this.width / 30).fill(0));
  }



}