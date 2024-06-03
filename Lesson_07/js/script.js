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
                if (e.key === 's' && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key)
                }
                console.log(e.key, this.keys)
            })

            window.addEventListener('keyup', (e) =>{
                if (e.key === 's'){
                    this.keys.splice(this.keys.indexOf(e.key), 1);
                }
                console.log(e.key, this.keys)
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