export default class InputHandler {
    constructor(game) {
        this.game = game;
        this.keys = [];

        window.addEventListener('keydown', e => {
            if ((  e.key === 'ArrowDown' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight')
                && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            }
        });
    }
}