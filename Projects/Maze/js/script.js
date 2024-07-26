const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 800;

const cols = Math.floor(canvas.width / 10);
const rows = Math.floor(canvas.height / 10);
const grid = [];
const stack = [];

// Block class
class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.visited = false;
        this.walls = [true, true, true, true]; // top, right, bottom, left
    }

    draw() {
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        if (this.walls[0]) ctx.strokeRect(this.x, this.y, this.width, 0); // top
        if (this.walls[1]) ctx.strokeRect(this.x + this.width, this.y, 0, this.height); // right
        if (this.walls[2]) ctx.strokeRect(this.x, this.y + this.height, this.width, 0); // bottom
        if (this.walls[3]) ctx.strokeRect(this.x, this.y, 0, this.height); // left

        if (this.visited) {
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

// Player class
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(dx, dy) {
        const newX = this.x + dx * this.width;
        const newY = this.y + dy * this.height;
        const currentBlock = grid[index(this.x / 10, this.y / 10)];
        const nextBlock = grid[index(newX / 10, newY / 10)];

        if (nextBlock && !this.collidesWithWall(currentBlock, dx, dy)) {
            this.x = newX;
            this.y = newY;
        }
    }

    collidesWithWall(block, dx, dy) {
        if (dx === -1 && block.walls[3]) return true; // left
        if (dx === 1 && block.walls[1]) return true; // right
        if (dy === -1 && block.walls[0]) return true; // top
        if (dy === 1 && block.walls[2]) return true; // bottom
        return false;
    }
}

// Create grid
for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        grid.push(new Block(x * 10, y * 10));
    }
}

// Get block at (x, y)
function index(x, y) {
    if (x < 0 || y < 0 || x >= cols || y >= rows) {
        return -1;
    }
    return x + y * cols;
}

// Get random unvisited neighbor
function checkNeighbors(block) {
    const neighbors = [];
    const top = grid[index(block.x / 10, block.y / 10 - 1)];
    const right = grid[index(block.x / 10 + 1, block.y / 10)];
    const bottom = grid[index(block.x / 10, block.y / 10 + 1)];
    const left = grid[index(block.x / 10 - 1, block.y / 10)];

    if (top && !top.visited) neighbors.push(top);
    if (right && !right.visited) neighbors.push(right);
    if (bottom && !bottom.visited) neighbors.push(bottom);
    if (left && !left.visited) neighbors.push(left);

    if (neighbors.length > 0) {
        const r = Math.floor(Math.random() * neighbors.length);
        return neighbors[r];
    } else {
        return undefined;
    }
}

// Remove walls between two blocks
function removeWalls(a, b) {
    const x = a.x / 10 - b.x / 10;
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    const y = a.y / 10 - b.y / 10;
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}

// Maze generation with start and end points
function generateMaze(start, end) {
    start.visited = true;
    stack.push(start);

    while (stack.length > 0) {
        const current = stack[stack.length - 1];
        const next = checkNeighbors(current);

        if (next) {
            next.visited = true;
            stack.push(next);
            removeWalls(current, next);
        } else {
            stack.pop();
        }
    }

    // Ensure end point is connected
    end.visited = true;
    const lastBlock = stack[stack.length - 1];
    if (lastBlock) {
        removeWalls(lastBlock, end);
    }
}

// Draw the maze
function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    grid.forEach(block => block.draw());
}

// Randomly select start and end points
const start = grid[index(Math.floor(Math.random() * cols), Math.floor(Math.random() * rows))];
const end = grid[index(Math.floor(Math.random() * cols), Math.floor(Math.random() * rows))];

generateMaze(start, end);
drawMaze();

// Highlight start and end points
function drawEndPoints() {
    ctx.fillStyle = 'red';
    ctx.fillRect(start.x, start.y, start.width, start.height);

    ctx.fillStyle = 'green';
    ctx.fillRect(end.x, end.y, end.width, end.height);
}

drawEndPoints();

// Create and draw the player
const player = new Player(start.x, start.y);
player.draw();

// Add keyboard event listener for player movement
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            player.move(0, -1);
            break;
        case 'ArrowDown':
            player.move(0, 1);
            break;
        case 'ArrowLeft':
            player.move(-1, 0);
            break;
        case 'ArrowRight':
            player.move(1, 0);
            break;
    }
    drawMaze();
    drawEndPoints();
    player.draw();
    checkEnd();
});

// Check if player has reached the end point
function checkEnd() {
    if (player.x === end.x && player.y === end.y) {
        alert('Congratulations! You reached the end.');
    }
}
