export default class InputHandler {
    constructor() {
        this.lastKey = '';

        window.addEventListener('keydown', (e) => {
            switch (e.key){
                case "ArrowLeft":
                    this.lastKey = "PRESS Left";
                    break
                case "ArrowRight":
                    this.lastKey = "PRESS Right";
                    break
            }
        })

        window.addEventListener('keyup', (e) => {
            switch (e.key){
                case "ArrowLeft":
                    this.lastKey = "RELEASE left";
                    break
                case "ArrowRight":
                    this.lastKey = "RELEASE Right";
                    break
            }
        })
    }
}