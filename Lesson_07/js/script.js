window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    const context = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    // Loading Classes from other js files
    class InputHandler {
        constructor() {
            this.keys = []

            window.addEventListener('keydown', (e) =>{
                if (    (e.key === 's' ||
                        e.key === 'w' ||
                        e.key === 'a' ||
                        e.key === 'd')
                        && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key)
                }
            })

            window.addEventListener('keyup', (e) =>{
                if (    e.key === 's' ||
                        e.key === 'w' ||
                        e.key === 'a' ||
                        e.key === 'd'){
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
            })
        }
    }

    function handleEnemies(){

    }

    function displayStatusText(){

    }

    const input = new InputHandler()

    function animate(){
    }
})