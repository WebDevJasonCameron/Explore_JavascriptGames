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
            console.log(e.key)
        });


        // window.addEventListener('keyup', e => {
        //     if ((  e.key === 'ArrowDown' || e.key === 's' ||
        //             e.key === 'ArrowLeft' || e.key === 'a' ||
        //             e.key === 'ArrowRight' || e.key === 'd')
        //         && this.keys.indexOf(e.key) === -1) {
        //         this.keys.splice(this.keys.indexOf(e.key), 1);
        //     }
        // });

    }
}