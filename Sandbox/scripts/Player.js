export default class Player {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, 50, 50);
    }
}