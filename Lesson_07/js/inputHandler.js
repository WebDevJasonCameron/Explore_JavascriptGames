class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', function (e) {

            if (e.key === 'ArrowDown') {
                this.keys.push(e.key);
            }
        });
    }
}