class Particle {
    constructor(x, y, size, color) {
        this.size = size;

        this.x = x + this.size * 0.5 + Math.random() * 50 - 25;
        this.y = y + this.size * 0.3;

        this.radius = Math.random() * this.size / 10;
        this.maxRadius = Math.random() * 20 + 35;

        this.markedForDeletion = false;

        this.speedX = Math.random() + 0.5;
        this.color = color;
    }
    update() {
        this.speed += this.speedX;
        this.radius += 0.8;
        if (this.radius > this.maxRadius - 5) this.markedForDeletion = true;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = 1 - this.radius / this.maxRadius;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}