const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 700;
const explosions = [];

let canvasPosition = canvas.getBoundingClientRect();

class Explosion {
    constructor(x, y) {
        this.spriteWidth = 200;                                 //   Sprite size
        this.spriteHeight = 179;

        this.width = this.spriteWidth * 0.7;                    //   Actual drawn image size
        this.height = this.spriteHeight * 0.7;

        this.x = x;                                             //   Location on screen
        this.y = y;

        this.image = new Image();                               //   Image creation
        this.image.src = './assets/boom.png'

        this.frame = 0;                                         //   Animation prep
        this.timer = 0;
        this.angle = Math.random() * 6.2;

        this.sound = new Audio();                               //   Sound prep
        this.sound.src = './assets/boom.wav'
    }

    update(){
        if (this.frame === 0) this.sound.play();

        this.timer++;
        if (this.timer % 10 === 0){
            this.frame++;
        }
    }
    draw(){
        ctx.save();

        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        ctx.drawImage(this.image,
                    this.spriteWidth * this.frame,
                    0,
                    this.spriteWidth,
                    this.spriteHeight,
                    0 - this.width / 2,
                    0 - this.height / 2,
                    this.width,
                    this.height);

        ctx.restore();                                  //   restores to the original save point.  w/o this, it locks
    }
}

window.addEventListener('click', function(e){
    createAnimation(e)
});

/*
window.addEventListener('mousemove', function(e){       //   Fun animation
    createAnimation(e)
})
*/

function createAnimation(e){
    let positionX = e.x - canvasPosition.left;
    let positionY = e.y - canvasPosition.top;
    explosions.push(new Explosion(positionX, positionY));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);           //   Clear each frame

    for (let i = 0; i < explosions.length; i++) {               //   Update then draw
        explosions[i].update();
        explosions[i].draw();

        if (explosions[i].frame > 5) {                          //   Removing the explosions from the growing array
            explosions.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animate);
}

animate()